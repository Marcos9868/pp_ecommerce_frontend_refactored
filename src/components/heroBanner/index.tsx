"use client"
import 'keen-slider/keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import React from "react";
import { HeroProps } from './props';
import Image from 'next/image';

export const Hero: React.FC<HeroProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    }
  });
  return (
    <div ref={sliderRef} className='keen-slider w-full h-[400px] overflow-hidden'>
      {products.map((product) => (
        <div
          key={product.id}
          className='keen-slider__slide flex items-center justify-center bg-gray-100'
        >
          <a 
            href={product.link}
            className='relative w-full h-[600px]'
          >
            <Image 
              src={product.imageUrl}
              alt={product.title}
              fill
              className='object-cover rounded-b-xl'
              priority
            />
              <div className='absolute bottom-0 left-0 w-full bg-black/50 text-white p-4'
              >
                <h2
                  className='text-lg font-semibold'
                >
                  {product.title}
                </h2>
              </div>
          </a>
        </div>
      ))}
    </div>
  );
}