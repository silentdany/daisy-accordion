import Document, { Head, Html, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

class MyDocument extends Document {
  render() {
    const router = useRouter();
    return (
      <Html lang="en" className="scroll-smooth" data-theme="depikt">
        <Head>
          <link
            rel="apple-touch-icon"
            href={`${router.basePath}/apple-touch-icon.png`}
            key="apple"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${router.basePath}/favicon-32x32.png`}
            key="icon32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${router.basePath}/favicon-16x16.png`}
            key="icon16"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={`${router.basePath}/android-chrome-32x32.png`}
            key="icon32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href={`${router.basePath}/android-chrome-512x512.png`}
            key="icon16"
          />
          <link
            rel="icon"
            href={`${router.basePath}/favicon.ico`}
            key="favicon"
          />
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
                  url: `${router.basePath}/og-image.jpg`,
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
        </Head>
        <body className="bg-fixed bg-neutral-50 bg-gradient-to-tl from-primary-500/20 via-secondary-500/20 to-tertiary-500/20">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
