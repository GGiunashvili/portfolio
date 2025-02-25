import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import Svg from "./Svg";
import Button from "./Button";
export default function Profile() {
  const profileDetails = [
    { label: "NAME", value: "GIORGI GIUNASHVILI" },
    { label: "OCCUPATION", value: "REACT DEVELOPER" },
    { label: "CORPORATION", value: "EXTRA.GE" },
  ];
  const [isHovered, setIsHovered] = useState(false);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    const body = document.getElementById("root") as HTMLBodyElement;
    const modal = document.getElementById("modal") as HTMLDivElement;
    if (!active) {
      body.style.transition = "transform 0.5s ease, background-color 0.5s ease";
      body.style.transform =
        "perspective(75rem) rotateX(25deg) translateY(-6.2rem) translateZ(-4rem)";
      body.classList.add("bg-red-100", "text-black!important");
      modal.classList.remove("hidden");
    } else {
      body.style.transition = "transform 0.5s ease, background-color 0.5s ease";
      body.style.transform = ""; // წაშლის transform სტილს
      body.classList.remove("bg-red", "text-black!important");
      modal.classList.add("hidden");
    }
  };
  const toggleFullscreen = () => {
    const element = document.documentElement;

    // თუ უკვე სრულ ეკრანზე ვართ, გამოვიდეთ
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      // თუ არ ვართ სრულ ეკრანზე, გადავიდეთ
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else {
        console.log("Your browser does not support fullscreen mode");
      }
    }
  };
  return (
    <div className="w-full ">
      <div
        className="group w-full sm:w-full xl:w-full relative  border border-[#FE010130] mb-[20px] shadow-lg shadow-red-500 overflow-hidden"
        style={{
          transition: "transform 0.5s, background-color 0.5s",
          transform: isHovered
            ? "perspective(75rem) rotateX(25deg) translateY(-2.2rem) translateZ(-4rem)"
            : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* bg-gradient-to-r from-black via-red to-black */}
        <video
          className="w-full  group-hover:scale-[1.1] duration-[1000ms] "
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          <source src="/mp.mp4" type="video/mp4" />
        </video>
        {/* <Image
          className="m-auto"
          src="/m.webp" // Replace with the direct image URL
          alt="Sci-fi Skull"
          width={150} // Set the width of the image
          height={112} // Set the height of the image
        /> */}
        <Svg top="-0.1rem" left="-0.1rem" />
        <Svg top="-0.1rem" right="-0.1rem" />
        <Svg bottom="-0.1rem" left="-0.1rem" />
        <Svg bottom="-0.1rem" right="-0.1rem" />
      </div>

      <div className=" p-[16px] relative">
        <Svg top="-0.1rem" left="-0.1rem" />
        <Svg top="-0.1rem" right="-0.1rem" />
        <Svg bottom="-0.1rem" left="-0.1rem" />
        <Svg bottom="-0.1rem" right="-0.1rem" />
        {profileDetails.map((detail) => (
          <div key={detail.label} className="mb-[12px]">
            <p className="text-[10px] font-normal mb-[0px] ">{detail.label}</p>
            <p className="text-red text-sm font-bold py-[2px]">
              {detail.value}
            </p>
          </div>
        ))}

        <div className="w-full flex justify-center mb-[12px]">
          <Button />
        </div>
        <button
          onClick={handleClick}
          className=" w-full flex justify-center  text-black bg-red  text-[10px] font-bold p-[6px] mb-[12px]"
        >
          {active ? "Remove Tailwind Classes" : "Personal Info"}
        </button>
        <button
          onClick={toggleFullscreen}
          className=" w-full flex justify-center items-center text-black bg-red text-[10px] font-bold  p-[6px] "
        >
          Toggle Fullscreen Mode
        </button>
      </div>
    </div>
  );
}
