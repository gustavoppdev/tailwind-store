import { colorsArray } from "@/data/constants";
import { ColorsKey, LocalizedPrice, ProductCategory } from "@/data/types";
import { clsx, type ClassValue } from "clsx";
import { useFormatter } from "next-intl";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retorna o objeto de cor completo (incluindo nome e classe)
 * para a chave e o locale especificados.
 */
export function getColorData(key: ColorsKey, locale: "pt" | "en") {
  const color = colorsArray.find((c) => c.key === key);

  if (color) {
    return {
      name: color.name[locale],
      className: color.className,
    };
  }

  // Retorna um valor padrão ou lança um erro se a cor não for encontrada
  return null;
}

// Exemplo de uso
// const selectedColor = getColorData("black", "pt");
// selectedColor.name -> "Preto"
// selectedColor.className -> "bg-black text-white"

const CATEGORY_KEYS: Record<ProductCategory, string> = {
  desk_and_office: "Pages.Home.Collections.categories.0.title",
  self_improvement: "Pages.Home.Collections.categories.1.title",
  travel: "Pages.Home.Collections.categories.2.title",
};

export function getCategoryName(category: ProductCategory) {
  return CATEGORY_KEYS[category];
}

// Hook personalizado para formatação de preço
export function useFormat({
  number,
  locale,
  isLocalized,
}: {
  number: number | LocalizedPrice;
  locale: "pt" | "en";
  isLocalized: boolean;
}) {
  const format = useFormatter();

  // 1. Defina a moeda e o valor a serem formatados antes da chamada do hook
  const currency = locale === "pt" ? "brl" : "usd";
  const valueToFormat = isLocalized
    ? (number as LocalizedPrice)[currency]
    : (number as number);

  // 2. Adicione uma verificação de segurança para garantir que o valor seja um número
  if (typeof valueToFormat !== "number") {
    // Retorne um valor padrão ou lance um erro se o valor for inválido
    console.error("Valor inválido fornecido para o formatador.");
    return ""; // ou `null`, `0`, etc.
  }

  // 3. Retorne o número formatado
  return format.number(valueToFormat, {
    style: "currency",
    currency: currency,
  });
}

export function formatOrderDate(
  isoDateString: string,
  locale: "pt" | "en"
): string {
  // Converte a string ISO em um objeto Date
  const date = new Date(isoDateString);

  // Define as opções de formatação
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric", // Ex: 2025
    month: "long", // Ex: June / junho
    day: "numeric", // Ex: 26
  };

  // Cria um formatador de data e formata a data
  return new Intl.DateTimeFormat(locale, options).format(date);
}
