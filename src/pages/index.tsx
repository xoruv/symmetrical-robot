import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Experience from "@/components/sections/index/Experience";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    // Try to play the audio when the component mounts
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.3; // Set volume to 30%
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    };
    
    playAudio();
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/song.mp3"
        autoPlay
        loop
        style={{ display: 'none' }}
      />
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden px-6">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className='z-[-5]'
        />
        <Hero inView={inView} descRef={ref} />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
