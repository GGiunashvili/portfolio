import Image from "next/image";
import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
export default function app() {
  return (
    <div className="grid grid-cols-12 gap-[24px] p-[45px] h-screen">
      <Profile />
      <Education />
      <About />
    </div>
  );
}
