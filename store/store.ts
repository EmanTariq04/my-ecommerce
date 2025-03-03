import { create } from "zustand";
import { Product } from "@/sanity.types";
import { persist } from 'zustand/middleware'

export interface BasketItem {
  product: Product;
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItems: () => BasketItem[];
}


const useBasketStore = create<BasketState>(){
    persist(
        (set, get) => {{
            items: [],
            addItem: (product) => set((state) => {
                const exisitngItem = state.items.find(item => item.product._id === product._id)
                if (exisitngItem) {
                    return {
                        items: state.items.map(item => item.product._id === product._id ? { ...item, quantity: item.quantity + 1}
                            : item
                        )
                    }
                } else {
                    return { items: [...state.items, { product, quantity: 1 }]}
                }
            })
        }},
        {
            name: "basket-store"
        }
    )
}