import React from "react";
import { ProductCard } from "../productCard";
import { IProduct } from "../productCard/types";
import { ProductGridProps } from "./props";

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-[repeat(auto-fit, minmax(250px, 1fr))]
      gap-6
      p-4
      mt-8"
    >
      {products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}