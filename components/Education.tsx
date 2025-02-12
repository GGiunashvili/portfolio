import React from "react";
import { useState, useRef } from "react";
import { useSound } from "./SoundProvider";
import HoverDiv from "./HoverDiv";
export default function Education() {
  const { allowSound } = useSound();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleHover = () => {
    if (allowSound && audioRef.current) {
      audioRef.current.play(); // აუდიოს დაკვრა
    }
  };
  return (
    <div className="relative col-span-8 grid grid-cols-8 border md:border-l-0 border-[#FE010130] overflow-hidden">
      <div className="flex justify-center items-center col-span-8 border-b border-[#FE010130] p-[16px]">
        <p className="text-sm text-red font-bold">CREATIONS</p>
      </div>
      <div className="col-span-8 relative  flex flex-col py-[18px] px-[16px] xl:px-[40px] overflow-scroll scrollbar-thin">
        {" "}
        <div className="relative mb-[24px]">
          <p className="border border-[#FE010130] gap-x-[16px] py-[8px] px-[16px] font-bold text-md ">
            {/* bg-gradient-to-r from-black via-red to-black */}
            FILE XPLORER
          </p>
          <p className="text-xs text-red p-[16px] uppercase border border-b-0 border-t-0 border-[#FE010130] bg-black">
            LOCATION: /PROJECTS
          </p>
          <div className="grid grid-cols-8 flex-wrap gap-x-[10px]  text-xs text-red pb-[8px] p-[16px] uppercase border border-[#FE010130] bg-black">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                onMouseEnter={handleHover}
                key={index}
                className="flex items-center mb-4 col-span-8 xl:col-span-4 hover:bg-[#D9363642] border border-transparent hover:border-[#FE010130]"
              >
                <audio ref={audioRef} src="/sound.mp3" preload="auto" />

                <div className="flex items-center justify-center bg-[#F7888838] w-[48px] h-[48px]">
                  <svg
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "24px",
                      height: "24px",
                    }}
                    height="10rem"
                    viewBox="-909 226 100 100"
                    width="10rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-809.6,259l0-2.5h0v-10.3c0-1.4-1.1-2.5-2.5-2.5l-45.4-0.1l-6.9-7.7c-0.5-0.5-1.2-0.8-1.9-0.8H-906c-1.4,0-2.5,1.1-2.5,2.5  v76.9c0,1.4,1.1,2.5,2.5,2.5h93.8c1.4,0,2.5-1.1,2.5-2.5l0.1-52.9h0V259z M-853,248.6l38.4,0.1v7.8h-31.4l-2.9-3.2L-853,248.6z  M-814.7,311.9h-88.8v-71.9h36.1l18.5,20.6c0.5,0.5,1.2,0.8,1.9,0.8h32.5L-814.7,311.9z"
                      fill="red"
                      stroke="red"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="flex">
                  <div className="flex items-center ">
                    <div className="flex flex-wrap ml-[12px]">
                      <p>extra.ge</p>
                      <p className="text-xs">e commerce</p>
                    </div>
                    <p className="border border-[#FE010130] text-[#b2b7ba] rounded-full ml-[8px] text-xs p-[6px]">
                      public
                    </p>
                  </div>
                  {/* <p>2021 - Present</p> */}
                </div>
              </div>
            ))}
          </div>
          <svg
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
        </div>
        <div className="flex flex-col justify-between flex-wrap ">
          <p className="mb-[24px] text-sm">WORKING EXPERIENCE</p>
          {Array.from({ length: 6 }, (_, i) => {
            // თითოეული ელემენტისთვის hover სტეიტი
            const [hover, setHover] = useState(false);
            return (
              <a
                onMouseEnter={handleHover}
                href="https://extra.ge"
                key={i}
                // onMouseEnter={() => setHover(true)}
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
                <audio ref={audioRef} src="/sound.mp3" preload="auto" />

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
                    Leading UI developers in creating responsive web/mobile
                    interfaces with cross-functional teams.
                  </p>
                  <p>
                    Built UIs from wireframes using HTML, CSS, JavaScript.
                    Enhanced interactivity with modern frameworks.
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
            );
          })}
        </div>
      </div>
      <svg
        fill="none"
        height="0.9rem"
        viewBox="0 0 9 9"
        width="0.9rem"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-0.1rem",
          right: "-0.1rem",
          rotate: "90deg",
          stroke: "red",
          zIndex: 3,
          // backgroundColor: "red", // Uncomment if background color is needed
        }}
      >
        <path d="M1 9L1 1L9 1" stroke="current-color" strokeWidth="2"></path>
      </svg>
      <svg
        fill="none"
        height="0.9rem"
        viewBox="0 0 9 9"
        width="0.9rem"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "-0.1rem",
          right: "-0.1rem",
          rotate: "-90deg",
          stroke: "red",
          zIndex: 3,
          // backgroundColor: "red", // Uncomment if background color is needed
        }}
      >
        <path
          d="M9 8L1 8L0.999999 6.99382e-07"
          stroke="current-color"
          strokeWidth="2"
        ></path>
      </svg>
      {/* this is how handleHover sound works */}
      <div
        onMouseEnter={handleHover}
        className="absolute bottom-0 left-0 w-full bg-black flex justify-center items-center col-span-8 border-t border-[#FE010130] p-[16px]"
      >
        <p className="text-sm text-red font-bold">CREATIONS</p>
        <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      </div>
    </div>
  );
}
