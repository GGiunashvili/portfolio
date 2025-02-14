"use client";

import { useState } from "react";

const PopupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
      <div className="w-full h-full flex justify-center items-center text-xl">
        <div className="w-full flex flex-col">
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-red bg-black p-[10px] mb-[8px]"
              >
                HOW SHOULD I CALL YOU?
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-[#b2b7ba] bg-black h-[48px]"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-bold text-red bg-black p-[10px] mb-[8px]"
              >
                SENDING FROM
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-[#b2b7ba] bg-black h-[48px]"
                required
              />
            </div>

            <label
              htmlFor="message"
              className="block text-lg font-bold text-red bg-black p-[10px] mb-[8px]"
            >
              TRANSMITTED DATA
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex w-full p-2 border border-[#b2b7ba] h-[150px] bg-black"
              required
            />

            {isSuccess && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default PopupForm;
