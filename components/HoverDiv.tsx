import React, { ReactNode } from "react";

interface HoverDivProps {
  children: ReactNode;
}

const HoverDiv: React.FC<HoverDivProps> = ({ children }) => {
  return (
    <div
      onMouseEnter={() => {
        // ამ დროს შეიძლება აუდიო ან სხვა რამ განხორციელდეს
      }}
      onMouseLeave={() => {
        // ამ დროს შესაძლებელია სხვა მოქმედება
      }}
      className="hover:bg-[#D9363642] border border-transparent hover:border-[#FE010130]"
    >
      {children}
    </div>
  );
};

export default HoverDiv;
