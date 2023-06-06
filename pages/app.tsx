import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GenerateResponseData } from "./api/generate";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { Rings } from "react-loader-spinner";
import Link from "next/link";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { ProductInfosGen } from "../components/ProductInfosGen";
import { CustomButton } from "../components/CustomButton";
import ResizablePanel from "../components/ResizablePanel";
import { NextSeo } from "next-seo";

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
  const [photoName, setPhotoName] = useState<string | null>(null);
  // OpenAI

  const [generatedProductInfos1, setGeneratedProductInfos1] = useState<
    string | null
  >(null);
  const [generatedProductInfos2, setGeneratedProductInfos2] = useState<
    string | null
  >(null);
  const [generatedProductInfos3, setGeneratedProductInfos3] = useState<
    string | null
  >(null);
  const [generatedTitle1, setGeneratedTitle1] = useState<string | null>(null);
  const [generatedShortDesc1, setGeneratedShortDesc1] = useState<string | null>(
    null
  );
  const [generatedFullDesc1, setGeneratedFullDesc1] = useState<string | null>(
    null
  );
  const [generatedCaringAdvice1, setGeneratedCaringAdvice1] = useState<
    string | null
  >(null);
  const [generatedTitle2, setGeneratedTitle2] = useState<string | null>(null);
  const [generatedShortDesc2, setGeneratedShortDesc2] = useState<string | null>(
    null
  );
  const [generatedFullDesc2, setGeneratedFullDesc2] = useState<string | null>(
    null
  );
  const [generatedCaringAdvice2, setGeneratedCaringAdvice2] = useState<
    string | null
  >(null);
  const [generatedTitle3, setGeneratedTitle3] = useState<string | null>(null);
  const [generatedShortDesc3, setGeneratedShortDesc3] = useState<string | null>(
    null
  );
  const [generatedFullDesc3, setGeneratedFullDesc3] = useState<string | null>(
    null
  );
  const [generatedCaringAdvice3, setGeneratedCaringAdvice3] = useState<
    string | null
  >(null);

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
      fontFamilies: {
        base: "Outfit,-apple-system, blinkmacsystemfont, Segoe UI, helvetica, arial, sans-serif",
      },
      fontSizes: {
        base: 16,
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
      // const descriptions =
      //   (JSON.parse(
      //     localStorage.getItem("descriptions") || "[]"
      //   ) as string[]) || [];
      // descriptions.push(response.id);
      // localStorage.setItem("descriptions", JSON.stringify(descriptions));
      setImageCaption(response.generated);
      await generateText(response.generated, setGeneratedProductInfos1);
      await generateText(response.generated, setGeneratedProductInfos2);
      await generateText(response.generated, setGeneratedProductInfos3);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }

  useEffect(() => {
    if (generatedProductInfos1) {
      splitAndSetParts(
        generatedProductInfos1,
        setGeneratedTitle1,
        setGeneratedShortDesc1,
        setGeneratedFullDesc1,
        setGeneratedCaringAdvice1
      );
    }
  }, [generatedProductInfos1]);
  useEffect(() => {
    if (generatedProductInfos2) {
      splitAndSetParts(
        generatedProductInfos2,
        setGeneratedTitle2,
        setGeneratedShortDesc2,
        setGeneratedFullDesc2,
        setGeneratedCaringAdvice2
      );
    }
  }, [generatedProductInfos2]);
  useEffect(() => {
    if (generatedProductInfos3) {
      splitAndSetParts(
        generatedProductInfos3,
        setGeneratedTitle3,
        setGeneratedShortDesc3,
        setGeneratedFullDesc3,
        setGeneratedCaringAdvice3
      );
    }
  }, [generatedProductInfos3]);

  useEffect(() => {
    if (imageCaption) {
      if (imageCaption.length === 0) {
        setOriginalPhoto(null);
        setGeneratedProductInfos1(null);
        setGeneratedProductInfos2(null);
        setGeneratedProductInfos3(null);
      }
    }
  }, [imageCaption]);
  console.log("🚀 ~ file: app.tsx:157 ~ imageCaption:", imageCaption);

  // OpenAI
  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToGen = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to split the generated text and set the individual parts
  const splitAndSetParts = (
    generatedText: string,
    titleSetter: Function,
    shortDescSetter: Function,
    FullDescSetter: Function,
    AdviceSetter: Function
  ) => {
    const parts = generatedText.split(" | ");
    titleSetter(parts[0]);
    shortDescSetter(parts[1]);
    FullDescSetter(parts[2]);
    AdviceSetter(parts[3]);
  };

  const generateText = async (res: string | null, setter: Function) => {
    const prompt = `For now you will act as a e-shop copywriter. This is a generated caption of a product I want to sell on my e-commerce website : ${res}. I want you to generate informations for the product : a very short title (40 characters max), a mid-size description (200 characters max), a full description (600 characters max), some caring advices for the product (300 characters max). Absolutly generate informations in that precise order and clearly separated by a vertical bar (|), here is a short example : *title text* | *short description text* | *full description text* | *caring advices* . Do not add "Title", "Description" or anything else before actual title, descriptions or advices. Absolutly focus on the more important product in the caption (eg: in "a blanket on a chair" the blanket is more important because the chair is an accessory).`;
    setter("");
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
      setter((prev: string) => prev + chunkValue);
    }
    if (done) {
      console.log("Element done");
    }
    scrollToGen();
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
              url: "/og-image.jpg",
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
              {/* {originalPhoto && !imageCaption && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl h-96"
                  width={475}
                  height={475}
                />
              )} */}
              {loading && (
                <div className="relative flex items-center justify-center h-16 mt-16">
                  <div className="-mt-1 inline-block absolute h-8 w-8 border-secondary-500 animate-[spin_2s_linear_infinite] rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                  <div className="-mt-1 inline-block absolute h-12 w-12 border-tertiary-500 animate-[spin_2.5s_linear_infinite] rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                  <div className="-mt-1 inline-block absolute h-16 w-16 border-primary-500 animate-[spin_3s_linear_infinite] rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                </div>
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
                          setGeneratedTitle1(null);
                          setGeneratedShortDesc1(null);
                          setGeneratedFullDesc1(null);
                          setGeneratedCaringAdvice1(null);
                          setGeneratedTitle2(null);
                          setGeneratedShortDesc2(null);
                          setGeneratedFullDesc2(null);
                          setGeneratedCaringAdvice2(null);
                          setGeneratedTitle3(null);
                          setGeneratedShortDesc3(null);
                          setGeneratedFullDesc3(null);
                          setGeneratedCaringAdvice3(null);
                          setError(null);
                        }}
                        title="Generate New Description"
                      />
                    )}
                  </div>
                  {/* <div>Generated caption : {imageCaption}</div> */}
                  <div className="my-10 space-y-10 max-w-7xl">
                    {generatedTitle1 && (
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
                            generatedTitle={generatedTitle2 || ""}
                            generatedShortDesc={generatedShortDesc2}
                            generatedFullDesc={generatedFullDesc2}
                            generatedCaringAdvice={generatedCaringAdvice2}
                            color="primary"
                          />
                          <ProductInfosGen
                            generatedTitle={generatedTitle1}
                            generatedShortDesc={generatedShortDesc1}
                            generatedFullDesc={generatedFullDesc1}
                            generatedCaringAdvice={generatedCaringAdvice1}
                            color="tertiary"
                          />
                          <ProductInfosGen
                            generatedTitle={generatedTitle3 || ""}
                            generatedShortDesc={generatedShortDesc3}
                            generatedFullDesc={generatedFullDesc3}
                            generatedCaringAdvice={generatedCaringAdvice3}
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
        <Toaster position="bottom-center" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
