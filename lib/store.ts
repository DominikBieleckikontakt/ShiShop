import { create } from "zustand";

type arrayIndex = {
  index: number;
  changeIndex: (currentIndex: number) => void;
};

export type cartItem = {
  id: bigint;
  name: string;
  price: number;
  amount: number;
  summedPrice: number;
};

type cartStoreType = {
  items: cartItem[];
  totalPrice: number;
  totalAmount: number;
  setCart: (
    currentItems: cartItem[],
    quantity: number,
    totalPrice: number
  ) => void;
};

export const useOptionsStore = create<arrayIndex>((set) => ({
  index: 0,
  changeIndex: (currentIndex) => {
    set(() => ({ index: currentIndex }));
  },
}));

export const useCartStore = create<cartStoreType>((set) => ({
  items: [],
  totalPrice: 0,
  totalAmount: 0,
  setCart: (currentItems, quantity, price) => {
    set(() => ({
      items: currentItems,
      totalAmount: quantity,
      totalPrice: price,
    }));
  },
}));
