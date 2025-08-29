import React from 'react'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Calendar, Utensils } from 'lucide-react';

// Importando imagens do assets
import noticia1 from '../assets/noticia1.jpg';
import noticia2 from '../assets/noticia2.jpg';
import noticia3 from '../assets/noticia5.png';
import noticia4 from '../assets/noticia4.png';
import frente from '../assets/frente.jpg';

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
      img: noticia1,
      title: 'Eleições',
      description: 'No dia 25 de agosto de 2025, o Clube Português do Recife realizou a eleição que definiu seu novo Presidente e Vice-Presidente.',
    },
    {
      img: noticia2,
      title: 'Adega Restaurante',
      description: 'No Adega Restaurante você encontra o equilíbrio perfeito entre tradição, sabor e um ambiente acolhedor.',
    },
    {
      img: noticia3,
      title: 'Handebol Feminino',
      description: 'Atletas do clube conquistaram títulos importantes em competições nacionais.',
    },
    {
      img: noticia4,
      title: 'Agenda Cultural',
      description: 'Shows, peças teatrais e festivais movimentaram o calendário do clube.',
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-green-800 via-green-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${frente})` }}
        />
        
        <div className="relative z-10 h-full flex items-center">
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
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[400px]"
              >
                <img
                  src={noticia.img}
                  alt={noticia.title}
                  className="w-full h-52 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
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
