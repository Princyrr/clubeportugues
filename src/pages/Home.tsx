import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Calendar, Utensils } from 'lucide-react';
import HeroCarousel from "../components/HeroCarousel";
// Importando imagens do assets
import noticia7 from '../assets/noticia7.png';
import noticia2 from '../assets/noticia2.jpg';
import noticia9 from '../assets/noticia9.jpg';
import noticia8 from '../assets/noticia8.png';


// Banners do slideshow
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const Home = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Tradição Esportiva',
      description: 'Mais de 90 anos de história no esporte pernambucano',
      link: '/quem-somos'
    },
    {
      icon: Utensils,
      title: 'Gastronomia Especial',
      description: 'Restaurante com pratos típicos portugueses e brasileiros',
      link: '/servicos/restaurante'
    },
    {
      icon: Users,
      title: 'Vida Social',
      description: 'Eventos exclusivos e encontros para toda a família',
      link: '/servicos/agenda-shows'
    },
    {
      icon: Calendar,
      title: 'Programação Rica',
      description: 'Shows, festivais e atividades durante todo o ano',
      link: '/servicos/agenda-shows'
    }
  ];

  const noticias = [
    {
      img: noticia7,
      title: 'Handebol Feminino',
      description: 'Lusas do juvenil partem para o desafio do Campeonato Brasileiro 2025 que acontecerá na cidade de Balneário Camboriú-SC.',
    },
    {
      img: noticia2,
      title: 'Técnica Convocada',
      description: 'Treinadora do Clube Português do Recife, Keycy Florêncio, foi convocada para integrar a Seleção Brasileira de Natação.',
    },
    {
      img: noticia9,
      title: 'Bar Barcelos temporariamente fechado',
      description: 'Vem novidade boa por aí, com nova administração e muitas surpresas! Aguardem!!!',
    },
    {
      img: noticia8,
      title: 'Copa Pacífico de Natação',
      description: 'Pernambucanas convocadas para representar o Brasil na Copa Pacífico de Natação.',
    }
  ];

  // Slideshow state
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // troca a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-green-800 via-green-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banners[currentIndex]})` }}
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Clube Português
                <span className="text-yellow-400 block">do Recife</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Há 90 anos promovendo tradição, cultura e esporte. Venha fazer parte da nossa história.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quem-somos"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Conheça Nossa História
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/servicos/restaurante"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105"
                >
                  Entre em Contato
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notícias Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Últimas <span className="text-green-800">Notícias</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fique por dentro de tudo o que acontece no Clube Português do Recife
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {noticias.map((noticia, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full min-h-[400px] group overflow-hidden"
              >
                <img
                  src={noticia.img}
                  alt={noticia.title}
                  className="w-full h-80 sm:h-60 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{noticia.title}</h3>
                  <p className="text-gray-700 flex-grow mb-6">{noticia.description}</p>
                  <Link
                    to="/servicos/noticias"
                    className="mt-auto inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-all duration-300 text-center"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<HeroCarousel />
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher o <span className="text-green-800">Clube Português</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais que um clube, somos uma família que preserva tradições e cria novas memórias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={feature.link} className="block h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para fazer parte da nossa família?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como se tornar um sócio do clube mais tradicional do Recife
            </p>
            <Link
              to="/fale-conosco"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
