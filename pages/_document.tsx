import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    let description =
      "Get product title, descriptions and optimized photos from only a few smartphone-quality pictures.";
    let ogimage = "https://www.roomgpt.io/og-image.png";
    let sitename = "depikt";
    let title = "Product sheet generator";

    return (
      <Html lang="en" className="scroll-smooth" data-theme="depikt">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={description} />
          <meta property="og:site_name" content={sitename} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta property="og:image" content={ogimage} />
          <meta name="twitter:image" content={ogimage} />
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
