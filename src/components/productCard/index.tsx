'use client'
import React from "react";
import { ProductCardProps } from "./props";
import Image from "next/image";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={400}
        className="object-cover w-full h-64"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center gap-2">
          {product.discount > 0 && (
            <>
              <span className="text-gray-500 line-through text-sm">R$ {product.price.toFixed(2)}</span>
              <span className="text-green-600 font-bold">R$ {discountedPrice}</span>
            </>
          )}
          {product.discount === 0 && (
            <span className="text-black font-bold">R$ {product.price.toFixed(2)}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {product.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="p-1 flex justify-center items-center">
          <button
            className="w-[400px] h-8 rounded-xl bg-green-600 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}