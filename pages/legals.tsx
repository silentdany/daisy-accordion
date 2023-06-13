import { useSession } from "next-auth/react";
import Script from "next/script";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import useSWR from "swr";

export default function Pricing() {
  const { data: session } = useSession();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/remaining", fetcher);

  const addCredit = async () => {
    await fetch("/api/add-credits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session?.user?.email,
      }),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto overflow-visible max-w-7xl">
      <Head>
        <title>depikt Legals</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 mb-8 text-center sm:mb-0">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
