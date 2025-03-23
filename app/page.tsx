"use client"; // Client Component

import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
import { useState } from "react";
import { SoundProvider } from "components/SoundProvider";
const App: React.FC = () => {
  // სრული ეკრანის რეჟიმში გადასვლის ფუნქცია

  return (
    <SoundProvider>
      <div className="flex flex-col sm:flex-row p-[20px] h-unset sm:h-screen w-full xl:max-h-[1080px]">
        <div className="max-w-full sm:max-w-[25%] xl:max-w-[20%] sm:mr-[24px]  mb-[24px] sm:mb-0">
          <Profile />
        </div>
        <div className="flex flex-col sm:flex-row gap-y-[24px] md:gap-y-[0] grid-unset md:grid grid-cols-12 h-full w-full sm:pt-[44px]">
          <About />

          <Education />
        </div>
      </div>
    </SoundProvider>
  );
};

export default App;
