"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import type { ProductsContextProps } from "@/shared/interfaces";
import type { ProductType } from "@/shared/types";
import useCategories from "../hooks/useCategories";

export const ProductsContext = createContext<ProductsContextProps>({} as any);

export const ProductsProvider = (props: any) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { selectedCategory } = useCategories();

  const filteredProducts = useMemo(
    () =>
      selectedCategory
        ? products.filter(
          (product: ProductType) => product.categoryId === selectedCategory,
        )
        : products,
    [selectedCategory, products],
  );

  return (
    <ProductsContext.Provider value={{ products: filteredProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
