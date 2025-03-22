import React from "react";
import { useState } from "react";
import useFullscreenStore from "../stores/useFullscreenStore";
// import {
//   ArrowsPointingOutIcon,
//   ArrowsPointingInIcon,
// } from "@heroicons/react/outline";
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
export default function Profile() {
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();
  const [isHovered, setIsHovered] = useState(false);

  const profileDetails = [
    { label: "NAME", value: "GIORGI GIUNASHVILI" },
    { label: "OCCUPATION", value: "REACT DEVELOPER" },
    { label: "CORPORATION", value: "EXTRA.GE" },
  ];
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText("giorgi99.giunashvili@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // აიკონის დაბრუნება ორ წამში
      })
      .catch((err) => console.error("Error copying text: ", err));
  };

  return (
    <div className="w-full">
      <div
        className="group w-full sm:w-full xl:w-full relative border border-[#FE010130] mb-[24px] shadow-lg shadow-red-500 overflow-hidden"
        style={{
          transition: "transform 0.5s, background-color 0.5s",
          transform: isHovered
            ? "perspective(75rem) rotateX(25deg) translateY(-2.2rem) translateZ(-4rem)"
            : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          className="w-full group-hover:scale-[1.2] duration-[1000ms]"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          <source src="/mp.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative">
        <div>
          {profileDetails.map((detail) => (
            <div
              key={detail.label}
              className="mb-[12px] last:mb-0 md:last:mb-[12px]"
            >
              <p className="text-[10px] font-normal mb-[0px]">{detail.label}</p>
              <p className="text-red text-sm font-bold py-[2px]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mb-[12px]">
          <Button />
        </div>

        <button
          onClick={toggleFullscreen}
          className="w-full flex gap-[8px] justify-center items-center text-black bg-red text-[10px] font-bold p-[6px] mb-[24px]"
        >
          {isFullscreen ? "Exit Fullscreen Mode" : "Enter Fullscreen Mode"}

          {isFullscreen ? (
            <ArrowsPointingInIcon className="w-[24px] h-[24px]" />
          ) : (
            <ArrowsPointingOutIcon className="w-[24px] h-[24px]" />
          )}
        </button>

        <button
          onClick={handleCopy}
          className="flex justify-center items-center gap-[8px] w-full text-sm  cursor-pointer h-[24px] text-red"
        >
          <span className="ml-2">giorgi99.giunashvili@gmail.com</span>

          {isCopied ? (
            <span>Copied!</span>
          ) : (
            <ClipboardDocumentIcon className="w-[24px] h-[24px]" />
          )}
        </button>
      </div>
    </div>
  );
}
