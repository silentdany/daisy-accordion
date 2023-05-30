import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  ArrowLongDownIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import useMediaQuery from "../hooks/useMediaQuery";
import { CustomButton } from "../components/CustomButton";

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto max-w-7xl">
      <Head>
        <title>depikt - Generate Product Infos From Pictures</title>
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <div className="flex flex-col items-end justify-end w-full h-[calc(100vh-5rem)] px-4">
          <div
            className="flex flex-col items-end justify-center flex-1 w-full space-y-4"
            style={{
              backgroundImage: "url(/depikt.webp)",
              backgroundSize: "contain",
              backgroundPosition: isMobile ? "center 80%" : "center 40%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col h-[10%] md:h-1/4"></div>
            <div className="flex flex-col flex-1 md:w-2/3">
              <div className="z-10 flex items-center justify-center backdrop-blur-sm rounded-t-2xl">
                <h1 className="text-2xl font-bold tracking-normal md:text-4xl font-display lg:text-5xl xl:text-6xl">
                  <em className="not-italic text-primary-500">1-click</em>
                  <br />
                  Optimized Product Infos.
                </h1>
              </div>
              <div className="flex items-center justify-center backdrop-blur-sm rounded-b-2xl">
                <h2 className="text-lg md:text-2xl text-neutral-700">
                  Generate all your e-shop product information from its
                  pictures.
                  <br />
                  Thanks to <em className="not-italic text-primary-500">AI</em>.
                </h2>
              </div>
            </div>
          </div>
          <CustomButton title="Let's keep in touch" external />
          <div className="flex flex-col items-center justify-center w-full my-8 space-y-2 lg:my-16">
            <div className="flex justify-center space-x-12">
              <DevicePhoneMobileIcon className="inline-block w-8 h-8 ml-2 lg:w-12 lg:h-12 text-tertiary-600" />
              <DeviceTabletIcon className="inline-block w-8 h-8 ml-2 lg:w-12 lg:h-12 text-tertiary-600" />
              <ComputerDesktopIcon className="inline-block w-8 h-8 ml-2 lg:w-12 lg:h-12 text-tertiary-600" />
            </div>
            <p className="text-lg tracking-wider md:text-xl lg:text-2xl text-tertiary-400">
              Works from everywhere.
            </p>
          </div>
          <ArrowLongDownIcon className="self-center w-8 h-8 mb-4 text-center animate-bounce-slow" />
        </div>

        {/* <span className="z-20 w-3/4 h-4 translate-x-8 translate-y-2 shadow-lg md:translate-x-16 lg:translate-x-32 bg-primary-500 rotate-3"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-1 bg-tertiary-500 rotate-3 z-10"></span>
        <span className="w-3/4 shadow-lg !mt-0 h-4 -translate-y-4 -translate-x-8 md:-translate-x-16 lg:-translate-x-32 bg-secondary-500 rotate-3 z-0"></span> */}

        <div
          id="next"
          className="flex flex-col justify-between w-full mt-16 mb-32 space-y-32 max-w-7xl items-around"
        >
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
          <div className="flex flex-col lg:flex-row">
            <div className="flex order-last lg:w-1/2 justify-center lg:justify-end">
              <Image
                alt="Upload a photo"
                src="/step1.svg"
                className="h-60 w-60 md:h-80 md:w-80 mt-4 lg:mt-0"
                width={80}
                height={80}
                quality={100}
                sizes="80px"
                />
                </div>
            <div className="flex flex-col justify-center text-left  lg:pl-8">
              <p className="text-3xl font-bold md:text-4xl text-primary-500">
                Step 1
              </p>
              <h3 className="mb-4 text-4xl font-bold uppercase md:text-5xl">
                Upload
              </h3>
              <p className="text-xl md:text-2xl lg:pr-28 text-neutral-500">
                Up to 3 pictures of your product you need descriptions for.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center pr-8 text-left lg:w-1/2 lg:text-right">
              <p className="text-3xl font-bold md:text-4xl text-primary-500">
                Step 2
              </p>
              <h3 className="mb-4 text-4xl font-bold uppercase md:text-5xl">
                Generate
              </h3>
              <p className="text-xl md:text-2xl lg:pl-28 text-neutral-500">
                Wait for the magic to happen !
              </p>
            </div><div className="flex lg:w-1/2 justify-center lg:justify-start">
              <Image
                alt="Loading screen"
                src="/step2.svg"
                className="h-60 w-60 md:h-80 md:w-80"
                width={80}
                height={80}
                quality={100}
                sizes="80px"
                /></div>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="flex order-last lg:w-1/2 justify-center lg:justify-end">
              <Image
                alt="Results"
                src="/step3.svg"
                className="h-60 w-60 md:h-80 md:w-80"
                width={80}
                height={80}
                quality={100}
                sizes="80px"
              /></div>
            <div className="flex flex-col justify-center text-left lg:w-1/2 lg:pl-8">
              <p className="text-3xl font-bold md:text-4xl text-primary-500">
                Step 3
              </p>
              <h3 className="mb-4 text-4xl font-bold uppercase md:text-5xl">
                Pick
              </h3>
              <p className="text-xl md:text-2xl lg:pr-28 text-neutral-500">
                Get 3 fully detailed informations tailored for your product to
                choose and copy from.
              </p>
            </div>
          </div>
          <CustomButton title="Keep me informed" external />
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
          <CustomButton title="Ok, let me know" external />
        </div>
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;
