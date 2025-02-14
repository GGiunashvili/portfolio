"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current!.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none transition-transform duration-100 ease-out "
      style={{ zIndex: 9999 }}
    >
      <Image
        src="/crs.svg"
        alt="Custom Cursor"
        width={50}
        height={50}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

export default CustomCursor;
