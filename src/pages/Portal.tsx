import React from 'react';

const Portal = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <a
        href="https://portal.multiclubes.com.br/clubeportuguesrecife/login.aspx?ReturnUrl=%2fclubeportuguesrecife%2f"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white font-bold text-xl px-8 py-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
      >
        Acessar Portal do Sócio
      </a>
    </div>
  );
};

export default Portal;
