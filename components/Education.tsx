import React from "react";
import { useState, useRef } from "react";
import { useSound } from "./SoundProvider";
import Svg from "./Svg";
export default function Education() {
  const profileDetails = [
    {
      id: "1",
      label: "CORPORATION",
      value: "EXTRA.GE",
      status: "private",
      type: "E-Commerce",
    },
    {
      id: "2",
      label: "CORPORATION",
      value: "DIGITAL-AREA.GE",
      status: "public",
      type: "Inc",
    },
    {
      id: "3",
      label: "CORPORATION",
      value: "REDMED.GE",
      status: "private",
      type: "Healthcare",
    },
    {
      id: "4",
      label: "CORPORATION",
      value: "PORTFOLIO",
      status: "public",
      type: "",
    },
    // {
    //   id: "5",
    //   label: "CORPORATION",
    //   value: "Colab",
    //   status: "public",
    //   type: "",
    // },
    // {
    //   id: "6",
    //   label: "CORPORATION",
    //   value: "Promotions",
    //   status: "public",
    //   type: "",
    // },
    // {
    //   id: "7",
    //   label: "CORPORATION",
    //   value: "GITHUB",
    //   status: "public",
    //   type: "",
    // },
  ];
  const { allowSound } = useSound();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleHover = () => {
    if (allowSound && audioRef.current) {
      audioRef.current.play(); // აუდიოს დაკვრა
    }
  };
  return (
    <div className="relative col-span-8 grid grid-cols-8 border md:border-l-0 border-[#FE010130] overflow-hidden text-xs">
      <div className="flex justify-center items-center col-span-8 border-b border-[#FE010130] py-[12px] px-[16px]">
        <p className="text-x text-red font-bold">TECH ODYSSEY</p>
        {/* SCRIPTS & BUILDS */}
      </div>
      <div className="col-span-8 relative  flex flex-col p-[16px]  overflow-scroll scrollbar-thin ">
        {" "}
        <div className="relative mb-[24px] sm:mb-[30px]">
          <p className="border border-[#FE010130] gap-x-[16px] py-[12px] px-[16px] font-bold texs-xs ">
            {/* bg-gradient-to-r from-black via-red to-black */}
            FILE XPLORER
          </p>
          <p className="text-xs text-red py-[12px] px-[16px] uppercase border border-b-0 border-t-0 border-[#FE010130] bg-black">
            LOCATION: /PROJECTS
          </p>

          <div className="grid grid-cols-8 flex-wrap gap-x-[10px]  text-xs text-red pb-[8px] p-[16px] pb-0 uppercase border border-[#FE010130] bg-black">
            {/* {profileDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center mb-[16px] col-span-8 xl:col-span-4"
              >
                <p className="text-[10px] font-normal mb-[0px]">
                  {detail.label}
                </p>
                <p className="text-red text-sm font-bold py-[2px]">
                  {detail.value}
                </p>
              </div>
            ))} */}
            {profileDetails.map((detail) => (
              <button
                onMouseEnter={handleHover}
                key={detail.id}
                className="flex items-center mb-[16px] col-span-8 xl:col-span-4 hover:bg-hoverRed border border-transparent hover:border-[#FE010130]"
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
                    <div className="flex flex-wrap ml-[8px]">
                      <p>{detail.value}</p>
                      <p className="text-xs ml-[8px]">{detail.type}</p>
                    </div>
                    <p className="border border-[#FE010130] text-[#b2b7ba] rounded-full ml-[8px] text-xs p-[6px]">
                      {detail.status}
                    </p>
                  </div>
                  {/* <p>2021 - Present</p> */}
                </div>
              </button>
            ))}
          </div>
          <Svg top="-0.1rem" left="-0.1rem" />
          <Svg top="-0.1rem" right="-0.1rem" />
          <Svg bottom="-0.1rem" left="-0.1rem" />
          <Svg bottom="-0.1rem" right="-0.1rem" />
        </div>
        <div className="flex flex-col justify-between flex-wrap ">
          <p className="mb-[16px] sm:mb-[20px] text-xs">PROFESSIONAL ROLES</p>
          {Array.from({ length: 6 }, (_, i) => {
            // თითოეული ელემენტისთვის hover სტეიტი
            const [hover, setHover] = useState(false);
            return (
              <a
                key={i}
                href="https://extra.ge"
                onMouseEnter={() => {
                  setHover(true);
                  handleHover();
                  setHoveredIndex(i);
                }}
                // onMouseLeave={() => setHover(false)}
                onMouseLeave={() => {
                  setHover(true);
                  handleHover();
                  setHoveredIndex(i);
                }}
                style={{
                  transform:
                    hoveredIndex === i || (i === 0 && hoveredIndex === null)
                      ? "perspective(60rem) rotateX(10deg) translateY(0rem) translateZ(0rem)"
                      : "none",
                  transition: "transform 0.3s ease",
                }}
                className={`relative group hover:bg-hoverRed hover:border-black flex justify-between flex-col items-start border border-[#FE010130] mb-[20px] p-[16px] text-[10px] ${
                  (i === 0 && hoveredIndex === null) || hoveredIndex === i
                    ? "bg-hoverRed w-full border-none"
                    : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <audio ref={audioRef} src="/sound.mp3" preload="auto" />

                <div className="flex justify-between w-full">
                  <div>
                    <p
                      className={`${
                        hoveredIndex === i || (i === 0 && hoveredIndex === null)
                          ? "text-red font-bold text-[10px]"
                          : "font-bold text-[#b2b7ba] group-hover:text-red text-[10px]"
                      }`}
                    >
                      Front End Developer
                    </p>
                    <p
                      className={`${
                        hoveredIndex === i || (i === 0 && hoveredIndex === null)
                          ? "text-[10px] text-[#b2b7ba] font-bold mb-[8px] group-hover:text-[#b2b7ba]"
                          : "text-[10px] text-red font-bold mb-[8px] group-hover:text-[#b2b7ba]"
                      }`}
                    >
                      extra.ge
                    </p>
                  </div>
                  <p
                    className={`${
                      hoveredIndex === i || (i === 0 && hoveredIndex === null)
                        ? " text-[10px] text-[#b2b7ba] font-bold group-hover:text-[#b2b7ba]"
                        : "text-[10px] text-red font-bold group-hover:text-[#b2b7ba]"
                    }`}
                  >
                    Sept 2024 – Present
                  </p>
                </div>
                <div
                  className={`${
                    hoveredIndex === i || (i === 0 && hoveredIndex === null)
                      ? "text-red"
                      : "group-hover:text-red"
                  }`}
                >
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
                <Svg top="-0.1rem" left="-0.1rem" />
                <Svg top="-0.1rem" right="-0.1rem" />
                <Svg bottom="-0.1rem" left="-0.1rem" />
                <Svg bottom="-0.1rem" right="-0.1rem" />
              </a>
            );
          })}
        </div>
      </div>

      <Svg top="-0.1rem" right="-0.1rem" />
      <Svg bottom="-0.1rem" right="-0.1rem" />

      {/* this is how handleHover sound works */}
      <div
        onMouseEnter={handleHover}
        className="absolute bottom-0 left-0 w-full bg-black flex justify-center items-center col-span-8 border-t border-[#FE010130] py-[12px] px-[16px]"
      >
        <p className="text-xs text-red font-bold">CREATIONS</p>
        <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      </div>
    </div>
  );
}
