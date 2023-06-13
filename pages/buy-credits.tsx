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
        <title>Buy depikt Credits</title>
      </Head>
      <Script src="https://js.stripe.com/v3/pricing-table.js" />
      <Script src="https://cdn.paritydeals.com/banner.js" />
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="h-screen"></main>
      {/* <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 mb-8 text-center sm:mb-0">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Buy depikt Credits
            </p>
          </div>
        </div>
        <button
          onClick={addCredit}
          className="p-2 mt-4 duration-100 ease-in rounded-sm bg-lime-500 hover:bg-lime-600 border-lime-800 "
        >
          Add Credit
        </button>
        <p className="max-w-2xl mx-auto mt-6 mb-10 text-lg leading-8 text-center text-gray-500">
          You currently have{" "}
          <span className="font-semibold text-gray-400">
            {data?.remainingGenerations}{" "}
            {data?.remainingGenerations > 1 ? "credits" : "credit"}
          </span>
          . Purchase more below.
        </p>
        <div className="w-full">
          {session?.user?.email && (
            // @ts-ignore
            <stripe-pricing-table
              pricing-table-id="prctbl_1N9t30FQIvRnpxHU5NfU5nqo"
              publishable-key="pk_live_51N9sgXFQIvRnpxHUxPH9Wd2gRfHJZYPTLhFX3ISTwG9LsvY1W0ZokmXx73d5L4I27DE2Kgm5ccCFId4EDbE3vA3400dMHcOplW"
              client-reference-id={session.user.email}
              customer-email={session.user.email}
            />
          )}
        </div>
        <div className="mt-10 text-center">
          <h4 className="flex-none mt-2 text-2xl font-bold leading-6 tracking-tight text-white sm:text-5xl">
            What’s included
          </h4>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-4 mt-8 mb-10 leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6"
        >
          <li className="flex gap-x-3">
            <svg
              className="flex-none w-5 h-6 text-primary-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Save your generated rooms
          </li>

          <li className="flex gap-x-3">
            <svg
              className="flex-none w-5 h-6 text-primary-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Get more room styles and room types
          </li>

          <li className="flex gap-x-3">
            <svg
              className="flex-none w-5 h-6 text-primary-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Premium support by email
          </li>

          <li className="flex gap-x-3">
            <svg
              className="flex-none w-5 h-6 text-primary-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Ability to request features
          </li>
          <li className="flex gap-x-3">
            <svg
              className="flex-none w-5 h-6 text-primary-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Commercial usage of photos
          </li>
          <li className="flex gap-x-3">
            <svg
              className="flex-none w-5 h-6 text-primary-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Early access to new features
          </li>
        </ul>
        <p className="mb-5 text-gray-400">
          Interested in team pricing or have any pricing questions? Email{" "}
          <span className="text-gray-300">hassan@roomgpt.io</span>
        </p>
      </main> */}
      <Footer />
    </div>
  );
}
