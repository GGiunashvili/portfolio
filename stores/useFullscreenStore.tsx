import { create } from "zustand";

interface FullscreenStore {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

const useFullscreenStore = create<FullscreenStore>((set) => ({
  isFullscreen: false,
  toggleFullscreen: () => {
    const element = document.documentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => set({ isFullscreen: false }));
    } else {
      element.requestFullscreen().then(() => set({ isFullscreen: true }));
    }
  },
}));

export default useFullscreenStore;
