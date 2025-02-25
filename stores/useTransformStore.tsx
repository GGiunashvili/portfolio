import { create } from "zustand";

interface TransformStore {
  isTransformed: boolean;
  toggleTransform: () => void;
}

const useTransformStore = create<TransformStore>((set, get) => ({
  isTransformed: false,
  toggleTransform: () => {
    const transformed = get().isTransformed;
    const body = document.getElementById("root") as HTMLBodyElement;
    const modal = document.getElementById("modal") as HTMLDivElement;

    if (body && modal) {
      body.style.transition = "transform 0.5s ease, background-color 0.5s ease";

      if (!transformed) {
        body.style.transform =
          "perspective(75rem) rotateX(25deg) translateY(-6.2rem) translateZ(-4rem)";
        body.classList.add("bg-red-100", "text-black!important");
        modal.classList.remove("hidden");
      } else {
        body.style.transform = "";
        body.classList.remove("bg-red-100", "text-black!important");
        modal.classList.add("hidden");
      }
    }

    set({ isTransformed: !transformed });
  },
}));

export default useTransformStore;
