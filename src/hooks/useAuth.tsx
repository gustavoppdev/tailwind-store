"use client";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

// Hook para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
