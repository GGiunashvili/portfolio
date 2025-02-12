"use client";
import { useRef } from "react";
import { useSound } from "./SoundProvider"; // გზავნილი `useSound`-ის აქ

export default function HoverDiv() {
  const { allowSound } = useSound(); // კონტექსტიდან allowSound-ი
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleHover = () => {
    if (allowSound && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className="w-40 h-40 bg-gray-300 flex items-center justify-center cursor-pointer mt-4"
      onMouseEnter={handleHover}
    >
      <p>ჰოვერი</p>
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />
    </div>
  );
}
