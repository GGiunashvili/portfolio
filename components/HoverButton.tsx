"use client";

import { useRef, useState } from "react";

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
  const [hover, setHover] = useState(false);
  return (
    <div>
      <button
        onMouseEnter={handleHover}
        className="px-6 py-2 text-white rounded hover:bg-pink-400"
      >
        <a
          href="https://extra.ge"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            transform: hover
              ? "perspective(60rem) rotateX(10deg) translateY(0rem) translateZ(0rem)"
              : "none",

            transition: "transform 0.3s ease", // Optional: for smooth transition
          }}
          className="relative group hover:bg-[#D9363642] hover:border-black flex justify-between flex-col items-start border border-[#FE010130] mb-[20px] p-[16px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-between w-full">
            <div>
              <p className="font-bold group-hover:text-red">
                Front End Developer
              </p>
              <p className="text-x text-red font-bold mb-[8px] group-hover:text-[#b2b7ba]">
                extra.ge
              </p>
            </div>
            <p className="text-sm text-red font-bold group-hover:text-[#b2b7ba]">
              Sept 2024 – Present
            </p>
          </div>
          <div className="group-hover:text-red">
            <p>
              Leading UI developers in creating responsive web/mobile interfaces
              with cross-functional teams.
            </p>
            <p>
              Built UIs from wireframes using HTML, CSS, JavaScript. Enhanced
              interactivity with modern frameworks.
            </p>
            <p>Delivered custom UI designs for remote clients.</p>
          </div>
          <svg
            className="hidden group-hover:flex"
            fill="none"
            height="0.9rem"
            viewBox="0 0 9 9"
            width="0.9rem"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "-0.1rem",
              left: "-0.1rem",
              stroke: "red",
              zIndex: 3,
              // backgroundColor: "red", // Uncomment if background color is needed
            }}
          >
            <path
              d="M1 9L1 1L9 1"
              stroke="current-color"
              strokeWidth="1"
            ></path>
          </svg>
          <svg
            className="hidden group-hover:flex"
            fill="none"
            height="0.9rem"
            viewBox="0 0 9 9"
            width="0.9rem"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "-0.1rem",
              right: "-0.1rem",
              stroke: "red",
              zIndex: 3,
              // backgroundColor: "red", // Uncomment if background color is needed
            }}
          >
            <path
              d="M0 1L8 1L8 9"
              stroke="current-color"
              strokeWidth="1"
            ></path>
          </svg>
          <svg
            className="hidden group-hover:flex"
            fill="none"
            height="0.9rem"
            viewBox="0 0 9 9"
            width="0.9rem"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              bottom: "-0.1rem",
              left: "-0.1rem",
              stroke: "red",
              zIndex: 3,
              // backgroundColor: "red", // Uncomment if background color is needed
            }}
          >
            <path
              d="M9 8L1 8L0.999999 6.99382e-07"
              stroke="current-color"
              strokeWidth="1"
            ></path>
          </svg>
          <svg
            className="hidden group-hover:flex"
            fill="none"
            height="0.9rem"
            viewBox="0 0 9 9"
            width="0.9rem"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              bottom: "-0.1rem",
              right: "-0.1rem",
              stroke: "red",
              zIndex: 3,
              // backgroundColor: "red", // Uncomment if background color is needed
            }}
          >
            <path
              d="M8 0L8 8L1.04907e-06 8"
              stroke="current-color"
              strokeWidth="1"
            ></path>
          </svg>
        </a>
      </button>
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />
    </div>
  );
};

export default HoverButton;
