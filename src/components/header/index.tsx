'use client';

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full h-[130px] bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-800">Minha Loja</div>
      <nav className="flex gap-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Produtos</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contato</a>
      </nav>
    </header>
  );
};
