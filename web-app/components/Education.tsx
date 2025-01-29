import React from "react";

export default function Education() {
  return (
    <div className="relative col-span-9 grid grid-cols-9 border border-r-0 border-[#FFD6D673] overflow-hidden">
      <div className="flex justify-center items-center col-span-9 border-b border-[#FFD6D673] py-[10px]">
        <p className="text-sm">CREATIONS</p>
      </div>
      <div
        className="col-span-2  pb-[16px] px-0 border-r border-[#FFD6D673]"
        style={{ height: "-webkit-fill-available" }}
      >
        <p className="border border-[#FFD6D673] py-[8px] px-[16px] font-bold text-md">
          DETAILS
        </p>
        <p className="text-xs text-red p-[16px] uppercase border border-r-0 border-[#FFD6D673]">
          PROJECT
        </p>
        <div>
          <p className="border-b border-[#FFD6D673] py-[8px] px-[16px] font-bold text-md">
            ABOUT ME
          </p>
          <p className="text-xs text-red p-[16px] uppercase">
            I’m Giorgi, a Front-End Developer with 4 years of experience. I
            specialize in React, Next.js, and TypeScript to create dynamic and
            responsive web applications. Throughout my career, I have focused on
            delivering high-quality solutions, always striving to combine
            functionality with a seamless user experience.
          </p>
        </div>
      </div>
      <div
        className="col-span-7 p-[16px] "
        style={{ height: "-webkit-fill-available" }}
      >
        {" "}
        <p className="border border-[#FFD6D673] py-[8px] px-[16px] font-bold text-md bg-gradient-to-r from-black via-red to-black">
          FILE XPLORER
        </p>
        <p className="text-xs text-red p-[16px] uppercase border border-[#FFD6D673] bg-black">
          LOCATION: /PROJECTS
        </p>
        <div className="grid grid-cols-6 flex-wrap gap-x-[10px]  text-xs text-red p-[16px] uppercase border border-[#FFD6D673] bg-black">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center mb-4 col-span-3">
              <div className="flex items-center justify-center bg-[#F7888838] w-[48px] h-[48px]">
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
              <div className="flex">
                <div className="flex items-center ">
                  <p className="ml-[12px]">extra.ge</p>
                  <p className="text-xs ml-[4px]">e commerce</p>
                  <p className="border border-[#FFD6D673] text-[#b2b7ba] rounded-full ml-[8px] text-xs p-[6px]">
                    public
                  </p>
                </div>
                {/* <p>2021 - Present</p> */}
              </div>
            </div>
          ))}

          {/* <div className="flex justify-between">
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
          <p>Delivered custom UI designs for remote clients.</p> */}
        </div>
      </div>

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
        <path d="M1 9L1 1L9 1" stroke="current-color" strokeWidth="2"></path>
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
          strokeWidth="2"
        ></path>
      </svg>
    </div>
  );
}
