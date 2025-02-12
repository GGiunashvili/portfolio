import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Profile() {
  const profileDetails = [
    { label: "NAME", value: "GIORGI GIUNASHVILI" },
    { label: "OCCUPATION", value: "FRONT END DEVELOPER" },
    { label: "CORPORATION", value: "EXTRA.GE" },
  ];
  const [hasPermission, setHasPermission] = useState(false);

  const handlePermissionButton = () => {
    setHasPermission(true);
  };
  return (
    <div className="w-full">
      <div className="w-full sm:w-[200px] xl:w-[260px] relative  border border-[#FE010130] mb-[20px] shadow-lg shadow-red-500">
        {/* bg-gradient-to-r from-black via-red to-black */}
        <Image
          className="m-auto"
          src="/m.webp" // Replace with the direct image URL
          alt="Sci-fi Skull"
          width={150} // Set the width of the image
          height={112} // Set the height of the image
        />
        <svg
          fill="none"
          height="0.9rem"
          viewBox="0 0 9 9"
          width="0.9rem"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "-0.1rem",
            left: "-0.1rem",
            stroke: "red",
            zIndex: 3,
            // backgroundColor: "red", // Uncomment if background color is needed
          }}
        >
          <path d="M1 9L1 1L9 1" stroke="current-color" strokeWidth="1"></path>
        </svg>
        <svg
          fill="none"
          height="0.9rem"
          viewBox="0 0 9 9"
          width="0.9rem"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "-0.1rem",
            right: "-0.1rem",
            stroke: "red",
            zIndex: 3,
            // backgroundColor: "red", // Uncomment if background color is needed
          }}
        >
          <path d="M0 1L8 1L8 9" stroke="current-color" strokeWidth="1"></path>
        </svg>
        <svg
          fill="none"
          height="0.9rem"
          viewBox="0 0 9 9"
          width="0.9rem"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: "-0.1rem",
            left: "-0.1rem",
            stroke: "red",
            zIndex: 3,
            // backgroundColor: "red", // Uncomment if background color is needed
          }}
        >
          <path
            d="M9 8L1 8L0.999999 6.99382e-07"
            stroke="current-color"
            strokeWidth="1"
          ></path>
        </svg>
        <svg
          fill="none"
          height="0.9rem"
          viewBox="0 0 9 9"
          width="0.9rem"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: "-0.1rem",
            right: "-0.1rem",
            stroke: "red",
            zIndex: 3,
            // backgroundColor: "red", // Uncomment if background color is needed
          }}
        >
          <path
            d="M8 0L8 8L1.04907e-06 8"
            stroke="current-color"
            strokeWidth="1"
          ></path>
        </svg>
      </div>

      <div>
        {profileDetails.map((detail) => (
          <div key={detail.label} className="mb-[16px]">
            <p className="text-xs font-normal mb-[4px]">{detail.label}</p>
            <p className="text-red text-xs font-bold">{detail.value}</p>
          </div>
        ))}
        <div className="mb-[16px]">
          <p className="text-xs font-normal mb-[6px]">SOCIAL</p>
          <p className="text-red text-xs font-bold border border-red p-[6px]">
            OPEN CONNECTION
          </p>
        </div>
        <button
          onClick={handlePermissionButton}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-400"
        >
          Enable Sound
        </button>
      </div>
    </div>
  );
}
