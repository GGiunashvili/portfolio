"use client";

import { useState } from "react";
import useTransformStore from "stores/useTransformStore";
const PopupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toggleTransform } = useTransformStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, message };

    const response = await fetch("http://localhost:5000/send-email", {
      // Local backend API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <>
      {/* <div className="w-full h-full flex justify-center items-center text-xl">
        <div className="w-full flex flex-col">
          <form
            className="w-full flex flex-col mb-[12px]"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-xs font-bold text-red bg-black p-[10px] mb-[8px]"
              >
                HOW SHOULD I CALL YOU?
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="YOUR NAME"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-[#b2b7ba] bg-black h-[48px] text-xs"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-red bg-black p-[10px] mb-[8px]"
              >
                SENDING FROM
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="YOUR.NAME@EXAMPLE.COM"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-[#b2b7ba] bg-black h-[48px] text-xs"
                required
              />
            </div>

            <label
              htmlFor="message"
              className="block text-xs font-bold text-red bg-black p-[10px] mb-[8px]"
            >
              TRANSMITTED DATA
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="HI, I WRITE YOU ABOUT ..."
              className="flex w-full p-2 border border-[#b2b7ba] h-[150px] bg-black text-xs"
              required
            />

            {isSuccess && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
          </form>

          <div className="flex gap-[12px]">
            <button
              onClick={toggleTransform}
              className="w-full flex justify-center items-center text-black bg-red text-[10px] font-bold p-[6px]"
            >
              esc
            </button>
            <button
              onClick={toggleTransform}
              className="w-full flex justify-center items-center text-black bg-red text-[10px] font-bold p-[6px]"
            >
              esc
            </button>
          </div>
        </div>
      </div> */}
      <button
        onClick={toggleTransform}
        className="absolute top-[0px] right-[30px] sm:right-[40px] text-[60px] text-red font-rubik-glitch"
      >
        x
      </button>
    </>
  );
};

export default PopupForm;
