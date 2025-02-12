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
      <div className="flex flex-col sm:flex-row p-[24px] h-screen w-full">
        <div className="max-w-full sm:max-w-[200px] xl:max-w-[300px] sm:mr-[24px]">
          <Profile />
        </div>
        <div className="grid-unset md:grid grid-cols-12 h-full w-full">
          <About />

          <Education />
        </div>
      </div>
    </SoundProvider>
  );
};

export default App;
