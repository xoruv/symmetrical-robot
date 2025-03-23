import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"xoru's personal site"}
        description={"xoru's personal site"}
        canonical={`https://xoru.lol${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://xoru.lol${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "xoru's personal site",
          description: "xoru's personal site",
          images: [
            {
              url: "/xoru.webp",
              alt: "xoru",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
