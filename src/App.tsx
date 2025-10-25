import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portal from './pages/Portal';
import Restaurant from './pages/services/Restaurant';
import Cellar from './pages/services/Cellar';
import Barcelos from './pages/services/Barcelos';
import Events from './pages/services/Events';
import News from './pages/services/News';
import NewsDetail from './pages/services/NewsDetail';
import Diretoria from './components/Diretoria';
import logo from './assets/logo.png';


const Loading: React.FC = () => {
  const dots = ['.', '.', '.'];
  return (
   <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-red-800"></div>

      {/* Contêiner relativo do círculo */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Círculo giratório */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-8 border-t-green-600 border-r-red-600 border-b-yellow-400 border-l-green-600"
        />

        {/* Logo pulsando no centro (fora do motion do círculo) */}
        <motion.img
          src={logo}
          alt="Logo"
          className="w-20 h-20 object-contain z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Texto Loading com pontinhos */}
      <motion.div
        className="mt-8 text-white text-xl font-bold flex items-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
      >
        Loading
        {dots.map((dot, i) => (
          <motion.span
            key={i}
            className="ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 1.5,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          >
            {dot}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};


const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s de loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/quem-somos" element={<About />} />
                  <Route path="/fale-conosco" element={<Contact />} />
                  <Route path="/portal" element={<Portal />} />
                  <Route path="/servicos/restaurante" element={<Restaurant />} />
                  <Route path="/servicos/servicos" element={<Cellar />} />
                  <Route path="/servicos/barcelos" element={<Barcelos />} />
                  <Route path="/servicos/agenda-shows" element={<Events />} />
                  <Route path="/servicos/noticias" element={<News />} />
                  <Route path="/servicos/noticias/:id" element={<NewsDetail />} />
                  <Route path="/diretoria" element={<Diretoria />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
