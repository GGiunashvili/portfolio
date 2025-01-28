import Image from "next/image";
import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
export default function app() {
  return (
    <div className="flex p-[16px] h-screen">
      <Profile />
      <div className="grid grid-cols-12 ">
        <Education />
        <About />
      </div>
    </div>
  );
}
