"use client"; // Client Component

import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";

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

  return (
    <div className="flex p-[16px] h-screen w-full">
      <div className="max-w-[300px]">
        <Profile />
      </div>
      <div className="grid grid-cols-12 h-full w-full">
        <Education />
        <About />
      </div>
      {/* ღილაკი რომელიც სრულ ეკრანზე გადაგიყვანს ან დააბრუნებს */}
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-10 right-10 p-4 bg-blue-500 text-white rounded-lg z-10"
      >
        Toggle Fullscreen Mode
      </button>
    </div>
  );
};

export default App;
