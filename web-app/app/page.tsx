"use client"; // Client Component

import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
import { useState } from "react";

const App: React.FC = () => {
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
    const body = document.body;
    if (!active) {
      body.style.transition = "transform 0.5s ease, background-color 0.5s ease";
      body.style.transform =
        "perspective(75rem) rotateX(25deg) translateY(-6.2rem) translateZ(-4rem)";
      body.classList.add("bg-blue-500", "text-white");
    } else {
      body.style.transition = "transform 0.5s ease, background-color 0.5s ease";
      body.style.transform = ""; // წაშლის transform სტილს
      body.classList.remove("bg-blue-500", "text-white");
    }
  };

  return (
    <div className="flex p-[32px] h-screen w-full">
      <div className="max-w-[300px] mr-[24px]">
        <Profile />
      </div>
      <div className="grid grid-cols-12 h-full w-full">
        <Education />
        <About />
      </div>
      {/* ღილაკი რომელიც სრულ ეკრანზე გადაგიყვანს ან დააბრუნებს */}
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-10 left-10 p-4 bg-blue-500 text-white rounded-lg z-10"
      >
        Toggle Fullscreen Mode
      </button>
      <button
        onClick={handleClick}
        className="absolute left-10 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 bottom-[100px] "
      >
        {active
          ? "Remove Transform and Tailwind Classes"
          : "Add Transform and Tailwind Classes"}
      </button>
    </div>
  );
};

export default App;
