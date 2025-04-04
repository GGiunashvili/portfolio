"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current!.style.left = `${e.clientX}px`;
          cursorRef.current!.style.top = `${e.clientY}px`;
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none"
      style={{
        width: "50px",
        height: "50px",
        // backgroundColor: isHovered ? "rgba(255, 0, 0, 0.5)" : "transparent", // Hover-ზე წითელი background

        // transform: isHovered
        //   ? "perspective(25rem) rotateX(30deg) translateX(-2rem) translateZ(2em) "
        //   : "translate(1%, -1%) rotateX(0deg)",
        transition: "transform 0.3s ease-out",
        zIndex: 99999,
        willChange: "transform",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        // backgroundColor: "red",
      }}
    >
      <Image
        src="/crs.svg"
        alt="Custom Cursor"
        width={30}
        height={30}
        className="w-[30px] h-[30px] hidden md:flex"
      />
    </div>
  );
};

export default CustomCursor;
