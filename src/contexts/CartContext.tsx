// src/contexts/CartContext.tsx
"use client";

import { CartItem, ColorsKey, LocalizedString, Product } from "@/data/types";
import { createContext, useState, useEffect, ReactNode } from "react";

type CartContextType = {
  items: CartItem[];
  addItem: (
    product: Product,
    quantity: number,
    color: ColorsKey,
    size: LocalizedString
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: { brl: number; usd: number };
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Carregar carrinho do localStorage ao iniciar
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Erro ao carregar o carrinho do localStorage:", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);
  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("cart", JSON.stringify(items));
      } catch (error) {
        console.error("Erro ao salvar carrinho no localStorage:", error);
      }
    }
  }, [items, isInitialized]);

  const addItem = (
    product: Product,
    quantity: number = 1,
    color: ColorsKey,
    size: LocalizedString
  ) => {
    const uniqueId = `${product.id}-${color || "default"}-${
      size ? size.en : "default"
    }`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === uniqueId);

      if (existing) {
        // já existe no carrinho → só atualiza quantidade
        return prev.map((item) =>
          item.id === uniqueId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // novo item
      return [
        ...prev,
        {
          id: uniqueId,
          product,
          quantity,
          selectedColor: color,
          selectedSize: size,
        },
      ];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  // calculando total
  const subtotal = items.reduce(
    (acc, item) => {
      acc.brl += item.product.price.brl * item.quantity;
      acc.usd += item.product.price.usd * item.quantity;
      return acc;
    },
    { brl: 0, usd: 0 }
  );

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
