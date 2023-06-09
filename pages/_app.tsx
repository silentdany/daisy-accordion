import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA4_KEY!} />
    </SessionProvider>
  );
}

export default MyApp;
