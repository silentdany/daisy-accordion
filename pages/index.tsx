import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Head>
        <title>depikt - Generate Product Infos From Pictures</title>
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 text-center sm:mt-12 space-y-12">
        <div className="flex w-full justify-between translate-y-16">
          <div className="w-1/3 h-96 bg-gradient-to-tl from-primary-500 via-teal-500 via-30% to-fuchsia-500 rounded-2xl z-10">
            <Transition
              as={Fragment}
              appear={true}
              show={true}
              enter="transition ease-out duration-[3000ms]"
              enterFrom="transform opacity-0 scale-100"
              enterTo="transform opacity-100 scale-100"
            >
              <Image
                alt="Original photo of a room"
                src="/packshot.png"
                className="absolute z-10 object-contain h-96"
                width={373}
                height={373}
              />
            </Transition>
          </div>
          <div className="flex place-items-center w-2/3">
            <h1 className="text-5xl w-full font-bold tracking-normal font-display sm:text-6xl px-8">
              <em className="not-italic text-primary-500">1-click</em>
              <br />
              Optimized
              <br />
              Product Infos.
            </h1>
          </div>
        </div>
        <div className="relative w-[95%] bg-gray-200 -z-10">
          <div className="absolute w-[95%] top-0 h-4 mx-4 progress overflow-hidden bg-primary-500"></div>
        </div>
        <div className="w-full flex justify-between -translate-y-12">
          <div className="flex flex-col justify-around items-center w-2/3">
            <h2 className="w-3/4 text-3xl leading-7 text-neutral-700 sm:text-neutral-600 mt-16 ">
              Generate all your e-commerce product informations from its
              pictures.
              <br />
              Thanks to <em className="not-italic text-primary-500">AI</em>.
            </h2>
            <Link
              href="/dream"
              className="animate-border inline-block rounded-md bg-white bg-gradient-to-r shadow-sm hover:shadow-2xl hover:translate-x-1 duration-100 from-primary-500 via-teal-500 via-30% to-fuchsia-500 bg-[length:400%_400%] p-2"
            >
              <span className="block rounded-md bg-secondary-50 px-8 py-4 font-bold text-neutral-900 text-2xl">
                Boost your{" "}
                <span className="text-primary-500 font-bold">product</span>ivity
              </span>
            </Link>
          </div>
          <div className="w-1/3 h-96 bg-gradient-to-br from-primary-500 via-teal-500 via-30% to-fuchsia-500 rounded-2xl z-10">
            <Transition
              as={Fragment}
              appear={true}
              show={true}
              enter="transition ease-out duration-[3000ms]"
              enterFrom="transform opacity-0 scale-100"
              enterTo="transform opacity-100 scale-100"
            >
              <div className="z-10 flex flex-col justify-center p-4 space-y-4 font-mono text-sm leading-4 text-neutral-500 h-96">
                <div className="p-2 transition bg-white shadow-xl rounded-xl hover:bg-gray-100">
                  Craft Beer Perfection
                </div>
                <div className="p-2 transition bg-white shadow-xl rounded-xl hover:bg-gray-100">
                  Craft Beer Perfection is an exceptional product that offers a
                  unique and unmatched taste experience.
                </div>
                <div className="p-2 transition bg-white shadow-xl rounded-xl hover:bg-gray-100">
                  Indulge in the perfect sip of beer with Craft Beer Perfection.
                  Our product is an exceptional brew that boasts of a unique and
                  unparalleled taste experience. Every bottle of Craft Beer
                  Perfection is made with the finest ingredients and brewed to
                  perfection..
                </div>
                <div className="p-2 transition bg-white shadow-xl rounded-xl hover:bg-gray-100">
                  To truly enjoy the unique and unparalleled taste experience of
                  Craft Beer Perfection, we recommend serving it in a glass with
                  a wide mouth...
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-full mt-6 sm:mt-10">
          <div className="flex flex-col mt-4 mb-16 space-y-10">
            <div className="flex flex-col sm:space-x-8 sm:flex-row">
              <div>
                <h3 className="mb-1 text-lg font-medium">Original Room</h3>
                <Image
                  alt="Original photo of a room"
                  src="/1.jpg"
                  className="object-cover w-full h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <h3 className="mb-1 text-lg font-medium">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/1-new.jpg"
                  className="object-cover w-full mt-2 h-96 rounded-2xl sm:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
