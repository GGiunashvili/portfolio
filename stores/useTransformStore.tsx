import { create } from "zustand";

interface TransformStore {
  isTransformed: boolean;
  toggleTransform: () => void;
}

const useTransformStore = create<TransformStore>((set, get) => ({
  isTransformed: false,
  toggleTransform: () => {
    const transformed = get().isTransformed;
    const parent = document.querySelector("body") as HTMLBodyElement;

    const body = document.getElementById("root") as HTMLBodyElement;
    const modal = document.getElementById("modal") as HTMLDivElement;

    if (body && modal) {
      body.style.transition = "transform 0.9s ease, background-color 0.5s ease";

      if (!transformed) {
        body.style.transform =
          "perspective(75rem) rotateX(25deg) translateY(-6.2rem) translateZ(-4rem)";
        body.style.overflow = "hidden";
        body.classList.add("bg-red-100", "text-black!important");
        modal.classList.remove("hidden");

        body.style.opacity = "0.3"; // Example of adding overflow style

        parent.style.overflow = "hidden"; // Example of adding overflow style
      } else {
        parent.style.overflow = "scroll"; // Example of adding overflow style
        body.style.opacity = "1"; // Example of adding overflow style

        body.style.transform = "";
        body.classList.remove("bg-red-100", "text-black!important");
        modal.classList.add("hidden");
      }
    }

    set({ isTransformed: !transformed });
  },
}));

export default useTransformStore;
