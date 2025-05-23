import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Glitch, Audiowide } from "next/font/google";
import "./globals.css";
import PopupForm from "../components/PopupForm";
import CustomCursor from "../components/CustomCursor";
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
      <body
        style={{
          fontFamily: `${geistSans.style.fontFamily}, ${geistMono.style.fontFamily}, ${rubikGlitch.style.fontFamily}`,
        }}
        className="antialiased bg-black "
      >
        <div id="root" className="font-Audiowide text-[12px] ">
          <CustomCursor />

          {children}
        </div>
      </body>
    </html>
  );
}
