import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Testimonials } from "../components/Testimonials";
import { useEffect, useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

type CTAButtonProps = {
  title: string;
};

const CTAButton = ({ title }: CTAButtonProps) => (
  <Link
    href="#"
    className="self-center animate-border w-max inline-block hover:shadow-xl hover:translate-x-2 rounded-md bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-2"
  >
    <span className="flex items-center justify-center px-6 py-3 text-2xl font-bold rounded-md bg-primary-50 text-neutral-900">
      {/* Boost your{" "}
              <span className="font-bold text-primary-500">product</span>
              ivity */}
      {title}{" "}
      <ArrowTopRightOnSquareIcon className="inline-block w-6 h-6 ml-2" />
    </span>
  </Link>
);

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto max-w-7xl">
      <Head>
        <title>depikt - Generate Product Infos From Pictures</title>
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <div className="flex flex-col items-center justify-around h-screen pt-10 pb-32 space-y-12">
          <div className="flex flex-col items-center justify-between w-full space-y-4">
            <div className="flex place-items-center">
              <h1 className="px-8 text-5xl font-bold tracking-normal font-display sm:text-6xl">
                <em className="not-italic text-primary-500">1-click</em>
                <br />
                Optimized Product Infos.
              </h1>
            </div>
            <div className="flex flex-col items-center justify-around">
              <h2 className="text-3xl text-neutral-700 sm:text-neutral-600 ">
                Generate all your e-shop product information from its pictures.
                <br />
                Thanks to <em className="not-italic text-primary-500">AI</em>.
              </h2>
            </div>
          </div>
          <div className="relative flex items-center justify-between w-full h-1/2">
            <div
              className="flex self-start justify-center w-4/12"
              style={{
                perspective: "300px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="w-5/6 shadow-2xl rounded-xl bg-neutral-50 h-96"
                style={{
                  perspective: "300px",
                  transformStyle: "preserve-3d",
                  transform: "rotateY(8deg) rotateX(-3deg)",
                }}
              >
                <div className="z-10 flex flex-col justify-between w-full p-2 space-y-2 font-mono text-sm leading-4 text-left h-96">
                  <div className="flex w-full h-2 space-x-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <Image
                    alt="Example product packshot"
                    src="/packshot.png"
                    className="z-10 object-contain h-96 bg-gradient-to-b from-neutral-200 to-slate-400 rounded-xl"
                    width={373}
                    height={373}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start w-1/12 h-full">
              <div className="absolute right-0 lds-ellipsis ">
                <div className="bg-primary-500"></div>
                <div className="bg-primary-500/75"></div>
                <div className="bg-primary-500/50"></div>
                <div className="bg-primary-500/25"></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-3/12">
              <Image
                alt="Laptop"
                src="/laptop.png"
                className="absolute object-contain rounded-full shadow-2xl bg-gradient-to-tl from-primary-500/30 via-secondary-500/30 to-tertiary-500/30 h-72 lg:h-56"
                width={373}
                height={373}
              />
              <div className="-mt-3 lg:-mt-2 inline-block absolute h-12 w-12 lg:h-10 lg:w-10 border-secondary-500 animate-[spin_2s_linear_infinite] rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
              <div className="-mt-3 lg:-mt-2 inline-block absolute h-16 w-16 lg:h-14 lg:w-14 border-tertiary-500 animate-[spin_2.5s_linear_infinite] rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
              <div className="-mt-3 lg:-mt-2 inline-block absolute h-20 w-20 lg:h-[4.5rem] lg:w-[4.5rem] border-primary-500 animate-[spin_3s_linear_infinite] rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            </div>
            <div className="flex items-center justify-end w-1/12 h-full">
              <div className="absolute right-0 lds-ellipsis ">
                <div className="bg-primary-500"></div>
                <div className="bg-primary-500/75"></div>
                <div className="bg-primary-500/50"></div>
                <div className="bg-primary-500/25"></div>
              </div>
            </div>
            <div
              className="flex self-end justify-center w-4/12"
              style={{
                perspective: "300px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="w-5/6 shadow-2xl rounded-xl bg-neutral-50 h-96"
                style={{
                  perspective: "300px",
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-8deg) rotateX(3deg)",
                  userSelect: "none",
                }}
              >
                <div className="z-10 flex flex-col justify-between w-full p-2 pb-2 space-y-2 font-mono text-sm leading-none text-left h-96 ">
                  <div className="flex w-full h-2 space-x-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <p className="relative w-full p-2 font-bold text-left border-b-2 rounded shadow bg-secondary-100 border-primary-500">
                    Title:{" "}
                    <span
                      data-nosnippet
                      className="font-mono text-xs font-normal"
                    >
                      Pure Elegance
                    </span>
                    {/* <ClipboardDocumentListIcon className="absolute w-5 h-5 ml-2 right-1 top-1 text-neutral-400" /> */}
                  </p>
                  <p className="relative w-full p-2 font-bold text-left transition border-b-2 rounded shadow bg-secondary-100 border-primary-500">
                    Short Desc:{" "}
                    <span
                      data-nosnippet
                      className="font-mono text-xs font-normal"
                    >
                      Pure Elegance, the epitome of luxury and sophistication in
                      a bottle.
                    </span>
                  </p>
                  <p className="relative w-full p-2 font-bold text-left transition border-b-2 rounded shadow bg-secondary-100 border-primary-500">
                    Full Desc:{" "}
                    <span
                      data-nosnippet
                      className="font-mono text-xs font-normal"
                    >
                      Indulge in the ultimate experience of luxury and
                      sophistication with Pure Elegance perfume. This exquisite
                      fragrance is a masterpiece of carefully selected
                      ingredients...
                    </span>
                  </p>
                  <p className="relative w-full p-2 font-bold text-left transition border-b-2 rounded shadow bg-secondary-100 border-primary-500">
                    Advices:{" "}
                    <span
                      data-nosnippet
                      className="font-mono text-xs font-normal"
                    >
                      To make the most out of Pure Elegance, apply it to your
                      pulse points, such as your wrists, neck, and behind your
                      ears...
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CTAButton title="Let's keep in touch" />
        </div>

        <span className="h-4 translate-x-32 shadow-lg translate-y-2 w-[75%] bg-primary-500 rotate-3 z-20"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-32 bg-secondary-500 rotate-3 z-0"></span>

        <div
          id="next"
          className="flex flex-col justify-between w-full my-32 space-y-32 max-w-7xl items-around"
        >
          <div className="flex space-x-4">
            <div className="inline-block w-1/2 p-2 duration-100 bg-white rounded-md shadow-sm bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500">
              <Image
                alt="Original photo of a room"
                src="/1.jpg"
                className="object-cover w-full rounded-md shadow-xl h-80"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center w-1/2 pl-8 text-left">
              <p className="text-4xl font-bold text-primary-500">Step 1</p>
              <h3 className="mb-4 text-5xl font-bold uppercase">Upload</h3>
              <p className="text-2xl pr-28 text-neutral-500">
                Up to 3 pictures of your product you need descriptions for.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col justify-center w-1/2 pr-8 text-right">
              <p className="text-4xl font-bold text-primary-500">Step 2</p>
              <h3 className="mb-4 text-5xl font-bold uppercase">Generate</h3>
              <p className="flex items-center justify-end text-2xl pl-28 text-neutral-500">
                Wait for the
                <em className="flex mx-1 not-italic text-primary-500">magic</em>
                to happen !
              </p>
            </div>
            <div className="inline-block w-1/2 p-2 duration-100 bg-white rounded-md shadow-sm bg-gradient-to-tl from-primary-500 via-secondary-500 to-tertiary-500">
              <Image
                alt="Original photo of a room"
                src="/1-new.jpg"
                className="object-cover w-full rounded-md shadow-xl h-80"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="inline-block w-1/2 p-2 duration-100 bg-white rounded-md shadow-sm bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500">
              <Image
                alt="Original photo of a room"
                src="/1.jpg"
                className="object-cover w-full rounded-md shadow-xl h-80"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center w-1/2 pl-8 text-left">
              <p className="text-4xl font-bold text-primary-500">Step 3</p>
              <h3 className="mb-4 text-5xl font-bold uppercase">Pick</h3>
              <p className="text-2xl pr-28 text-neutral-500">
                Get 3 fully detailed informations tailored for your product to
                choose and copy from.
              </p>
            </div>
          </div>
          <CTAButton title="Keep me informed" />
        </div>

        <span className="h-4 translate-x-32 shadow-lg translate-y-2 w-[75%] bg-primary-500 rotate-3 z-20"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-[75%] shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-32 bg-secondary-500 rotate-3 z-0"></span>

        <div className="flex flex-col items-center justify-between w-full my-32 space-y-32 max-w-7xl">
          <div>
            <h3 className="text-5xl font-bold uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500">
                What's next ?
              </span>
            </h3>
            <p className="text-2xl text-neutral-500">
              We have some more ideas coming...
            </p>
          </div>
          <div className="flex justify-center mx-4">
            <div className="relative z-20 flex flex-col items-center justify-center w-1/3 h-48 text-3xl font-medium shadow-2xl lg:text-2xl overflow-y-clip bg-primary-500 text-neutral-50">
              <ChatBubbleBottomCenterTextIcon className="w-20 h-20 mb-2" />
              <div className="flex items-center px-10">
                Fine-tune your descriptions
                <div className="absolute w-10 top-0 h-48 bg-primary-500 translate-y-[87px] -right-4 rotate-12"></div>
                <div className="absolute w-10 top-0 h-48 bg-primary-500 -translate-y-[87px] -right-4 -rotate-12"></div>
                <div className="absolute top-0 w-10 h-48 bg-primary-500 rounded-2xl -left-4"></div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center w-1/3 h-48 pl-12 text-3xl font-medium shadow-2xl lg:text-2xl overflow-y-clip bg-secondary-500 text-neutral-50">
              <Cog6ToothIcon className="w-20 h-20 mb-2" />
              <div className="flex items-center px-10">
                Find product specs easily
                <div className="absolute w-16 top-0 h-48 bg-secondary-500 translate-y-[87px] -right-4 rotate-12"></div>
                <div className="absolute w-16 top-0 h-48 bg-secondary-500 -translate-y-[87px] -right-4 -rotate-12"></div>
              </div>
            </div>
            <div className="relative z-0 flex flex-col items-center justify-center w-1/3 h-48 pl-12 pr-4 text-3xl font-medium shadow-2xl lg:text-2xl overflow-y-clip bg-tertiary-500 text-neutral-50">
              <RocketLaunchIcon className="w-20 h-20 mb-2" />
              <div className="flex items-center px-10">
                Enhance your pictures
                <div className="absolute top-0 w-10 h-48 bg-tertiary-500 rounded-2xl -right-4"></div>
              </div>
            </div>
          </div>
          <CTAButton title="Ok, let me know" />
        </div>
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;
