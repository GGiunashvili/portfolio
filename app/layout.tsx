import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Glitch, Audiowide } from "next/font/google";
import "./globals.css";
import PopupForm from "../components/PopupForm";
import CustomCursor from "../components/CustomCursor";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  subsets: ["latin"],
  weight: "400", // დაამატე სიმძლავრე
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: "400", // დაამატე სიმძლავრე
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400", // დაამატე სიმძლავრე
});
const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400", // დაამატე სიმძლავრე
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black flex items-center justify-center sm:h-screen">
        <CustomCursor />
        <div id="root" className="font-Audiowide text-[12px] max-w-[1920px]">
          {children}
        </div>
        <div
          id="modal"
          className=" hidden flex-col justify-center overflow-hidden fixed right-0 left-0 bottom-0 top-0 m-auto bg-black sm:bg-[#00000096] rounded-[8px] h-screen sm:h-fit w-[90%] z-[999]  p-[20px] border border-[#b2b7ba]"
        >
          <p className="font-bold text-red text-xl mb-[8px] font-rubik-glitch">
            CONNECT WITH ME
          </p>
          <p className="font-bold text-white text-xs mb-[16px]">
            WANNA CHAT? OR JUST SHARE SOMETHING COOL?
          </p>
          <div className="text-red text-xs font-bold border border-red p-[20px] bg-hoverRed mb-[24px] sm:w-[500px]">
            <PopupForm />
          </div>
        </div>
        <GoogleAnalytics gaId="G-N3JBQYZ1TW" />
      </body>
    </html>
  );
}
