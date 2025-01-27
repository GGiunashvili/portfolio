import Image from "next/image";
import Profile from "../components/Profile";
export default function app() {
  return (
    <div className="grid grid-cols-12 gap-[16px] p-8">
      <Profile />

      <div className="col-span-6 bg-purple-100">06</div>
      <div className="col-span-3 bg-gray-100">07</div>
    </div>
  );
}
