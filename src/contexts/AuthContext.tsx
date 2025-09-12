// src/contexts/AuthContext.tsx
"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

type User = {
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  signUp: (email: string, password: string, name?: string) => boolean;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Simulação de banco de dados local
  // Armazena usuários cadastrados
  const getStoredUsers = (): {
    email: string;
    password: string;
    name?: string;
  }[] => {
    return JSON.parse(localStorage.getItem("users") || "[]");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveStoredUsers = (users: any[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const signUp = (email: string, password: string, name?: string) => {
    const users = getStoredUsers();

    // Verifica se já existe
    if (users.some((u) => u.email === email)) {
      throw new Error("Este email já está cadastrado!");
      return false;
    }

    const newUser = { email, password, name };
    saveStoredUsers([...users, newUser]);
    setUser({ email, name });
    localStorage.setItem("user", JSON.stringify({ email, name }));
    return true;
  };

  const signIn = (email: string, password: string) => {
    const users = getStoredUsers();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error("Email ou senha inválidos!");
      return false;
    }

    setUser({ email: foundUser.email, name: foundUser.name });
    localStorage.setItem(
      "user",
      JSON.stringify({ email: foundUser.email, name: foundUser.name })
    );
    return true;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
