import { create } from "zustand";

type arrayIndex = {
  index: number;
  changeIndex: (currentIndex: number) => void;
};

export const useOptionsStore = create<arrayIndex>((set) => ({
  index: 0,
  changeIndex: (currentIndex) => {
    set(() => ({ index: currentIndex }));
  },
}));
