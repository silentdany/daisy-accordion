import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  ArrowLongDownIcon,
  ArrowRightIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import useMediaQuery from "../hooks/useMediaQuery";
// import { CustomButton } from "../components/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import { One } from "../components/blobs/One";
import { Two } from "../components/blobs/Two";
import { Three } from "../components/blobs/Three";
import Link from "next/link";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type FormData = yup.InferType<typeof schema>;

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const Home: NextPage = () => {
  const isTabletOnly = useMediaQuery(
    "only screen and (min-width: 768px) and (max-width: 1023px)"
  );
  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  const isFuckingFold = useMediaQuery("only screen and (max-width: 280px)");
  let videoWidth;
  let videoHeight;
  switch (true) {
    case isFuckingFold:
      videoWidth = 260;
      videoHeight = 200;
      break;
    case isTabletOnly:
      videoWidth = 600;
      videoHeight = 350;
      break;
    case isMobile:
      videoWidth = 260;
      videoHeight = 260;
      break;
    default:
      videoWidth = 450;
      videoHeight = 450;
      break;
  }

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
        <div className="hero relative min-h-[calc(100vh-8rem)]">
          <div className="flex-col w-full h-full hero-content lg:flex-row">
            <div className="flex items-center justify-center lg:w-1/2">
              <div
                className={`flex p-4 shadow-2x  bg-gradient-to-br from-secondary-500 rounded-2xl to-primary-500 ${
                  isFuckingFold ? "w-56" : ""
                }`}
              >
                <ReactPlayer
                  url={
                    isTabletOnly
                      ? "/depikt_landscape.webm"
                      : "/depikt_square.webm"
                  }
                  playing
                  loop
                  playsinline
                  muted
                  width={videoWidth}
                  height={videoHeight}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-5xl lg:text-6xl">
                <em className="not-italic font-bold text-primary-500">
                  1-click
                </em>
                <br />
                Optimized Product Infos.
              </h1>
              <h2 className="pt-2 text-lg md:text-2xl">
                Generate all your e-shop product information from its pictures.
                <br />
                Thanks to <em className="not-italic text-primary-500">AI</em>.
              </h2>
              <form
                key={1}
                className="relative inline-block self-center w-max text-lg animate-border my-16 hover:shadow-xl rounded-full bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-1"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  placeholder="Your email"
                  className="w-32 p-2 text-center border-2 border-transparent rounded-l-full outline-none md:w-80 md:p-2 focus:border-primary-500"
                  {...register("email")}
                />
                <button
                  type="submit"
                  className="p-2 pr-2 text-center bg-transparent border-2 rounded-r-full md:p-2 text-neutral-50 hover:bg-neutral-50/10 hover:border-2 border-transparent-500"
                >
                  {isFuckingFold ? "Sub !" : " Stay in touch"}
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
          <ArrowLongDownIcon className="bottom-0 w-8 h-8 mb-4 animate-bounce-slow" />
        </Link>

        <div
          id="next"
          className="relative w-full max-w-5xl p-4 mt-16 mb-16 space-y-4 text-left shadow bg-neutral-50 rounded-2xl"
        >
          <Image
            src="/who.png"
            alt="Guys clapping hands"
            width={350}
            height={350}
            className="absolute hidden -right-0 opacity-90 lg:block"
          />
          <h3 className="!mt-0 text-4xl font-bold uppercase md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-500 via-secondary-500 to-tertiary-500">
              For everyone
            </span>
          </h3>
          <div className="relative flex flex-col pl-12">
            <LightBulbIcon className="absolute left-0 w-20 h-20 opacity-30 text-primary-500" />
            <h4 className="flex text-2xl font-semibold text-primary-500">
              Retailer
            </h4>
            <p>
              Finding the right description can be hard.
              <br />
              Let depikt do the job so you can focus on what really counts :
              your business.
            </p>
          </div>
          <div className="relative flex flex-col pl-12">
            <UserGroupIcon className="absolute left-0 w-20 h-20 opacity-30 text-secondary-500" />
            <h4 className="flex text-2xl font-semibold text-secondary-500">
              Manager
            </h4>
            <p>
              Handling a lot of products ?
              <br />
              Iterate faster and submit your ideas to your team faster.
            </p>
          </div>
          <div className="relative flex flex-col pl-12">
            <ClipboardDocumentListIcon className="absolute left-0 w-20 h-20 opacity-30 text-tertiary-500" />
            <h4 className="flex text-2xl font-semibold text-tertiary-500">
              Copywriter
            </h4>
            <p>
              Give yourself a head start.
              <br />
              Generate template text to help you write your product description
              in a snap.
            </p>
          </div>
        </div>

        {/* <span className="z-20 w-3/4 h-4 translate-x-8 translate-y-2 shadow-lg md:translate-x-16 lg:translate-x-32 bg-primary-500 rotate-3"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-8 md:-translate-x-16 lg:-translate-x-32 bg-secondary-500 rotate-3 z-0"></span> */}
        <div className="divider"></div>

        <div className="flex flex-col justify-between w-full max-w-2xl my-16 space-y-8 items-around">
          <div>
            <h3 className="text-4xl font-bold uppercase md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-500 via-secondary-500 to-tertiary-500">
                How to use
              </span>
            </h3>
            <p className="text-2xl text-neutral-500">
              Easy-to-use is our top priority.
            </p>
          </div>
          <div className="z-0 card md:card-side md:bg-gradient-to-r bg-gradient-to-b from-slate-50 to-transparent">
            <figure className="relative order-1 md:order-none">
              <One />
              <Image
                alt="Upload a photo"
                src="/step1.svg"
                className="p-4 mt-4 h-44 w-44 md:h-56 md:w-56 opacity-90"
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
          <div className="z-0 card md:card-side md:bg-gradient-to-l bg-gradient-to-b from-slate-50 to-transparent">
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
          <div className="z-0 card md:card-side md:bg-gradient-to-r bg-gradient-to-b from-slate-50 to-transparent">
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

        <div className="divider"></div>

        <div className="relative flex flex-col items-center w-full max-w-5xl p-4 my-16 space-y-24 text-left shadow bg-neutral-50 rounded-2xl">
          <h3 className="self-start text-4xl font-bold uppercase lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500">
              Pricing
            </span>
          </h3>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-end lg:text-right lg:w-2/5">
              <h4 className="text-4xl text-primary-500">Clear credit system</h4>
              <p className="text-lg leading-tight text-tertiary-600">
                Experience the convenience of our credit system, eliminating the
                need for another monthly subscriptions.
              </p>
            </div>
            <div className="relative inline-block self-center w-max text-lg animate-border shadow-xl rounded-full bg-white bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-2">
              <div className="flex flex-col items-center justify-center w-56 h-56 gap-2 rounded-full bg-gradient-to-br from-primary-200 via-secondary-200 to-tertiary-200 ">
                <p className="text-neutral-500 ">starting from</p>
                <p className="font-black text-transparent text-7xl bg-gradient-to-b from-primary-800 to-secondary-800 bg-clip-text">
                  0.5
                  <span className="text-transparent bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text">
                    $
                  </span>
                </p>
                <p className="text-neutral-500 ">per product info.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:text-left lg:w-2/5">
              <h4 className="text-4xl text-primary-500">Flexible usage</h4>
              <p className="text-lg leading-tight text-tertiary-600">
                Pay now and access the tool whenever you require, don't worry
                about unused credits anymore.
              </p>
            </div>
          </div>
          <Link href="#" className="text-2xl text-neutral-500">
            See full pricing
            <ArrowRightIcon className="inline-block w-6 h-6 ml-1 text-neutral-500" />
          </Link>
        </div>

        <div className="divider"></div>

        <div className="relative flex flex-col items-center w-full max-w-5xl p-4 my-16 space-y-32 text-left">
          <div>
            <h3 className="text-4xl font-bold uppercase md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500">
                What's next ?
              </span>
            </h3>
            <p className="text-2xl text-neutral-500">
              We have more ideas coming...
            </p>
          </div>
          <ul className="steps steps-vertical lg:steps-horizontal ">
            <li className="step step-secondary">Fine-tuning</li>
            <li className="step step-secondary">Batch Gen</li>
            <li className="step step-secondary">Plugins & Apps</li>
            <li className="step step-secondary">Pro Pictures</li>
            <li className="step step-secondary">... and more !</li>
          </ul>
          <form
            key={2}
            className="relative inline-block self-center w-max text-lg animate-border my-16 hover:shadow-xl rounded-full bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-1"
            onSubmit={handleSubmit2(onSubmit)}
          >
            <input
              placeholder="Your email"
              className="w-32 p-2 text-center border-2 border-transparent rounded-l-full outline-none md:w-80 md:p-2 focus:border-primary-500"
              {...register2("email")}
            />
            <button
              type="submit"
              className="p-2 pr-2 text-center bg-transparent border-2 rounded-r-full md:p-2 text-neutral-50 hover:bg-neutral-50/10 hover:border-2 border-transparent-500"
            >
              {isFuckingFold ? "Sub !" : " Stay in touch"}
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
