'use client';
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

import NumberTicker from "../components/ui/number-ticker";
import TypingAnimation from "@/components/ui/typing-animation";
import Marquee from "@/components/ui/marquee";

import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent server-side rendering issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Ani from "../app/svg/groovyWalk.json";

// import IconCloud from "@/app/fonts/Comp/icon-cloud";
import img1 from "@/images/aa.jpeg";
import img2 from "@/images/bb.jpeg";
import img3 from "@/images/cc.jpeg";
import img4 from "@/images/dd.jpeg";
import img5 from "@/images/ee.jpeg";
import img6 from "@/images/ff.jpeg";
import img7 from "@/images/gg.jpeg";
import img8 from "@/images/hh.jpeg";

const images = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
  img8.src,
];

const handleClick = () => {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  frame();
};


export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    handleClick();
    handleClick();
    handleClick();
    handleClick();
    handleClick();
    handleClick();
    handleClick();
    handleClick();
    handleClick();
    setInterval(() => {
      handleClick();
    }, 5000)
  }, [])

  const handlePlay = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
        console.log("Audio is playing!");
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-green-700 to-indigo-900 min-h-screen">
      {/* <ConfettiSideCannons /> */}
      <Button onClick={handleClick} className="hidden">Trigger Side </Button>
      <NumberTicker
        value={28}
        direction="up"
        delay={1}
        decimalPlaces={0}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-400"
      />
      <br />
      <Lottie style={{ width: "10%", height: "10%" }}  animationData={Ani} loop={true} />
      {/* <br /><br /> */}
      {/* Typing Animations */}
      <div className="mt-4 text-center">
        <TypingAnimation
          className="bg-gradient-to-r from-red-500 via-white to-purple-500 bg-clip-text text-transparent animate-rainbow text-3xl sm:text-4xl lg:text-5xl font-semibold"
          delay={2}
        >
          Happy Birthday
        </TypingAnimation>
        <TypingAnimation className="bg-gradient-to-r from-red-500 via-white to-purple-500 bg-clip-text text-transparent animate-rainbow text-3xl sm:text-4xl lg:text-5xl font-semibold" delay={2}>
          Dear Dev Ji
        </TypingAnimation>
      </div>
      <br /><br />
      {/* Audio Autoplay */}
      <audio ref={audioRef} autoPlay >
        <source src="/happy-birthday-220024.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Button
        onClick={handlePlay}
        className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold"
      >
        Play Song 🎵
      </Button>
      <br />
      {/* Icon Cloud */}
      <div
        className="relative flex w-full max-w-sm sm:max-w-md md:max-w-lg items-center justify-center overflow-hidden rounded-[10vh] border border-gray-500 
        mx-auto mt-6 bg-white/10 p-6 sm:p-10 lg:p-14 shadow-lg"
      >
         <Marquee
          className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {images.map((data, idx) => (
            <img
              key={idx}
              src={data}
              // alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
        {/* <IconCloud imageArray={images} /> */}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-white text-sm sm:text-base">
        Made with ❤️ for a special celebration. <br />
        by Girendra Sinsinwar
      </footer>
    </div>
  );
}
