import React from "react";

export default function Education() {
  return (
    <div className="relative col-span-5 border border-[#FFD6D6] ">
      <p className="border-b border-[#FFD6D6]  p-[16px] font-bold text-md">
        Education{" "}
      </p>
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
  );
}
