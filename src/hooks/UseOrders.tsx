"use client";

import { OrdersContext } from "@/contexts/OrdersContext";
import { useContext } from "react";

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context)
    throw new Error("useOrders deve ser usado dentro de OrdersProvider");
  return context;
};
