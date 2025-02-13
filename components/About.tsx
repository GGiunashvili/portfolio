import React from "react";

export default function About() {
  return (
    <div className="overflow-hidden relative col-span-4 border border-r-0 border-[#FE010130]  ">
      <p className="border-r border-[#FE010130] p-[16px] text-sm text-red font-bold">
        PERSONAL REPO
      </p>
      <div className="overflow-scroll scrollbar-thin h-[calc(100%-38px)] border border-b-0 border-[#FE010130]">
        <div className="flex flex-col">
          <div>
            <p className="border-b border-[#FE010130] py-[8px] px-[16px] font-bold text-md">
              FRONT END DEVELOPER
            </p>
            <p className="text-xs text-red p-[16px] uppercase">
              I’m Giorgi, a Front-End Developer with 4 years of experience. I
              specialize in React, Next.js, and TypeScript to create dynamic and
              responsive web applications. Throughout my career, I have focused
              on delivering high-quality solutions, always striving to combine
              functionality with a seamless user experience.
            </p>
          </div>
          <div className="border border-[#FE010130] border-l-0 border-r-0">
            <p className=" text-md font-bold border-b border-[#FE010130]  mb-[24px] py-[8px] px-[16px]">
              CORE COMPETENCIES
            </p>
            <div className="flex justify-center flex-wrap gap-[24px] mx-[12px] mb-[24px]">
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    NEXT JS
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z"
                    fill="red"
                  />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    REACT
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>react</title>
                  <rect width="24" height="24" fill="none" />
                  <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    TYPESCRIPT
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>
                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>file_type_typescript</title>
                  <path
                    d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
                    style={{ fill: "red" }}
                  />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    TAILWIND
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 3C5.63333 3 4.46667 4 4 5.99999C4.7 4.99999 5.51667 4.625 6.45 4.87499C6.98252 5.01763 7.36314 5.43155 7.78443 5.88974C8.47074 6.63613 9.26506 7.49999 11 7.49999C12.8667 7.49999 14.0333 6.49999 14.5 4.5C13.8 5.49999 12.9833 5.87499 12.05 5.62499C11.5175 5.48235 11.1369 5.06844 10.7156 4.61025C10.0293 3.86386 9.23494 3 7.5 3ZM4 7.49999C2.13333 7.49999 0.966667 8.49998 0.5 10.5C1.2 9.49998 2.01667 9.12498 2.95 9.37498C3.48252 9.51762 3.86314 9.93154 4.28443 10.3897C4.97074 11.1361 5.76506 12 7.5 12C9.36667 12 10.5333 11 11 8.99998C10.3 9.99998 9.48333 10.375 8.55 10.125C8.01748 9.98234 7.63686 9.56843 7.21557 9.11023C6.52926 8.36385 5.73494 7.49999 4 7.49999Z"
                    stroke="#000000"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    GITHUB
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>github</title>
                  <rect width="24" height="24" fill="none" />
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    GIT
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 24 24"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z"
                    fill="red"
                  />
                </svg>
              </div>

              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    JAVASCRIPT
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>
                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>file_type_js</title>
                  <path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z" />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    HTML
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M15.54 0.5l-1.28 14.379-5.78 1.621-5.74-1.621-1.28-14.379h14.080zM12.92 3.439h-8.84l0.47 5.34h6.121l-0.222 2.279-1.969 0.532-1.96-0.531-0.13-1.399h-1.749l0.22 2.779 3.62 1h0.039v-0.010l3.591-0.99 0.5-5.44h-6.441l-0.15-1.81h6.74l0.16-1.75z"
                    fill="red"
                  />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    SCSS
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  // You can override the fill color here if needed
                >
                  <title>file_type_scss</title>
                  <path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" />
                </svg>
              </div>
              <div
                className="group"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div className="group-hover:flex hidden absolute top-[-30px] m-auto right-0 left-0  w-[100px] py-[4px] px-[6px]  transform -translate-x-[27%] justify-center text-center  ">
                  <p className="inline-block text-xs font-bold text-red border border-red py-[2px] px-[4px] border bg-[black]">
                    {" "}
                    CSS
                  </p>
                </div>
                <svg
                  className="hover:rotate-[360deg] transition-transform duration-[1000ms]"
                  style={{
                    stroke: "red",
                    height: "50px",
                    width: "46px",
                  }}
                  fill="none"
                  height="20px"
                  viewBox="0 0 52 60"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.519238 15.2887L26 0.57735L51.4808 15.2887V44.7113L26 59.4226L0.519238 44.7113V15.2887Z"
                    stroke="red"
                    strokeWidth="2"
                  ></path>
                </svg>

                <svg
                  className="z-[-1]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "24px",
                    width: "24px",
                    fill: "red", // Using the CSS variable for fill color
                  }}
                  fill="#000000"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g id="c133de6af664cd4f011a55de6b001a2b">
                    <path
                      display="inline"
                      d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492
        V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308
        V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034
        c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9
        l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574
        l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542
        l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26
        l0.26-0.112l109.086-46.639L369.477,176.444z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="grid ">
            <div className="grid ">
              <p className=" text-md font-bold border-b border-[#FE010130] py-[8px] px-[16px]">
                PROFESSIONAL STUDY ZONES
              </p>{" "}
              <div className="grid gap-[20px] p-[16px] text-red">
                <div className="flex gap-[8px] items-start">
                  <img
                    className="rounded-full min-w-[40px] h-[30px] mt-[4px] p-1 bg-[#FE010130]"
                    src="/iliauni.svg"
                    alt=""
                  />
                  <div>
                    <p className="text-xs mb-[8px]">
                      Tbilisi School Of Communication - Angular course
                    </p>
                    <p className="text-sm">Sept 2024 – Present</p>
                  </div>
                </div>{" "}
                <div className="flex gap-[8px] items-start">
                  <img
                    className="rounded-full min-w-[40px] h-[30px] mt-[4px] p-1 bg-[#FE010130]"
                    src="/udemy-3.svg"
                    alt=""
                  />
                  <div>
                    <p className="text-xs mb-[8px]">
                      Udemy - Certified Internet Webmaster JavaScript Specialist
                    </p>
                    <p className="text-sm">Sept 2022 – Aug 2022</p>
                  </div>
                </div>
                <div className="flex gap-[8px] items-start">
                  <img
                    className="rounded-full min-w-[40px] h-[30px] mt-[4px] p-1 bg-[#FE010130]"
                    src="/geolab.svg"
                    alt=""
                  />

                  <div>
                    <p className="text-xs mb-[8px]">
                      Geolab - Front End Development
                    </p>
                    <p className="text-sm">Sept 2022 – May 2022</p>
                  </div>
                </div>{" "}
                <div className="flex gap-[8px] items-start">
                  <img
                    className="rounded-full min-w-[40px] h-[30px] mt-[4px] p-1 bg-[#FE010130]"
                    src="/iliauni.svg"
                    alt=""
                  />

                  <div>
                    <p className="text-xs mb-[8px]">
                      Ilia State University - Faculty of Business and
                      Information Technology
                    </p>
                    <p className="text-sm">Sept 2022 – May 2022</p>
                  </div>
                </div>
              </div>
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
              rotate: "-90deg",
              stroke: "red",
              zIndex: 3,
              // backgroundColor: "red", // Uncomment if background color is needed
            }}
          >
            <path
              d="M0 1L8 1L8 9"
              stroke="current-color"
              strokeWidth="2"
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
              left: "-0.1rem",
              rotate: "90deg",

              stroke: "red",
              zIndex: 3,
              // backgroundColor: "red", // Uncomment if background color is needed
            }}
          >
            <path
              d="M8 0L8 8L1.04907e-06 8"
              stroke="current-color"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black border-t border-r border-[#FE010130] p-[16px] text-sm text-red font-bold">
        REACT DEVELOPER
      </div>
    </div>
  );
}
