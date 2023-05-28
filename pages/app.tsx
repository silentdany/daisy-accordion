import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import { GenerateResponseData } from "./api/generate";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { Rings } from "react-loader-spinner";
import Link from "next/link";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { VibeType } from "../components/DropDownText";
import { ProductInfosGen } from "../components/ProductInfosGen";
import { CustomButton } from "../components/CustomButton";

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});

const App: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // Replicate
  const [originalPhoto, setOriginalPhoto] = useState<string | null>("null");
  const [imageCaption, setImageCaption] = useState<string | null>("null");
  console.log("🚀 ~ file: dream.tsx:41 ~ imageCaption:", imageCaption);
  const [photoName, setPhotoName] = useState<string | null>(null);
  // OpenAI
  const [vibe, setVibe] = useState<VibeType>("Professional");

  const [generatedTitle, setGeneratedTitle] = useState<string | null>(null);
  const [generatedTitleDone, setGeneratedTitleDone] = useState<boolean>(false);
  const [generatedShortDesc, setGeneratedShortDesc] = useState<string | null>(
    null
  );
  const [generatedShortDescDone, setGeneratedShortDescDone] =
    useState<boolean>(false);
  const [generatedFullDesc, setGeneratedFullDesc] = useState<string | null>(
    null
  );
  const [generatedFullDescDone, setGeneratedFullDescDone] =
    useState<boolean>(false);

  const [generatedCaringAdvice, setGeneratedCaringAdvice] = useState<
    string | null
  >(null);
  const [generatedCaringAdviceDone, setGeneratedCaringAdviceDone] =
    useState<boolean>(false);

  const titlePrompt = `this is a generated caption of a product I want to sell on my e-commerce website : ${imageCaption}, generate a very short title (40 characters max) in a ${vibe} tone. Absolutly focus on the more important product in the caption (eg: in "a blanket on a chair" the blanket is more important because the chair is an accessory).`;
  const shortDescPrompt = `this is the title of a product I want to sell on my e-commerce website : ${generatedTitle}, generate a short description (between 150 and 200 characters) in a ${vibe} tone.`;
  const fullDescPrompt = `this is the short description of a product I want to sell on my e-commerce website : ${generatedShortDesc}, generate a full description (between 400 and 600 characters) in a ${vibe} tone. Reformulate from the short description so it doesn't begin the same way.`;
  const caringAdvicePrompt = `this is the full description of a product I want to sell on my e-commerce website : ${generatedFullDesc}, generate a few caring advices (between 200 and 400 characters) for ${generatedTitle} in a ${vibe} tone.`;

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
        primary: "#06b6d4", // Primary buttons & links
        error: "#d23f4d", // Error messages
        shade100: "#0a0a0a", // Standard text
        shade200: "#0a0a0a", // Secondary button text
        shade300: "#262626", // Secondary button text (hover)
        shade400: "#0a0a0a", // Welcome text
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
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Head>
        <title>depikt App</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-4 mb-8 text-center sm:mb-0">
        <h1 className="max-w-4xl mx-auto mb-4 text-6xl font-bold font-display">
          Spare some <span className="text-primary-500">brain</span> time !
        </h1>
        <h2 className="max-w-4xl mx-auto mb-8 text-4xl text-neutral-600 font-display">
          Get your product informations now.
        </h2>
        {status === "authenticated" && data && !imageCaption && (
          <p className="text-neutral-500">
            You have{" "}
            <span className="font-semibold text-primary-500">
              {data.remainingGenerations}{" "}
              {data?.remainingGenerations > 1 ? "credits" : "credit"}
            </span>{" "}
            left.{" "}
            {data.remainingGenerations < 2 && (
              <span>
                Buy more credits{" "}
                <Link
                  href="/buy-credits"
                  className="font-semibold underline transition text-neutral-500 underline-offset-2 hover:text-neutral-400"
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
            <motion.div className="flex flex-col items-center justify-between w-full mt-4">
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
                  <div className="w-full max-w-sm mt-16">
                    <p className="font-medium text-center">
                      Upload a picture of your product.
                    </p>
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
                      className="flex items-center px-6 py-3 space-x-2 font-semibold text-black bg-gray-200 rounded-2xl"
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
                  className="w-40 px-4 pt-2 pb-3 mt-8 font-medium text-white rounded-full bg-primary-500"
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
                  <div className="px-4 py-2 font-bold text-white bg-red-500 rounded-t">
                    Please try again later.
                  </div>
                  <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
                    {error}
                  </div>
                </div>
              )}
              {imageCaption && (
                <>
                  <div className="flex justify-center my-12 space-x-2">
                    {originalPhoto && !loading && !error && (
                      <CustomButton
                        action={() => {
                          setOriginalPhoto(null);
                          setImageCaption(null);
                          setPhotoName(null);
                          setGeneratedTitle(null);
                          setGeneratedShortDesc(null);
                          setGeneratedFullDesc(null);
                          setGeneratedCaringAdvice(null);
                          setError(null);
                        }}
                        title="Generate New Description"
                      />
                    )}
                  </div>
                  {/* <div>Generated caption : {imageCaption}</div> */}
                  <div className="my-10 space-y-10 max-w-7xl">
                    {generatedTitle && (
                      <>
                        <div>
                          <h2
                            className="mx-auto text-3xl font-bold sm:text-4xl"
                            ref={bioRef}
                          >
                            Here are 3 sets to copy from.
                          </h2>
                        </div>
                        <div className="flex space-x-4">
                          <ProductInfosGen
                            generatedTitle={generatedTitle}
                            generatedShortDesc={generatedShortDesc}
                            generatedFullDesc={generatedFullDesc}
                            generatedCaringAdvice={generatedCaringAdvice}
                            color="primary"
                          />
                          <ProductInfosGen
                            generatedTitle={generatedTitle}
                            generatedShortDesc={generatedShortDesc}
                            generatedFullDesc={generatedFullDesc}
                            generatedCaringAdvice={generatedCaringAdvice}
                            color="tertiary"
                          />
                          <ProductInfosGen
                            generatedTitle={generatedTitle}
                            generatedShortDesc={generatedShortDesc}
                            generatedFullDesc={generatedFullDesc}
                            generatedCaringAdvice={generatedCaringAdvice}
                            color="secondary"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
        <Toaster position="top-center" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
