import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../components/CompareSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Toggle from "../components/Toggle";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
import DropDown from "../components/DropDown";
import { roomType, rooms, themeType, themes } from "../utils/dropdownTypes";
import { GenerateResponseData } from "./api/generate";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { Rings } from "react-loader-spinner";
import Link from "next/link";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { VibeType } from "../components/DropDownText";
import { json } from "stream/consumers";

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // Replicate
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [imageCaption, setImageCaption] = useState<string | null>(null);
  console.log("🚀 ~ file: dream.tsx:41 ~ imageCaption:", imageCaption);
  const [photoName, setPhotoName] = useState<string | null>(null);
  // OpenAI
  const [vibe, setVibe] = useState<VibeType>("Professional");

  const [generatedTitle, setGeneratedTitle] = useState<string | null>(null);
  const [generatedTitleDone, setGeneratedTitleDone] = useState<boolean>(false);
  console.log(
    "🚀 ~ file: dream.tsx:53 ~ generatedTitleDone:",
    generatedTitleDone
  );
  console.log("🚀 ~ file: dream.tsx:52 ~ generatedTitle:", generatedTitle);
  const [generatedShortDesc, setGeneratedShortDesc] = useState<string | null>(
    null
  );
  const [generatedShortDescDone, setGeneratedShortDescDone] =
    useState<boolean>(false);
  console.log(
    "🚀 ~ file: dream.tsx:59 ~ generatedShortDescDone:",
    generatedShortDescDone
  );
  console.log(
    "🚀 ~ file: dream.tsx:56 ~ generatedShortDesc:",
    generatedShortDesc
  );
  const [generatedFullDesc, setGeneratedFullDesc] = useState<string | null>(
    null
  );
  const [generatedFullDescDone, setGeneratedFullDescDone] =
    useState<boolean>(false);
  console.log(
    "🚀 ~ file: dream.tsx:60 ~ generatedFullDesc:",
    generatedFullDesc
  );
  const [generatedCaringAdvice, setGeneratedCaringAdvice] = useState<
    string | null
  >(null);
  const [generatedCaringAdviceDone, setGeneratedCaringAdviceDone] =
    useState<boolean>(false);
  console.log(
    "🚀 ~ file: dream.tsx:62 ~ generatedCaringAdvice:",
    generatedCaringAdvice
  );

  const titlePrompt = `this is a generated caption of a product I want to sell on my e-commerce website : ${imageCaption}, generate a very short title (40 characters max) in a ${vibe} tone. Absolutly focus on the more important product in the caption (eg: in "a blanket on a chair" the blanket is more important because the chair is an accessory).`;
  const shortDescPrompt = `this is the title a product I want to sell on my e-commerce website : ${generatedTitle}, generate a short description (between 150 and 200 characters) in a ${vibe} tone.`;
  const fullDescPrompt = `this is the short description a product I want to sell on my e-commerce website : ${generatedShortDesc}, generate a full description (between 400 and 600 characters) in a ${vibe} tone. Reformulate from the short description so it doesn't begin the same way.`;
  const caringAdvicePrompt = `this is the full description a product I want to sell on my e-commerce website : ${generatedFullDesc}, generate a few caring advices (between 200 and 400 characters) for ${generatedTitle} in a ${vibe} tone.`;

  // Replicate

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR("/api/remaining", fetcher);
  const { data: session, status } = useSession();

  const options = {
    maxFileCount: 1,
    mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
    editor: { images: { crop: false } },
    tags: [data?.remainingGenerations > 3 ? "paid" : "free"],
    styles: {
      colors: {
        primary: "#2563EB", // Primary buttons & links
        error: "#d23f4d", // Error messages
        shade100: "#fff", // Standard text
        shade200: "#fffe", // Secondary button text
        shade300: "#fffd", // Secondary button text (hover)
        shade400: "#fffc", // Welcome text
        shade500: "#fff9", // Modal close button
        shade600: "#fff7", // Border
        shade700: "#fff2", // Progress indicator background
        shade800: "#fff1", // File item background
        shade900: "#ffff", // Various (draggable crop buttons, etc.)
      },
    },
    onValidate: async (file: File): Promise<undefined | string> => {
      return data.remainingGenerations === 0
        ? `No more credits left. Buy more above.`
        : undefined;
    },
  };

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
          generatePhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="670px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl }),
    });

    let response = (await res.json()) as GenerateResponseData;
    if (res.status !== 200) {
      setError(response as any);
    } else {
      mutate();
      const descriptions =
        (JSON.parse(
          localStorage.getItem("descriptions") || "[]"
        ) as string[]) || [];
      descriptions.push(response.id);
      localStorage.setItem("descriptions", JSON.stringify(descriptions));
      setImageCaption(response.generated);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }

  useEffect(() => {
    if (imageCaption) {
      generateText(titlePrompt, setGeneratedTitle, setGeneratedTitleDone);
    }
  }, [imageCaption]);
  useEffect(() => {
    if (generatedTitleDone) {
      generateText(
        shortDescPrompt,
        setGeneratedShortDesc,
        setGeneratedShortDescDone
      );
    }
  }, [generatedTitleDone]);
  useEffect(() => {
    if (generatedShortDescDone) {
      generateText(
        fullDescPrompt,
        setGeneratedFullDesc,
        setGeneratedFullDescDone
      );
    }
  }, [generatedShortDescDone]);
  useEffect(() => {
    if (generatedFullDescDone) {
      generateText(
        caringAdvicePrompt,
        setGeneratedCaringAdvice,
        setGeneratedCaringAdviceDone
      );
    }
  }, [generatedFullDescDone]);

  // OpenAI
  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateText = async (
    prompt: string | null,
    setElement: Function,
    setElementDone: Function
  ) => {
    setElement("");
    setLoading(true);
    const response = await fetch("/api/generate-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setElement((prev: string) => prev + chunkValue);
    }
    if (done) {
      setElementDone(true);
      console.log("Element done");
    }
    scrollToBios();
    setLoading(false);
  };

  const router = useRouter();

  useEffect(() => {
    if (router.query.success === "true") {
      toast.success("Payment successful!");
    }
  }, [router.query.success]);

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>depikt</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
        {status === "authenticated" ? (
          <Link
            href="/buy-credits"
            className="border border-gray-700 rounded-2xl py-2 px-4 text-gray-400 text-sm my-6 duration-300 ease-in-out hover:text-gray-300 hover:scale-105 transition"
          >
            Pricing is now available.{" "}
            <span className="font-semibold text-gray-200">Click here</span> to
            buy credits!
          </Link>
        ) : (
          <a
            href="https://twitter.com/nutlope/status/1635674124738523139?cxt=HHwWhsCz1ei8irMtAAAA"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 rounded-2xl py-2 px-4 text-gray-400 text-sm my-6 duration-300 ease-in-out hover:text-gray-300 transition"
          >
            Over{" "}
            <span className="font-semibold text-gray-200">1 million users</span>{" "}
            have used roomGPT so far
          </a>
        )}
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
          Generate your <span className="text-blue-600">dream</span> room
        </h1>
        {status === "authenticated" && data && !imageCaption && (
          <p className="text-gray-400">
            You have{" "}
            <span className="font-semibold text-gray-300">
              {data.remainingGenerations}{" "}
              {data?.remainingGenerations > 1 ? "credits" : "credit"}
            </span>{" "}
            left.{" "}
            {data.remainingGenerations < 2 && (
              <span>
                Buy more credits{" "}
                <Link
                  href="/buy-credits"
                  className="font-semibold text-gray-300 underline underline-offset-2 hover:text-gray-200 transition"
                >
                  here
                </Link>
                .
              </span>
            )}
          </p>
        )}
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="flex justify-between items-center w-full flex-col mt-4">
              {status === "loading" ? (
                <div className="max-w-[670px] h-[250px] flex justify-center items-center">
                  <Rings
                    height="100"
                    width="100"
                    color="white"
                    radius="6"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="rings-loading"
                  />
                </div>
              ) : status === "authenticated" && !originalPhoto ? (
                <>
                  <div className="mt-4 w-full max-w-sm">
                    <div className="flex mt-6 w-96 items-center space-x-3">
                      <Image
                        src="/number-3-white.svg"
                        width={30}
                        height={30}
                        alt="1 icon"
                      />
                      <p className="text-left font-medium">
                        Upload a picture of your room.
                      </p>
                    </div>
                  </div>
                  <UploadDropZone />
                </>
              ) : (
                !originalPhoto && (
                  <div className="h-[250px] flex flex-col items-center space-y-6 max-w-[670px] -mt-8">
                    <div className="max-w-xl text-gray-300">
                      Sign in below with Google to create a free account and
                      redesign your room today. You will get 3 generations for
                      free.
                    </div>
                    <button
                      onClick={() => signIn("google")}
                      className="bg-gray-200 text-black font-semibold py-3 px-6 rounded-2xl flex items-center space-x-2"
                    >
                      <Image
                        src="/google.png"
                        width={20}
                        height={20}
                        alt="google's logo"
                      />
                      <span>Sign in with Google</span>
                    </button>
                  </div>
                )
              )}
              {originalPhoto && !imageCaption && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl h-96"
                  width={475}
                  height={475}
                />
              )}
              {loading && (
                <button
                  disabled
                  className="bg-blue-500 rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 w-40"
                >
                  <span className="pt-4">
                    <LoadingDots color="white" style="large" />
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8 max-w-[575px]"
                  role="alert"
                >
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    Please try again later.
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    {error}
                  </div>
                </div>
              )}
              {imageCaption && (
                <>
                  <div>Generated caption : {imageCaption}</div>
                  <div className="space-y-10 my-10">
                    {generatedTitle && (
                      <>
                        <div>
                          <h2
                            className="sm:text-4xl text-3xl font-bold text-slate-100 mx-auto"
                            ref={bioRef}
                          >
                            Your generated bios
                          </h2>
                        </div>
                        <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto text-slate-900">
                          <div
                            className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                            onClick={() => {
                              navigator.clipboard.writeText(generatedTitle);
                              toast("Bio copied to clipboard", {
                                icon: "✂️",
                              });
                            }}
                          >
                            <p>{generatedTitle}</p>
                          </div>
                          {generatedShortDesc && (
                            <div
                              className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  generatedShortDesc
                                );
                                toast("Bio copied to clipboard", {
                                  icon: "✂️",
                                });
                              }}
                            >
                              <p>{generatedShortDesc}</p>
                            </div>
                          )}
                          {generatedFullDesc && (
                            <div
                              className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  generatedFullDesc
                                );
                                toast("Bio copied to clipboard", {
                                  icon: "✂️",
                                });
                              }}
                            >
                              <p>{generatedFullDesc}</p>
                            </div>
                          )}
                          {generatedCaringAdvice && (
                            <div
                              className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  generatedCaringAdvice
                                );
                                toast("Bio copied to clipboard", {
                                  icon: "✂️",
                                });
                              }}
                            >
                              <p>{generatedCaringAdvice}</p>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
              <div className="flex space-x-2 justify-center">
                {originalPhoto && !loading && !error && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setImageCaption(null);
                      setPhotoName(null);
                      setGeneratedTitle(null);
                      setGeneratedShortDesc(null);
                      setGeneratedFullDesc(null);
                      setGeneratedCaringAdvice(null);
                      setError(null);
                    }}
                    className="bg-blue-500 rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-blue-500/80 transition"
                  >
                    Generate New Description
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
        <Toaster position="top-center" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
