import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  ArrowLongDownIcon,
  ArrowRightIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import useMediaQuery from "../hooks/useMediaQuery";
import { CustomButton } from "../components/CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import { One } from "../components/blobs/One";
import { Two } from "../components/blobs/Two";
import { Three } from "../components/blobs/Three";
import Link from "next/link";

type FormData = yup.InferType<typeof schema>;

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/brevo", {
      method: "POST",
      body: JSON.stringify({ email: data.email }),
    });
    if (response.ok) {
      toast("Thanks for your interest !", {
        icon: "✔️",
      });
    } else {
      const errorData = await response.json();
      toast(errorData.response.body.message, {
        icon: "❌",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto max-w-7xl">
      <Head>
        <title>depikt - Generate Product Infos From Pictures</title>
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <div className="hero relative min-h-[calc(100vh-8rem)] ">
          <div className="hero-content h-full flex-col lg:flex-row gap-16">
            <div className="h-1/2 lg:h-full flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="depikt app"
                className="rounded-lg shadow-2xl lg:w-full "
                width={350}
                height={500}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-5xl">
                <em className="not-italic text-primary-500 font-bold">
                  1-click
                </em>
                <br />
                Optimized Product Infos.
              </h1>
              <h2 className="pt-2 text-lg md:text-xl">
                Generate all your e-shop product information from its pictures.
                <br />
                Thanks to <em className="not-italic text-primary-500">AI</em>.
              </h2>
              <form
                key={1}
                className="relative inline-block self-center w-max animate-border m-16 hover:shadow-xl rounded-full bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-1"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  placeholder="Your email"
                  className="w-32 p-1 text-center border-2 border-transparent rounded-l-full outline-none md:w-auto md:p-2 focus:border-primary-500"
                  {...register("email")}
                />
                <button
                  type="submit"
                  className="p-1 pr-4 text-center bg-transparent border-2 rounded-r-full md:p-2 text-neutral-50 hover:bg-neutral-50/10 hover:border-2 border-transparent-500"
                >
                  Stay in touch
                </button>
                <p className="absolute w-full text-center -bottom-6 text-danger/75">
                  {errors.email && "Invalid format."}
                </p>
              </form>
              <div className="flex justify-center space-x-8">
                <DevicePhoneMobileIcon className="inline-block w-8 h-8 ml-2 lg:w-12 lg:h-12 text-tertiary-600" />
                <DeviceTabletIcon className="inline-block w-8 h-8 ml-2 lg:w-12 lg:h-12 text-tertiary-600" />
                <ComputerDesktopIcon className="inline-block w-8 h-8 ml-2 lg:w-12 lg:h-12 text-tertiary-600" />
              </div>
              <p className="text-lg tracking-wider md:text-lg lg:text-xl text-tertiary-400">
                Works from everywhere.
              </p>
            </div>
          </div>
        </div>

        <Link href="#next">
          <ArrowLongDownIcon className="w-8 h-8 mb-4 bottom-0 animate-bounce-slow" />
        </Link>

        <div
          id="next"
          className="relative bg-neutral-50 text-left p-4 rounded-2xl w-full mt-16 mb-32 max-w-5xl space-y-4"
        >
          <Image
            src="/who.png"
            alt="Guys clapping hands"
            width={350}
            height={350}
            className="absolute -right-0 opacity-90 hidden lg:block"
          />
          <h3 className="text-4xl font-bold uppercase md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-500 via-secondary-500 to-tertiary-500">
              For everyone
            </span>
          </h3>
          <div className="flex flex-col relative pl-12">
            <LightBulbIcon className="w-20 h-20 opacity-30 absolute left-0 text-primary-500" />
            <h4 className="flex text-primary-500 text-2xl font-semibold">
              Retailer ?
            </h4>
            <p>
              Finding the right description can be hard.
              <br />
              Let depikt do the job so you can focus on what really counts :
              your business.
            </p>
          </div>
          <div className="flex flex-col relative pl-12">
            <UserGroupIcon className="w-20 h-20 opacity-30 absolute left-0 text-secondary-500" />
            <h4 className="flex text-secondary-500 text-2xl font-semibold">
              Manager ?
            </h4>
            <p>
              Handling a lot of products ?
              <br />
              Iterate faster and submit your ideas to your team faster.
            </p>
          </div>
          <div className="flex flex-col relative pl-12">
            <ClipboardDocumentListIcon className="w-20 h-20 opacity-30 absolute left-0 text-tertiary-500" />
            <h4 className="flex text-tertiary-500 text-2xl font-semibold">
              Copywriter ?
            </h4>
            <p>
              Give yourself a head start.
              <br />
              Generate template text to help you write your product description
              in a snap.
            </p>
          </div>
        </div>

        <span className="z-20 w-3/4 h-4 translate-x-8 translate-y-2 shadow-lg md:translate-x-16 lg:translate-x-32 bg-primary-500 rotate-3"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-8 md:-translate-x-16 lg:-translate-x-32 bg-secondary-500 rotate-3 z-0"></span>

        <div className="flex flex-col justify-between w-full  mb-32 space-y-8 max-w-2xl items-around">
          <div className="m-16">
            <h3 className="text-4xl font-bold uppercase md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-500 via-secondary-500 to-tertiary-500">
                How to use
              </span>
            </h3>
            <p className="text-2xl text-neutral-500">
              Easy-to-use is our top priority.
            </p>
          </div>
          <div className="z-0 card md:card-side">
            <figure className="order-1 md:order-none relative">
              <One />
              <Image
                alt="Upload a photo"
                src="/step1.svg"
                className="mt-4 h-44 w-44 md:h-56 md:w-56 p-4 opacity-90"
                width={256}
                height={256}
                quality={100}
                sizes="256px"
              />
            </figure>
            <div className="card-body md:text-left md:w-1/2">
              <p className="text-2xl font-bold md:text-3xl text-primary-500">
                Step 1
              </p>
              <h3 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Upload
              </h3>
              <p className="text-lg md:text-xl text-neutral-500">
                Choose up to 3 pictures of your product you need descriptions
                for.
              </p>
            </div>
          </div>
          <div className="z-0 card md:card-side">
            <div className="card-body md:text-right md:w-1/2">
              <p className="text-2xl font-bold md:text-3xl text-primary-500">
                Step 2
              </p>
              <h3 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Generate
              </h3>
              <p className="text-lg md:text-xl text-neutral-500">
                Wait for the magic to happen !
              </p>
            </div>
            <figure className="relative">
              <Two />
              <Image
                alt="Upload a photo"
                src="/step2.svg"
                className="mt-4 h-44 w-44 md:h-56 md:w-56 opacity-90"
                width={256}
                height={256}
                quality={100}
                sizes="256px"
              />
            </figure>
          </div>
          <div className="z-0 card md:card-side">
            <figure className="relative order-1 md:order-none">
              <Three />
              <Image
                alt="Upload a photo"
                src="/step3.svg"
                className="mt-4 h-44 w-44 md:h-56 md:w-56 opacity-90"
                width={256}
                height={256}
                quality={100}
                sizes="256px"
              />
            </figure>
            <div className="card-body md:text-left md:w-1/2">
              <p className="text-2xl font-bold md:text-3xl text-primary-500">
                Step 3
              </p>
              <h3 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Pick
              </h3>
              <p className="text-lg md:text-xl text-neutral-500">
                Get 3 fully detailed informations tailored for your product to
                choose and copy from.
              </p>
            </div>
          </div>
        </div>

        <span className="z-20 w-3/4 h-4 translate-x-8 translate-y-2 shadow-lg md:translate-x-16 lg:translate-x-32 bg-primary-500 rotate-3"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-8 md:-translate-x-16 lg:-translate-x-32 bg-secondary-500 rotate-3 z-0"></span>

        <div className="flex flex-col items-center justify-between w-full my-32 space-y-32 lg:px-4 max-w-7xl">
          <div>
            <h3 className="text-4xl font-bold uppercase md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500">
                What's next ?
              </span>
            </h3>
            <p className="text-2xl text-neutral-500">
              We have some more ideas coming...
            </p>
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-4 md:w-1/2 lg:w-full lg:flex-row">
            <div className="relative z-20 flex flex-col items-center justify-center py-12 text-3xl font-medium shadow-2xl lg:w-1/3 lg:py-0 lg:h-48 lg:text-2xl overflow-x-clip lg:overflow-x-visible lg:overflow-y-clip bg-primary-500 text-neutral-50">
              <ChatBubbleBottomCenterTextIcon className="w-20 h-20 mb-2" />
              <div className="flex items-center px-12">
                Fine-tune your descriptions
                <div className="absolute lg:w-10 w-full lg:top-0 h-10 lg:h-48 bg-primary-500 lg:translate-y-[93px] -translate-x-[48%] lg:translate-x-0 -bottom-4 lg:bottom-0 left-0 lg:left-auto lg:-right-4 rotate-6"></div>
                <div className="absolute lg:w-10 w-full lg:top-0 h-10 lg:h-48 bg-primary-500 lg:-translate-y-[93px] translate-x-[48%] lg:translate-x-0 -bottom-4 lg:-right-4 right-0 lg:bottom-0 -rotate-6"></div>
                <div className="absolute left-0 w-full h-10 lg:top-0 lg:w-10 lg:h-48 bg-primary-500 rounded-2xl -top-4 lg:-left-4"></div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 text-3xl font-medium shadow-2xl lg:w-1/3 lg:py-0 lg:h-48 lg:text-2xl overflow-x-clip lg:overflow-x-visible lg:overflow-y-clip bg-secondary-500 text-neutral-50">
              <Cog6ToothIcon className="w-20 h-20 mb-2" />
              <div className="flex items-center px-12">
                Find product specs easily
                <div className="absolute lg:w-10 w-full lg:top-0 h-10 lg:h-48 bg-secondary-500 lg:translate-y-[93px] -translate-x-[48%] lg:translate-x-0 -bottom-4 lg:bottom-0 left-0 lg:left-auto lg:-right-4 rotate-6"></div>
                <div className="absolute lg:w-10 w-full lg:top-0 h-10 lg:h-48 bg-secondary-500 lg:-translate-y-[93px] translate-x-[48%] lg:translate-x-0 -bottom-4 lg:-right-4 right-0 lg:bottom-0 -rotate-6"></div>
              </div>
            </div>
            <div className="relative z-0 flex flex-col items-center justify-center pt-24 pb-12 text-3xl font-medium shadow-2xl lg:w-1/3 lg:py-0 lg:h-48 lg:text-2xl overflow-x-clip lg:overflow-x-visible lg:overflow-y-clip bg-tertiary-500 text-neutral-50">
              <RocketLaunchIcon className="w-20 h-20 mb-2" />
              <div className="flex items-center px-12">
                Enhance your pictures
                <div className="absolute left-0 w-full h-10 lg:left-auto bg-tertiary-500 lg:top-0 lg:w-10 lg:h-48 rounded-2xl -bottom-4 lg:-right-4"></div>
              </div>
            </div>
          </div>
          {/* <CustomButton title="Ok, let me know" external /> */}
          <form
            key={2}
            className="relative inline-block self-center w-max animate-border hover:shadow-xl rounded-full bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-1"
            onSubmit={handleSubmit2(onSubmit)}
          >
            <input
              placeholder="Your email"
              className="w-32 p-1 text-center border-2 border-transparent rounded-l-full outline-none md:w-auto md:p-2 focus:border-primary-500"
              {...register2("email")}
            />
            <button
              type="submit"
              className="p-1 pr-4 text-center bg-transparent border-2 rounded-r-full md:p-2 text-neutral-50 hover:bg-neutral-50/10 hover:border-2 border-transparent-500"
            >
              Stay in touch
            </button>
            <p className="absolute w-full text-center -bottom-6 text-danger/75">
              {errors2.email && "Invalid format."}
            </p>
          </form>
        </div>
      </main>
      {/* <Testimonials /> */}
      <Footer />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
    </div>
  );
};

export default Home;
