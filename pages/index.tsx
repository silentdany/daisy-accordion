import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Head>
        <title>depikt - Generate Product Infos From Pictures</title>
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-20 text-center sm:mt-20">
        <div className="flex items-center justify-center w-full">
          <div className="relative w-1/3 h-96">
            <Image
              alt="Original photo of a room"
              src="/fake-product.png"
              className="absolute z-10 object-contain h-96"
              width={400}
              height={400}
            />
            <div className="bg-gradient-to-l z-20 from-neutral-900 to-transparent from-40% to-60% absolute w-full h-full"></div>
            <div className="bg-gradient-to-l z-0 from-transparent rounded-2xl to-primary-500 from-40% absolute w-full h-full"></div>
          </div>
          <div className="flex flex-col w-1/3 h-96">
            <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-normal text-gray-300 font-display sm:text-5xl">
              <em className="not-italic text-primary-500">1-click</em> Optimized
              Product Infos.
            </h1>
            <h2 className="max-w-xl mx-auto mt-12 text-lg leading-7 text-gray-500 sm:text-gray-400">
              Generate all your e-commerce product infos with{" "}
              <em className="not-italic text-primary-500">AI</em> from its
              pictures.
              {/* <br />
              Focus on your business, we're taking care of boring tasks. */}
            </h2>
            <Link
              className="px-4 py-3 mt-8 font-medium text-white transition bg-primary-600 rounded-xl sm:mt-10 hover:bg-primary-500"
              href="/dream"
            >
              Boost your product
            </Link>
          </div>
          <div className="relative w-1/3 h-96">
            <div className="absolute z-10 flex flex-col justify-center object-contain m-2 space-y-4 text-sm h-96 text-neutral-900">
              <div className="p-2 transition bg-white shadow-xs rounded-xl hover:bg-gray-100">
                Craft Beer Perfection
              </div>
              <div className="p-2 transition bg-white shadow-xs rounded-xl hover:bg-gray-100">
                Craft Beer Perfection is an exceptional product that offers a
                unique and unmatched taste experience.
              </div>
              <div className="p-2 transition bg-white shadow-xs rounded-xl hover:bg-gray-100">
                Indulge in the perfect sip of beer with Craft Beer Perfection.
                Our product is an exceptional brew that boasts of a unique and
                unparalleled taste experience. Every bottle of Craft Beer
                Perfection is made with the finest ingredients and brewed to
                perfection..
              </div>
              <div className="p-2 transition bg-white shadow-xs rounded-xl hover:bg-gray-100">
                To truly enjoy the unique and unparalleled taste experience of
                Craft Beer Perfection, we recommend serving it in a glass with a
                wide mouth...
              </div>
            </div>
            <div className="bg-gradient-to-r z-20 from-neutral-900 to-transparent from-40% to-60% absolute w-full h-full"></div>
            <div className="bg-gradient-to-r z-0 from-transparent to-primary-500 from-40% absolute w-full h-full rounded-2xl"></div>
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
