"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Product, ProductCategory, ColorsKey } from "@/data/types";

/**
 * Tipagem para os filtros disponíveis
 */
export type ProductFilters = {
  search?: string; // texto digitado na barra de busca
  categories: ProductCategory[]; // categorias selecionadas
  colors: ColorsKey[]; // cores selecionadas
};

/**
 * Hook para sincronizar filtros com a URL
 */
export function useProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Converte os searchParams da URL para objeto de filtros
   */
  const filters: ProductFilters = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());

    return {
      search: params.get("search") || undefined,
      categories: params.get("categories")
        ? (params.get("categories")!.split(",") as ProductCategory[])
        : [], // default []
      colors: params.get("colors")
        ? (params.get("colors")!.split(",") as ColorsKey[])
        : [], // default []
    };
  }, [searchParams]);

  /**
   * Atualiza os filtros na URL
   * - Remove params vazios (não deixa lixo na URL)
   * - Garante consistência
   */
  const setFilters = useCallback(
    (newFilters: ProductFilters) => {
      const params = new URLSearchParams();

      if (newFilters.search?.trim()) {
        params.set("search", newFilters.search.trim());
      }

      if (newFilters.categories?.length) {
        params.set("categories", newFilters.categories.join(","));
      }

      if (newFilters.colors?.length) {
        params.set("colors", newFilters.colors.join(","));
      }

      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname);
    },
    [pathname, router]
  );

  const clearAll = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [pathname, router]);

  return { filters, setFilters, clearAll };
}

/**
 * Função pura que aplica os filtros sobre os produtos
 */
export function filterProducts(products: Product[], filters: ProductFilters) {
  return products.filter((product) => {
    const { search, categories, colors } = filters;

    // 🔎 Filtro por texto (nome ou descrição multilíngue)
    if (
      search &&
      !product.name.en.toLowerCase().includes(search.toLowerCase()) &&
      !product.name.pt.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    // 🏷️ Filtro por categoria
    if (categories?.length && !categories.includes(product.category)) {
      return false;
    }

    // 🎨 Filtro por cores disponíveis
    if (
      colors?.length &&
      !colors.some((c) => product.colorsAvailable.includes(c))
    ) {
      return false;
    }

    return true;
  });
}
