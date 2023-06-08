import Document, { Head, Html, Main, NextScript } from "next/document";
import GoogleAnalytics from "../components/GoogleAnalytics";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth" data-theme="depikt">
        <Head>
          <link
            rel="apple-touch-icon"
            href="apple-touch-icon.png"
            key="apple"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
            key="icon32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
            key="icon16"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="android-chrome-32x32.png"
            key="icon32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="android-chrome-512x512.png"
            key="icon16"
          />
          <link rel="icon" href="favicon.ico" key="favicon" />
        </Head>
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA4_KEY!} />
        <body className="bg-fixed bg-neutral-50 bg-gradient-to-tl from-primary-500/20 via-secondary-500/20 to-tertiary-500/20">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
