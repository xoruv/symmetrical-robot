import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();
  const timestamp = new Date().getTime();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/song.mp3');
      audioRef.current.volume = 0.15;
      audioRef.current.loop = true;
    }
    
    const audio = audioRef.current;
    
    const playAudio = () => {
      audio.play().catch(() => {
        // If autoplay fails, try again on user interaction
        const playOnInteraction = () => {
          audio.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('keydown', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('keydown', playOnInteraction);
      });
    };

    playAudio();

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
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
