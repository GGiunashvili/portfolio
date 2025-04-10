import React from "react";
import { useState, useRef } from "react";
import { useSound } from "./SoundProvider";
import Svg from "./Svg";
export default function Education() {
  const professionalRoles = [
    {
      id: "1",
      label: "Front End Developer",
      value: "extra.ge",
      year: "2021-Present",
      type: [
        "Leading UI developers in creating responsive web/mobile interfaces with cross-functional teams.",
        "Built UIs from wireframes using HTML, CSS, JavaScript. Enhanced interactivity with modern frameworks.",
        "Delivered custom UI designs for remote clients.",
      ],
      link: "https://extra.ge",
    },
    {
      id: "2",
      label: "FRONT-END DEVELOPER",
      value: "DigitalArea.ge",
      year: "2020-2021",
      type: [
        "At Digital Area, I crafted over 30 diverse promotion landing pages and web projects, with a special focus on creating smooth, eye-catching animations. Collaborating closely with designers and marketers, I ensured every project delivered engaging, user-friendly experiences that stood out and drove results.",
      ],
      link: "https://digitalarea.ge",
    },
    {
      id: "3",
      private: "private",
      label: "Front End Developer",
      value: "Freelancer.com",
      year: "2020-2021",
      type: "During my time freelancing on Freelancer.com, I took on a few unique projects that really pushed me to expand my skills and adapt to different client needs. Each project had its own set of challenges, making the work both rewarding and educational.",
    },
    {
      id: "4",
      private: "private",
      label: "Front End Developer",
      value: "Travel Guide app",
      year: "2020-2020",
      type: "As a Front-End Developer Intern at Travel Guide App, I gained hands-on experience in web development, focusing on creating intuitive user interfaces. ",
    },
    {
      id: "5",
      label: "Front End Developer",
      value: "Redmed.ge",
      year: "2019-2020",
      type: "At REDMED, I focused on ensuring the reliability and quality of our digital health solutions. I conducted rigorous testing and debugging to identify and resolve issues, ensuring our software met the highest standards. My work involved close collaboration with the development team to enhance functionality, user experience, and overall system performance.",
      link: "https://redmed.ge",
    },
  ];
  const profileDetails = [
    {
      id: "1",
      label: "CORPORATION",
      value: "EXTRA.GE",
      status: "public",
      type: "E-Commerce",
      link: "https://extra.ge",
    },
    {
      id: "2",
      label: "CORPORATION",
      value: "DIGITAL-AREA.GE",
      status: "public",
      type: "Inc",
      link: "https://digitalarea.ge",
    },
    {
      id: "3",
      label: "CORPORATION",
      value: "REDMED.GE",
      status: "public",
      type: "Healthcare",
      link: "https://redmed.ge",
    },
    {
      id: "4",
      label: "CORPORATION",
      value: "PORTFOLIO",
      status: "public",
      type: "",
      link: "https://github.com/GGiunashvili/portfolio",
    },
    // {
    //   id: "5",
    //   label: "CORPORATION",
    //   value: "Colab",
    //   status: "public",
    //   type: "",
    // },
    // {
    //   id: "6",
    //   label: "CORPORATION",
    //   value: "Promotions",
    //   status: "public",
    //   type: "",
    // },
    // {
    //   id: "7",
    //   label: "CORPORATION",
    //   value: "GITHUB",
    //   status: "public",
    //   type: "",
    // },
  ];
  const { allowSound } = useSound();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleHover = () => {
    if (allowSound && audioRef.current) {
      audioRef.current.play(); // აუდიოს დაკვრა
    }
  };
  return (
    <div className="relative col-span-8 grid-cols-8 border md:border-l-0 border-[#FE010130] overflow-hidden text-xs flex flex-col">
      <div className="flex justify-center items-center col-span-8 border-b border-[#FE010130] py-[12px] px-[16px]">
        <p className="text-x text-red font-bold">TECH ODYSSEY</p>
      </div>
      <div className="col-span-8 relative  flex flex-col p-[24px]  sm:overflow-scroll sm:scrollbar-thin ">
        {" "}
        <div className="relative mb-[24px] sm:mb-[30px]">
          <p className="border border-[#FE010130] gap-x-[16px] py-[12px] px-[16px] font-bold texs-xs ">
            FILE XPLORER
          </p>
          <p className="text-xs text-red py-[12px] px-[16px] uppercase border border-b-0 border-t-0 border-[#FE010130] bg-black">
            LOCATION: /PROJECTS
          </p>

          <div className="grid grid-cols-8 flex-wrap gap-x-[10px]  text-xs text-red  p-[16px] pb-0 uppercase border border-[#FE010130] bg-black">
            {profileDetails.map((detail) => (
              <a
                key={detail.id}
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleHover}
                className="flex items-center mb-[16px] col-span-8 xl:col-span-4 hover:bg-hoverRed border border-transparent hover:border-[#FE010130]"
              >
                <audio ref={audioRef} src="/sound.mp3" preload="auto" />

                <div className="flex items-center justify-center bg-[#F7888838] w-[40px] md:w-[48px] h-[48px]">
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
                  <div className="flex items-center sm:flex-wrap md:flex-nowrap">
                    <div className="flex gap-[8px] flex-wrap ml-[8px]">
                      <p>{detail.value}</p>
                      <p className="text-xs">{detail.type}</p>
                    </div>
                    <p className="border border-[#FE010130] text-[#b2b7ba] rounded-full ml-[8px] text-xs p-[6px]">
                      {detail.status}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Svg top="-0.1rem" left="-0.1rem" />
          <Svg top="-0.1rem" right="-0.1rem" />
          <Svg bottom="-0.1rem" left="-0.1rem" />
          <Svg bottom="-0.1rem" right="-0.1rem" />
        </div>
        <div className="flex flex-col justify-between flex-wrap  flex-start mb-[16px]">
          <p className="mb-[16px] sm:mb-[20px] text-xs">PROFESSIONAL ROLES</p>
          {professionalRoles.map((profile, i) => {
            // Handle hover state
            const [hover, setHover] = useState(false);
            return (
              <a
                key={profile.id}
                href={profile.link}
                onMouseEnter={() => {
                  setHover(true);
                  handleHover();
                  setHoveredIndex(i);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  handleHover();
                  setHoveredIndex(i);
                }}
                style={{
                  transform:
                    hoveredIndex === i || (i === 0 && hoveredIndex === null)
                      ? "perspective(60rem) rotateX(10deg) translateY(0rem) translateZ(0rem)"
                      : "none",
                  transition: "transform 0.3s ease",
                }}
                className={`relative group hover:bg-hoverRed hover:border-black flex justify-between flex-col items-start border border-[#FE010130] mb-[20px] p-[16px] text-[10px] ${
                  (i === 0 && hoveredIndex === null) || hoveredIndex === i
                    ? "bg-hoverRed w-full border-none"
                    : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <audio ref={audioRef} src="/sound.mp3" preload="auto" />
                <div className="rotate-[-45deg] md:rotate-[-30deg] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="inline-block text-xs bg-red text-black px-[10px] ">
                    {profile.private}
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <p
                      className={`${
                        hoveredIndex === i || (i === 0 && hoveredIndex === null)
                          ? "text-red font-bold text-[10px]"
                          : "font-bold text-[#b2b7ba] group-hover:text-red text-[10px]"
                      }`}
                    >
                      {profile.label}
                    </p>
                    <p
                      className={`${
                        hoveredIndex === i || (i === 0 && hoveredIndex === null)
                          ? "text-[10px] text-[#b2b7ba] font-bold mb-[8px] group-hover:text-[#b2b7ba]"
                          : "text-[10px] text-red font-bold mb-[8px] group-hover:text-[#b2b7ba]"
                      }`}
                    >
                      {profile.value}
                    </p>
                  </div>

                  <p
                    className={`${
                      hoveredIndex === i || (i === 0 && hoveredIndex === null)
                        ? " text-[10px] text-[#b2b7ba] font-bold group-hover:text-[#b2b7ba]"
                        : "text-[10px] text-red font-bold group-hover:text-[#b2b7ba]"
                    }`}
                  >
                    {profile.year}
                  </p>
                </div>
                <div
                  className={`${
                    hoveredIndex === i || (i === 0 && hoveredIndex === null)
                      ? "text-red"
                      : "group-hover:text-red"
                  }`}
                >
                  {(Array.isArray(profile.type)
                    ? profile.type
                    : [profile.type]
                  ).map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <Svg top="-0.1rem" left="-0.1rem" />
                <Svg top="-0.1rem" right="-0.1rem" />
                <Svg bottom="-0.1rem" left="-0.1rem" />
                <Svg bottom="-0.1rem" right="-0.1rem" />
              </a>
            );
          })}
        </div>
      </div>
      <Svg top="-0.1rem" left="-0.1rem" className="md:hidden" />
      <Svg bottom="-0.1rem" left="-0.1rem" className="md:hidden" />

      <Svg top="-0.1rem" right="-0.1rem" />
      <Svg bottom="-0.1rem" right="-0.1rem" />

      <div
        onMouseEnter={handleHover}
        className="absolute bottom-0 left-0 w-full bg-black flex justify-center items-center col-span-8 border-t border-[#FE010130] py-[12px] px-[16px] z-[9999]"
      >
        <p className="text-xs text-red font-bold">CREATIONS</p>
        <audio ref={audioRef} src="/sound.mp3" preload="auto" />
        <Svg bottom="-0.1rem" left="-0.1rem" className="md:hidden" />

        <Svg bottom="-0.1rem" right="-0.1rem" />
      </div>
    </div>
  );
}
