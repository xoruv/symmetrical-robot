import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();
  const timestamp = new Date().getTime();

  useEffect(() => {
    const audio = new Audio('/audio.mp3');
    audio.volume = 0.15;
    audio.loop = true;
    
    const playAudio = () => {
      audio.play().catch(() => {
        // If autoplay fails, try again on user interaction
        document.addEventListener('click', () => audio.play(), { once: true });
      });
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <>
      <NextSeo
        title={"xoru.lol"}
        description={"xoru's personal site"}
        canonical={`https://xoru.lol${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://xoru.lol${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}?t=${timestamp}`,
          title: "xoru.lol",
          description: "xoru's personal site",
          images: [
            {
              url: `/xoru.webp?t=${timestamp}`,
              alt: "xoru",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
