"use client"; // Client Component

import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
import { useState } from "react";
import HoverButton from "../components/HoverButton"; //  სხვა კომპონენტიდან დავაკავშიროთ

const App: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);

  const handlePermissionButton = () => {
    setHasPermission(true);
  };
  // სრული ეკრანის რეჟიმში გადასვლის ფუნქცია
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
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    const body = document.getElementById("root") as HTMLBodyElement;
    const modal = document.getElementById("modal") as HTMLDivElement;
    if (!active) {
      body.style.transition = "transform 0.5s ease, background-color 0.5s ease";
      body.style.transform =
        "perspective(75rem) rotateX(25deg) translateY(-6.2rem) translateZ(-4rem)";
      body.classList.add("bg-red", "text-black!important");
      modal.classList.remove("hidden");
    } else {
      body.style.transition = "transform 0.5s ease, background-color 0.5s ease";
      body.style.transform = ""; // წაშლის transform სტილს
      body.classList.remove("bg-red", "text-black!important");
      modal.classList.add("hidden");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row p-[24px] h-screen w-full">
      <div className="max-w-full sm:max-w-[200px] xl:max-w-[300px] mr-[24px]">
        <Profile />
      </div>
      <div className="grid-unset md:grid grid-cols-12 h-full w-full">
        <About />

        <Education />
      </div>
      {/* ღილაკი რომელიც სრულ ეკრანზე გადაგიყვანს ან დააბრუნებს */}
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-10 left-10 p-4  text-white rounded-lg z-10"
      >
        Toggle Fullscreen Mode
      </button>
      <button
        onClick={handleClick}
        className="absolute left-10 px-4 py-2  rounded-lg bottom-[80px] "
      >
        {active ? "Remove Tailwind Classes" : "Add Tailwind Classes"}
      </button>
      <div>
        {/* Button for giving permission */}
        <button
          onClick={handlePermissionButton}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-400"
        >
          Enable Sound
        </button>

        {/* Pass permission state to the HoverButton component */}
      </div>
    </div>
  );
};

export default App;
