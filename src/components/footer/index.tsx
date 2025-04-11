import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-center py-6 mt-10 border-none">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
    </footer>
  );
};