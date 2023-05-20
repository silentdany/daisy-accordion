import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "../../lib/prismadb";

export default async function addCredits(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if user is logged in
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(500).json("Login to upload.");
  }

  // increment credits by 1000
  await prisma.user.update({
    where: {
      email: session.user.email!,
    },
    data: {
      credits: {
        increment: 1000,
      },
    },
  });

  return res.status(200).json("Added 1000 credits");
}
