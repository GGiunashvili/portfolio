import React, { createContext, useContext, useState, ReactNode } from "react";

interface SoundContextType {
  allowSound: boolean;
  setAllowSound: (value: boolean) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [allowSound, setAllowSound] = useState(false);

  return (
    <SoundContext.Provider value={{ allowSound, setAllowSound }}>
      {children}
    </SoundContext.Provider>
  );
};

// Custom hook to use sound context
export const useSound = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};
