"use client";
import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function CopyInfo() {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText("giorgi99.giunashvili@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // აიკონის დაბრუნება ორ წამში
      })
      .catch((err) => console.error("Error copying text: ", err));
  };
  return (
    <button
      onClick={handleCopy}
      className="flex justify-center items-center gap-[8px]  text-2xl  cursor-pointer h-[24px] text-red"
    >
      <span className="ml-2 font-rubik-glitch">
        giorgi99.giunashvili@gmail.com
      </span>

      {isCopied ? (
        <span>Copied!</span>
      ) : (
        <ClipboardDocumentIcon className="w-[24px] h-[24px]" />
      )}
    </button>
  );
}
