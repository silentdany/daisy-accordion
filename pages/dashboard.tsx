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
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>depikt Dashboard</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mb-0 mb-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
          View your <span className="text-blue-600">description</span>{" "}
          generations
        </h1>
        {descriptions.length === 0 ? (
          <p className="text-gray-300">
            You have no description generations. Generate one{" "}
            <Link
              href="/dream"
              className="text-blue-600 underline underline-offset-2"
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
