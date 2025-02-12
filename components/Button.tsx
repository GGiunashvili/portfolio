"use client";
import { useSound } from "./SoundProvider"; // import sound context

export default function Button() {
  const { allowSound, setAllowSound } = useSound(); // obtain sound state and set function

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => setAllowSound(!allowSound)} // toggle sound permission
    >
      ნებართვის გადართვა
    </button>
  );
}
