import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Calendar, Utensils } from 'lucide-react';
import HeroCarousel from "../components/HeroCarousel";
import NoticiasSection from "../components/NoticiasSection";
import CtaSection from "../components/CtaSection";
import ContactForm from "../components/ContactForm";
import piscina from '../assets/piscina.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Banners do slideshow
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';


const Home = () => {
  const featuresRef = useRef(null);

  const features = [
    { icon: Trophy, title: 'Tradição Esportiva', description: 'Mais de 90 anos de história no esporte pernambucano', link: '/quem-somos' },
    { icon: Utensils, title: 'Gastronomia Especial', description: 'Restaurante com pratos típicos portugueses e brasileiros', link: '/servicos/restaurante' },
    { icon: Users, title: 'Vida Social', description: 'Eventos exclusivos e encontros para toda a família', link: '/servicos/agenda-shows' },
    { icon: Calendar, title: 'Programação Rica', description: 'Shows, festivais e atividades durante todo o ano', link: '/servicos/agenda-shows' }
  ];

  // 🌀 Efeito Parallax otimizado
  useEffect(() => {
    const el = featuresRef.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;

    // Define posição inicial estável no mobile
    gsap.set(el, { backgroundPosition: "50% 0%" });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        backgroundPosition: isMobile ? "50% 30%" : "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: isMobile ? 0.2 : true, // movimento mais suave no mobile
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // 🖼️ Slideshow dos banners
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="pt-12 md:pt-24">
  <section className="relative h-[70vh] md:h-[80vh] bg-gradient-to-r from-green-800 via-green-700 to-red-800 overflow-hidden">
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
                  to="/fale-conosco"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105"
                >
                  Entre em Contato
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notícias e Carrossel */}
      <NoticiasSection />
      <HeroCarousel />

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 min-h-[80vh] overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${piscina})`,
          backgroundPosition: "50% 0%",
          willChange: "background-position",
        }}
      >
        <div className="bg-black/40 absolute inset-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher o <span className="text-green-300">Clube Português</span>?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Mais que um clube, somos uma família que preserva tradições e cria novas memórias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const fromX = index % 2 === 0 ? -100 : 100;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: fromX, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={feature.link} className="block h-full">
                    <div className="bg-white bg-opacity-80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <CtaSection />
     {/*eventos*/}

    <ContactForm />
    </div>
  );
};

export default Home;
