import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "../../lib/prismadb";

export type GenerateResponseData = {
  original: string | null;
  generated: string | null;
  id: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    imageUrl: string;
    inputFeatures: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<GenerateResponseData | string>
) {
  // Check if user is logged in
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(500).json("Login to upload.");
  }

  // Get user from DB
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email!,
    },
    select: {
      credits: true,
      _count: {
        select: {
          purchases: true,
        },
      },
    },
  });

  // Check if user has any credits left
  if (user?.credits === 0) {
    return res.status(400).json(`You have no generations left`);
  }

  let REPLICATE_KEY = process.env.NEXT_PUBLIC_REPLICATE_API_KEY;

  // Check to see if user is a paying customer
  if (user?._count?.purchases && user?._count?.purchases > 0) {
    REPLICATE_KEY = process.env.REPLICATE_API_KEY_PAID;
  }

  // If they have credits, decrease their credits by one and continue
  await prisma.user.update({
    where: {
      email: session.user.email!,
    },
    data: {
      credits: {
        decrement: 1,
      },
    },
  });

  try {
    const { imageUrl, inputFeatures } = req.body;
    // POST request to Replicate to start the image captionning process
    let startResponse = await fetch(
      "https://api.replicate.com/v1/predictions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + REPLICATE_KEY,
        },
        body: JSON.stringify({
          version:
            "2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
          input: {
            image: imageUrl,
            inputFeatures,
          },
        }),
      }
    );

    let jsonStartResponse = await startResponse.json();

    let endpointUrl = jsonStartResponse.urls.get;
    const originalImage = jsonStartResponse.input.image;
    const descId = jsonStartResponse.id;

    // GET request to get the status of the image restoration process & return the result when it's ready
    let generatedDescription: string | null = null;
    while (!generatedDescription) {
      // Loop in 1s intervals until the alt text is ready
      let finalResponse = await fetch(endpointUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + REPLICATE_KEY,
        },
      });
      let jsonFinalResponse = await finalResponse.json();

      if (jsonFinalResponse.status === "succeeded") {
        generatedDescription = jsonFinalResponse.output.slice(9) as string;
      } else if (jsonFinalResponse.status === "failed") {
        break;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    if (generatedDescription) {
      await prisma.description.create({
        data: {
          replicateId: descId,
          user: {
            connect: {
              email: session.user.email!,
            },
          },
          inputImage: originalImage,
          inputFeatures: "test",
          outputShortDesc: generatedDescription,
        },
      });
    } else {
      throw new Error("Failed to restore image");
    }

    res.status(200).json(
      generatedDescription
        ? {
            original: originalImage,
            generated: generatedDescription,
            id: descId,
          }
        : "Failed to restore image"
    );
  } catch (error) {
    // Increment their credit if something went wrong
    await prisma.user.update({
      where: {
        email: session.user.email!,
      },
      data: {
        credits: {
          increment: 1,
        },
      },
    });
    console.error(error);
    res.status(500).json("Failed to restore image");
  }
}
