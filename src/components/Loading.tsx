import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // ajuste o caminho se necessário

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-red-800"></div>

      {/* Círculo giratório */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className="relative w-40 h-40 rounded-full border-8 border-t-green-600 border-r-red-600 border-b-yellow-400 border-l-blue-600 flex items-center justify-center"
      >
        {/* Logo pulsando */}
        <motion.img
          src={logo}
          alt="Logo"
          className="w-20 h-20 object-contain"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;
