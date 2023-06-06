import Document, { Head, Html, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth" data-theme="depikt">
        <Head>
          <link rel="icon" href="/favicon.ico" />
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
