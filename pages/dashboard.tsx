import Head from "next/head";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Footer from "../components/Footer";
import prisma from "../lib/prismadb";
import { Description } from "@prisma/client";
import { RoomGeneration } from "../components/RoomGenerator";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Dashboard({
  descriptions,
}: {
  descriptions: Description[];
}) {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Head>
        <title>depikt Dashboard</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 mb-8 text-center sm:mb-0">
        <h1 className="max-w-4xl mx-auto mb-5 text-4xl font-bold tracking-normal font-display text-neutral-100 sm:text-6xl">
          View your <span className="text-primary-600">description</span>{" "}
          generations
        </h1>
        {descriptions.length === 0 ? (
          <p className="text-gray-300">
            You have no description generations. Generate one{" "}
            <Link
              href="/app"
              className="underline text-primary-600 underline-offset-2"
            >
              here
            </Link>
          </p>
        ) : (
          <p className="text-gray-300">
            Browse through your previous description generations below. Any
            feedback? Email hassan@roomgpt.io
          </p>
        )}
        WIP
        {/* {descriptions.map((description) => (
          <RoomGeneration
            original={description.inputImage}
            generated={description.outputTitle}
          />
        ))} */}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session || !session.user) {
    return { props: { descriptions: [] } };
  }

  let descriptions = await prisma.description.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
    select: {
      inputImage: true,
    },
  });

  return {
    props: {
      descriptions,
    },
  };
}
