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
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { useState } from "react";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });
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

  const [checked, setChecked] = useState(false);

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
      <NextSeo
        title="depikt - Generate Product Informations From Pictures"
        description="Introducing depikt, the ultimate AI-powered tool for e-shop owners, managers and more! Say goodbye to manual product information creation. With depikt, simply upload your product pictures and let our AI generate all the relevant details instantly."
        canonical="https://depiktAI.com/"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://depiktAI.com/",
          title: "depikt - Generate Product Informations From Pictures",
          description:
            "Introducing depikt, the ultimate AI-powered tool for e-shop owners, managers and more! Say goodbye to manual product information creation. With depikt, simply upload your product pictures and let our AI generate all the relevant details instantly.",
          site_name: "depikt",
          images: [
            {
              url: "/og-image.webp",
              width: 1200,
              height: 630,
              alt: "depikt - Generate Product Informations From Pictures ",
            },
          ],
        }}
        twitter={{
          handle: "@MajorBaguette",
          site: "@MajorBaguette",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <div
          className="hero relative min-h-[calc(100vh-8rem)]"
          style={{
            background: "url('/gggyrate.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.8",
          }}
        >
          <div className="flex-col w-full h-full hero-content lg:flex-row">
            <div className="flex items-center justify-center order-1 lg:order-none lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`flex p-4 shadow-2x bg-gradient-to-br from-secondary-500 rounded-2xl to-primary-500 ${
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
              </motion.div>
            </div>
            <div className="w-full mt-8 lg:mt-0 lg:px-14 lg:w-1/2 flex flex-col justify-center items-center">
              <h1 className="text-5xl lg:text-6xl">
                <em className="not-italic font-bold text-primary-500">
                  1-click
                </em>
                <br />
                Optimized Product Infos.
              </h1>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.25 }}
                className="pt-2 text-lg md:text-2xl"
              >
                Generate all your e-shop product information from its pictures.
                <br />
                Thanks to <em className="not-italic text-primary-500">AI</em>.
              </motion.h2>
              <form
                key={1}
                className="relative flex justify-center w-max text-lg animate-border my-16 hover:shadow-xl rounded-full bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-1"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="absolute w-full text-center -top-6 text-danger/75">
                  {errors.email && "Invalid format."}
                </p>
                <input
                  placeholder="Your email"
                  className="w-32 p-2 text-center border-2 border-transparent rounded-l-full outline-none md:w-80 md:p-2 focus:border-primary-500"
                  {...register("email")}
                />
                <button
                  type="submit"
                  disabled={!checked}
                  className={`p-2 pr-2 text-center  border-2 rounded-r-full md:p-2  border-transparent-500 ${
                    !checked
                      ? "bg-tertiary-500 text-neutral-300"
                      : "bg-transparent hover:bg-neutral-50/10 hover:border-2 text-neutral-50"
                  }`}
                >
                  {isFuckingFold ? "Sub !" : " Stay in touch"}
                </button>
                <div className="absolute group justify-center items-top top-14 w-5/6 flex">
                  <input
                    type="checkbox"
                    checked={checked}
                    className="checkbox mt-[2px] checkbox-xs mr-1"
                    onClick={() => setChecked(!checked)}
                  />
                  <p className="truncate text-sm group-hover:whitespace-normal leading-5 text-neutral-500">
                    By submitting this form, you consent to depikt using your
                    data to respond to your contact request.
                  </p>
                </div>
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
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              viewport={{ amount: 0.1, once: true }}
            >
              Finding the right description can be hard.
              <br />
              Let depikt do the job so you can focus on what really counts :
              your business.
            </motion.p>
          </div>
          <div className="relative flex flex-col pl-12">
            <UserGroupIcon className="absolute left-0 w-20 h-20 opacity-30 text-secondary-500" />
            <h4 className="flex text-2xl font-semibold text-secondary-500">
              Manager
            </h4>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ amount: 0.1, once: true }}
            >
              Handling a lot of products ?
              <br />
              Iterate faster and submit your ideas to your team faster.
            </motion.p>
          </div>
          <div className="relative flex flex-col pl-12">
            <ClipboardDocumentListIcon className="absolute left-0 w-20 h-20 opacity-30 text-tertiary-500" />
            <h4 className="flex text-2xl font-semibold text-tertiary-500">
              Copywriter
            </h4>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              viewport={{ amount: 0.1, once: true }}
            >
              Give yourself a head start.
              <br />
              Generate template text to help you write your product description
              in a snap.
            </motion.p>
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
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ amount: 0.1, once: true }}
            className="z-0 card md:card-side md:bg-gradient-to-r bg-gradient-to-b from-slate-50 to-transparent"
          >
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
              <h4 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Upload
              </h4>
              <p className="text-lg md:text-xl text-neutral-500">
                Choose up to 3 pictures of your product you need descriptions
                for.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ amount: 0.1, once: true }}
            className="z-0 card md:card-side md:bg-gradient-to-l bg-gradient-to-b from-slate-50 to-transparent"
          >
            <div className="card-body md:text-right md:w-1/2">
              <p className="text-2xl font-bold md:text-3xl text-primary-500">
                Step 2
              </p>
              <h4 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Generate
              </h4>
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ amount: 0.1, once: true }}
            className="z-0 card md:card-side md:bg-gradient-to-r bg-gradient-to-b from-slate-50 to-transparent"
          >
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
              <h4 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
                Pick
              </h4>
              <p className="text-lg md:text-xl text-neutral-500">
                Get 3 fully detailed informations bespoked for your product to
                choose and copy from.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="divider"></div>

        <div className="relative flex flex-col items-center w-full max-w-5xl p-4 my-16 space-y-24 text-left shadow bg-neutral-50 rounded-2xl">
          <h3 className="self-start text-4xl font-bold uppercase lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500">
              Pricing
            </span>
          </h3>
          <div className="flex flex-col gap-4 lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              viewport={{ amount: 0.1, once: true }}
              className="z-0 flex flex-col px-16 items-center justify-center gap-2 text-center lg:items-end lg:text-right lg:w-2/5"
            >
              <h4 className="text-4xl text-primary-500">Clear credit system</h4>
              <p className="text-lg leading-tight text-tertiary-600">
                Experience the convenience of our credit system, eliminating the
                need for another monthly subscriptions.
              </p>
            </motion.div>
            <div className="z-10 relative inline-block self-center w-max text-lg animate-border shadow-xl rounded-full bg-white bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-2">
              <div className="flex flex-col items-center justify-center w-56 h-56 gap-2 rounded-full bg-gradient-to-br from-primary-200 via-secondary-200 to-tertiary-200 ">
                <p className="text-neutral-500 ">starting from</p>
                <p className="relative font-black text-transparent text-7xl bg-gradient-to-b from-primary-800 to-secondary-800 bg-clip-text">
                  <span className="absolute text-3xl text-transparent -translate-y-2 -left-4 top-2 bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text">
                    $
                  </span>
                  <CountUp
                    start={0}
                    end={0.5}
                    duration={2}
                    decimals={1}
                    decimal="."
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-neutral-500 ">per product info.</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.25 }}
              viewport={{ amount: 0.1, once: true }}
              className="z-0 flex flex-col items-center  px-16 justify-center gap-2 text-center lg:items-start lg:text-left lg:w-2/5"
            >
              <h4 className="text-4xl text-primary-500">Flexible usage</h4>
              <p className="text-lg leading-tight text-tertiary-600">
                Pay now and access the tool whenever you require, don't worry
                about unused credits anymore.
              </p>
            </motion.div>
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
            <motion.li
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              viewport={{ amount: 0.1, once: true }}
              className="step step-secondary"
            >
              Fine-tuning
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              viewport={{ amount: 0.1, once: true }}
              className="step step-secondary"
            >
              Batch Gen
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ amount: 0.1, once: true }}
              className="step step-secondary"
            >
              Plugins & Apps
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              viewport={{ amount: 0.1, once: true }}
              className="step step-secondary"
            >
              Pro Pictures
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              viewport={{ amount: 0.1, once: true }}
              className="step step-secondary"
            >
              ... and more !
            </motion.li>
          </ul>
          <form
            key={2}
            className="relative flex justify-center w-max text-lg animate-border my-16 hover:shadow-xl rounded-full bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-1"
            onSubmit={handleSubmit2(onSubmit)}
          >
            <p className="absolute w-full text-center -top-6 text-danger/75">
              {errors2.email && "Invalid format."}
            </p>
            <input
              placeholder="Your email"
              className="w-32 p-2 text-center border-2 border-transparent rounded-l-full outline-none md:w-80 md:p-2 focus:border-primary-500"
              {...register2("email")}
            />
            <button
              type="submit"
              disabled={!checked}
              className={`p-2 pr-2 text-center  border-2 rounded-r-full md:p-2  border-transparent-500 ${
                !checked
                  ? "bg-tertiary-500 text-neutral-300"
                  : "bg-transparent hover:bg-neutral-50/10 hover:border-2 text-neutral-50"
              }`}
            >
              {isFuckingFold ? "Sub !" : " Stay in touch"}
            </button>
            <div className="absolute group justify-center items-top top-14 w-5/6 flex">
              <input
                type="checkbox"
                checked={checked}
                className="checkbox mt-[2px] checkbox-xs mr-1"
                onClick={() => setChecked(!checked)}
              />
              <p className="truncate text-sm group-hover:whitespace-normal leading-5 text-neutral-500">
                By submitting this form, you consent to depikt using your data
                to respond to your contact request.
              </p>
            </div>
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
