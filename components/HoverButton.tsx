"use client";

import { useRef } from "react";

interface HoverButtonProps {
  hasPermission: boolean;
}

const HoverButton = ({ hasPermission }: HoverButtonProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleHover = () => {
    if (audioRef.current && hasPermission) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button
        onMouseEnter={handleHover}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
      >
        Hover me for sound
      </button>
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />
    </div>
  );
};

export default HoverButton;
