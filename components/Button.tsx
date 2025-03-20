"use client";
import { useSound } from "./SoundProvider"; // import sound context
import { useRef, useEffect, useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

export default function Button() {
  const [muted, setMuted] = useState(false);
  const { allowSound, setAllowSound } = useSound(); // obtain sound state and set function
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // useEffect to handle Audio object initialization on client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/soundtrack.mp3");
    }
  }, []); // empty dependency array ensures it runs only once on component mount

  const toggleSoundAndMute = () => {
    setAllowSound(!allowSound); // toggle sound permission
    setMuted(!muted); // toggle mute status

    if (!allowSound && audioRef.current) {
      audioRef.current.play(); // Play sound when enabled
      audioRef.current.loop = true; // Keep the audio playing in a loop
    } else if (audioRef.current) {
      audioRef.current.pause(); // Pause sound when disabled
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
    }

    if (audioRef.current) {
      audioRef.current.muted = muted; // mute/unmute audio based on current state
    }
  };

  return (
    <button
      onClick={toggleSoundAndMute} // toggle sound and mute at the same time
      className="w-full flex gap-[8px] justify-center items-center text-red text-xs font-bold p-[6px]"
    >
      Sound
      {!muted ? (
        <SpeakerXMarkIcon className="h-6 w-6 text-red" />
      ) : (
        <SpeakerWaveIcon className="h-6 w-6 text-red" />
      )}
    </button>
  );
}
