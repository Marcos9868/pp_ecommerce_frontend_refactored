'use client';

import React, { useState } from 'react';
import { ShoppingCart, LogIn } from 'lucide-react';
import { LoginModal } from '../loginModal';

export const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <header className="w-full h-[100px] bg-white shadow-md px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          Minha Loja
        </div>
        <div>
          <nav className="hidden md:flex gap-4 mr-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Produtos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contato</a>
          </nav>
        </div>

        {/* Barra de Pesquisa */}
        <div className="flex-1 max-w-md w-full">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Navegação + Ações */}
        <div className="flex gap-4 items-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            <ShoppingCart size={20} />
            Carrinho
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
            <LogIn size={20} />
            Login
          </button>
        </div>
      </header>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)}/>
    </>
  );
};

