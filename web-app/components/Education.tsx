import React from "react";

export default function Education() {
  return (
    <div className="relative col-span-7 grid grid-cols-6 border border-[#FFD6D6] ">
      {/* <p className="border-b border-[#FFD6D6]  p-[16px] font-bold text-md">
        Education{" "}
      </p> */}
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
      <div className="col-span-2  p-[16px]">
        <p className="border border-[#FFD6D6]  py-[8px] px-[16px] font-bold text-md">
          DETAILS
        </p>
        <p className="text-sm text-red p-[16px] uppercase border border-[#FFD6D6] ">
          PROJECT
        </p>
      </div>
      <div className="col-span-4 bg-yellow-100 p-[16px]">
        {" "}
        <p className="border border-[#FFD6D6]  py-[8px] px-[16px] font-bold text-md">
          FILE XPLORER
        </p>
        <p className="text-sm text-red p-[16px] uppercase border border-[#FFD6D6] ">
          LOCATION: /PROJECTS
        </p>
        <div className="flex flex-col gap-[14px] text-sm text-red p-[16px] uppercase border border-[#FFD6D6] ">
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-[#f78888] w-[48px] h-[48px]">
              <svg
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "24px",
                  height: "24px",
                }}
                height="10rem"
                viewBox="-909 226 100 100"
                width="10rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-809.6,259l0-2.5h0v-10.3c0-1.4-1.1-2.5-2.5-2.5l-45.4-0.1l-6.9-7.7c-0.5-0.5-1.2-0.8-1.9-0.8H-906c-1.4,0-2.5,1.1-2.5,2.5  v76.9c0,1.4,1.1,2.5,2.5,2.5h93.8c1.4,0,2.5-1.1,2.5-2.5l0.1-52.9h0V259z M-853,248.6l38.4,0.1v7.8h-31.4l-2.9-3.2L-853,248.6z  M-814.7,311.9h-88.8v-71.9h36.1l18.5,20.6c0.5,0.5,1.2,0.8,1.9,0.8h32.5L-814.7,311.9z"
                  fill="red"
                  stroke="red"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="ml-[12px]">extra.ge</p>
              <p className="ml-[12px]">e commerce</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p> Front End/UI Developer</p>
              <p>extra.ge</p>
            </div>
            <p>2021 - Present</p>
          </div>
          <p>
            Leading UI developers in creating responsive web/mobile interfaces
            with cross-functional teams.
          </p>
          <p>Built UIs from wireframes using HTML, CSS, JavaScript.</p>
          <p>Enhanced interactivity with modern frameworks.</p>
          <p>Delivered custom UI designs for remote clients.</p>
        </div>
      </div>
    </div>
  );
}
