import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Clock } from 'lucide-react';

const Cellar = () => {
  const activities = [
    {
      name: "Escolinha de Natação (Prof.ª Carla)",
      image: import.meta.env.BASE_URL + "natacao.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Escolinha de Natação (Prof.ª Keycy)",
      image: import.meta.env.BASE_URL + "natacao1.jpeg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Escolinha de Natação e Hidroginástica (Prof. Fernando)",
      image: import.meta.env.BASE_URL + "natacao2.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Natação e Hidroginástica (Prof.ª Regina)",
      image: import.meta.env.BASE_URL + "natacao3.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Natação Master (Prof. Domingos)",
      image: import.meta.env.BASE_URL + "natacao4.jpeg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Escolinha de Hóquei",
      image: import.meta.env.BASE_URL + "hoquei.png",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Escolinha de Handebol",
      image: import.meta.env.BASE_URL + "handeboll.png",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Escolinha Society (Prof. Lúcio Surubim)",
      image: import.meta.env.BASE_URL + "futebol.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Academia de RW",
      image: import.meta.env.BASE_URL + "academia.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Boxe",
      image: import.meta.env.BASE_URL + "boxe.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Muay Thai",
      image: import.meta.env.BASE_URL + "muai.png",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Balé (Prof.ª Amanda Jacó)",
      image: import.meta.env.BASE_URL + "ballet.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Espaço de Beleza Camem Alves",
      image: import.meta.env.BASE_URL + "salaodebeleza.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Tênis- (Prof.ª Jéssica)",
      image: import.meta.env.BASE_URL + "tenis.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Tênis Kids",
      image: import.meta.env.BASE_URL + "teniskids.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Tênis- (Prof. Valdir)",
      image: import.meta.env.BASE_URL + "tenis2.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Futevôlei",
      image: import.meta.env.BASE_URL + "futevolei.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Tai Chi Chuan - (Prof. Júlio Kushida)",
      image: import.meta.env.BASE_URL + "tai.jpg",
      contact: "(XX) XXXX-XXXX"
    },
    {
      name: "Kung fu ( Prof. Júlio Kushida)",
      image: import.meta.env.BASE_URL + "kung.jpg",
      contact: "(XX) XXXX-XXXX"
    },
     {
      name: "Sinuca ISSA - (Ítaro Santos Snooker Academy)",
      image: import.meta.env.BASE_URL + "sinuca.jpg",
      contact: "(XX) XXXX-XXXX"
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Instrutores Qualificados',
      description: 'Professores experientes em cada modalidade esportiva'
    },
    {
      icon: Users,
      title: 'Estrutura Completa',
      description: 'Salas, quadras e piscina com equipamentos modernos'
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Atividades disponíveis em vários horários durante a semana'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-red-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL + '/b095c6207fe747c3083334be9dd20fbf.jpeg'})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Serviços <span className="text-yellow-400">Que Você Encontra Aqui</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Todas as atividades e modalidades do clube em um só lugar. Confira os contatos e detalhes de cada aula.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Entre em Contato
            </button>
          </motion.div>
        </div>
      </section>

      {/* Activities Cards */}
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
              Atividades Dentro Do <span className="text-green-800">Clube</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira todas as modalidades e contatos disponíveis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.name}</h3>
                  <p className="text-gray-700 font-semibold">Contato: {activity.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Por que escolher o <span className="text-purple-800">Clube</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cellar;
