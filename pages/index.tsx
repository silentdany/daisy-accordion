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
import { ChevronDoubleDownIcon, SparklesIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Head>
        <title>depikt - Generate Product Infos From Pictures</title>
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 space-y-12 text-center">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="flex justify-between w-full translate-y-16">
            <div className="w-1/3 h-96 bg-gradient-to-tl from-primary-500 via-tertiary-500 via-30% to-secondary-500 rounded-2xl z-10">
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
            <div className="flex w-2/3 place-items-center">
              <h1 className="w-full px-8 text-5xl font-bold tracking-normal font-display sm:text-6xl">
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
          <div className="flex justify-between w-full -translate-y-12">
            <div className="flex flex-col items-center justify-around w-2/3">
              <h2 className="w-3/4 mt-16 text-3xl leading-7 text-neutral-700 sm:text-neutral-600 ">
                Generate all your e-commerce product informations from its
                pictures.
                <br />
                Thanks to <em className="not-italic text-primary-500">AI</em>.
              </h2>
              <Link
                href="/dream"
                className="animate-border inline-block rounded-md bg-white bg-gradient-to-r shadow-sm hover:shadow-2xl hover:translate-x-1 duration-100 from-primary-500 via-tertiary-500 via-30% to-secondary-500 bg-[length:400%_400%] p-2"
              >
                <span className="block px-8 py-4 text-2xl font-bold rounded-md bg-secondary-50 text-neutral-900">
                  Boost your{" "}
                  <span className="font-bold text-primary-500">product</span>
                  ivity
                </span>
              </Link>
            </div>
            <div className="w-1/3 h-96 bg-gradient-to-br from-primary-500 via-tertiary-500 via-30% to-secondary-500 rounded-2xl z-10">
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
                    Craft Beer Perfection is an exceptional product that offers
                    a unique and unmatched taste experience.
                  </div>
                  <div className="p-2 transition bg-white shadow-xl rounded-xl hover:bg-gray-100">
                    Indulge in the perfect sip of beer with Craft Beer
                    Perfection. Our product is an exceptional brew that boasts
                    of a unique and unparalleled taste experience. Every bottle
                    of Craft Beer Perfection is made with the finest ingredients
                    and brewed to perfection..
                  </div>
                  <div className="p-2 transition bg-white shadow-xl rounded-xl hover:bg-gray-100">
                    To truly enjoy the unique and unparalleled taste experience
                    of Craft Beer Perfection, we recommend serving it in a glass
                    with a wide mouth...
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <span className="h-4 translate-x-32 shadow-lg translate-y-2 w-[75%] bg-primary-500 rotate-3 z-20"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-32 bg-secondary-500 rotate-3 z-0"></span>

        <div
          id="next"
          className="flex flex-col justify-between w-full max-w-4xl !mb-12 space-y-16 items-around"
        >
          <div className="flex space-x-4">
            <div className="w-1/2 inline-block rounded-md bg-white bg-gradient-to-br shadow-sm duration-100 from-primary-500 via-tertiary-500 via-30% to-secondary-500 p-2">
              <Image
                alt="Original photo of a room"
                src="/1.jpg"
                className="object-cover w-full h-64 rounded-md shadow-xl"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center w-1/2 text-left">
              <h3 className="mb-1 text-3xl font-bold uppercase">
                <span className="text-primary-500">1.</span> Upload
              </h3>
              <p>Upload up to 3 pictures of your product.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col justify-center w-1/2 text-right">
              <h3 className="mb-1 text-3xl font-bold uppercase">
                <span className="text-primary-500">2.</span> Generate
              </h3>
              <p className="flex items-center justify-end">
                Wait for the
                <em className="flex mx-1 not-italic text-primary-500">
                  magic
                  <SparklesIcon className="block w-3 h-3 text-primary-500" />
                </em>
                to happen !
              </p>
            </div>
            <div className="w-1/2 inline-block rounded-md bg-white bg-gradient-to-tl shadow-sm duration-100 from-primary-500 via-tertiary-500 via-30% to-secondary-500 p-2">
              <Image
                alt="Original photo of a room"
                src="/1-new.jpg"
                className="object-cover w-full h-64 rounded-md shadow-xl"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 inline-block rounded-md bg-white bg-gradient-to-br shadow-sm duration-100 from-primary-500 via-tertiary-500 via-30% to-secondary-500 p-2">
              <Image
                alt="Original photo of a room"
                src="/1.jpg"
                className="object-cover w-full h-64 rounded-md shadow-xl"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center w-1/2 text-left">
              <h3 className="mb-1 text-3xl font-bold uppercase">
                <span className="text-primary-500">3.</span> Choose
              </h3>
              <p>
                Get 3 fully detailed informations tailored for your product to
                choose and copy from.
              </p>
            </div>
          </div>
        </div>
        <span className="h-4 translate-x-32 shadow-lg translate-y-2 w-[75%] bg-primary-500 rotate-3 z-20"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-32 bg-secondary-500 rotate-3 z-0"></span>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
