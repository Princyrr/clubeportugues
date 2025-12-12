import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, Award, Heart, Target } from 'lucide-react';
import Diretoria from "../components/Diretoria";

// 🔥 importa todas as imagens do assets
import quemsomos from "../assets/quemsomos.png";
import quemsomos1 from "../assets/quemsomos1.jpg";
import quemsomos2 from "../assets/quemsomos2.jpg";
import quemsomos3 from "../assets/quemsomos3.jpg";
import quemsomos4 from "../assets/quemsomos4.jpg";
import quemsomos5 from "../assets/quemsomos5.jpg";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import piscina from "../assets/piscina.jpg";

const About = () => {
  const milestones = [
    { year: '1934', event: 'Fundação do Clube Português do Recife' },
    { year: '1953', event: 'Implantação da equipe de hóquei sobre patins (pioneiro em Pernambuco)' },
    { year: '1960', event: 'Criação da equipe de handebol, que se tornaria referência nacional' },
    { year: '1980', event: 'Reforma e modernização das instalações' },
    { year: '2014', event: 'Comemoração solene dos 80 anos na Assembleia Legislativa' },
    { year: '2024', event: 'Reconhecimento como Patrimônio Cultural Imaterial do Recife' },
     { year: '2025', event: '91 anos do Clube Português do Recife' }
  ];

  const values = [
    { icon: Trophy, title: 'Excelência', description: 'Buscamos sempre o mais alto padrão em tudo que fazemos' },
    { icon: Users, title: 'Comunidade', description: 'Valorizamos o espírito de união e pertencimento' },
    { icon: Heart, title: 'Tradição', description: 'Preservamos nossa história e cultura portuguesa' },
    { icon: Target, title: 'Inovação', description: 'Modernizamos constantemente nossos serviços' }
  ];

  // --- Slideshow de imagens ---
  const images = [banner1, banner2, piscina, quemsomos, quemsomos1, quemsomos2, quemsomos3, quemsomos4, quemsomos5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-12 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossa <span className="text-yellow-400">História</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Mais de um século preservando a cultura portuguesa e promovendo o esporte no coração do Recife
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Uma tradição que atravessa gerações</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  O Clube Português do Recife é uma tradicional agremiação social, esportiva e cultural localizada na cidade do Recife, em Pernambuco, Brasil. Fundado em 1934, o clube tem uma forte ligação com a comunidade de imigrantes portugueses que se estabeleceram na região.
                </p>
                <p>
                  O Clube Português é conhecido por promover eventos culturais, festas típicas portuguesas, e atividades esportivas, sendo um ponto de encontro para descendentes de portugueses e para aqueles interessados na cultura lusitana.
                </p>
                <p>
                  Além de suas atividades culturais, o Clube Português do Recife também tem uma importante atuação no esporte, especialmente no Handebol, Hóquei e Natação. A sede do clube conta com diversas instalações, incluindo campos de futebol, salões de festa, e áreas de lazer, sendo um espaço valorizado na cidade para eventos sociais e esportivos.
                </p>
              </div>
            </motion.div>

            {/* Slideshow de imagens */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[480px]">
                <AnimatePresence>
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Clube Português"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                </AnimatePresence>
              </div>
              <div className="absolute bottom-6 right-4 md:bottom-0 md:right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-4 md:p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 md:w-8 md:h-8" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">91+</div>
                    <div className="text-xs md:text-sm font-medium">Anos de História</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Marcos da Nossa <span className="text-green-800">Trajetória</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Momentos importantes que moldaram nossa história
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-600 to-red-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-green-800 mb-2">{milestone.year}</div>
                      <p className="text-gray-600 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Diretoria />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-red-800">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam todas as nossas ações e decisões
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-green-600 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300 transform group-hover:scale-110">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
