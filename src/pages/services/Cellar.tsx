
import { motion } from 'framer-motion';
import { Star, Award, Users, Clock } from 'lucide-react';

// Importando todas as imagens
import natacao from '../../assets/natacao.jpg';
import natacao1 from '../../assets/natacao1.jpeg';
import natacao2 from '../../assets/natacao2.jpg';
import natacao3 from '../../assets/natacao3.jpg';
import natacao4 from '../../assets/natacao4.jpeg';
import hoquei from '../../assets/hoquei.png';
import handebol from '../../assets/handeboll.png';
import futebol from '../../assets/futebol.jpg';
import academia from '../../assets/academia.jpg';
import boxe from '../../assets/boxe.jpg';
import muai from '../../assets/muai.png';
import ballet from '../../assets/ballet.jpg';
import salaodebeleza from '../../assets/salaodebeleza.jpg';
import tenis from '../../assets/tenis.jpg';
import teniskids from '../../assets/teniskids.jpg';
import tenis2 from '../../assets/tenis2.jpg';
import futevolei from '../../assets/futevolei.jpg';
import tai from '../../assets/tai.jpg';
import kung from '../../assets/kung.jpg';
import sinuca from '../../assets/sinuca.jpg';
import heroBg from '../../assets/historia4.jpg';
import colonia from '../../assets/colonia.png';
import massagem from '../../assets/massagem.jpg';


const Cellar = () => {
  const activities = [
    { title: "Escolinha de Natação", teacher: "Prof.ª Carla", image: natacao, contact: "(81) 98224-9769" },
    { title: "Escolinha de Natação", teacher: "Prof.ª Keycy", image: natacao1, contact: "(81) 98224-9769" },
    { title: "Natação e Hidroginástica", teacher: "Prof. Fernando", image: natacao2, contact: "(81) 98224-9769" },
    { title: "Natação e Hidroginástica", teacher: "Prof.ª Regina", image: natacao3, contact: "(81) 98224-9769" },
    { title: "Natação", teacher: "Prof. Domingos Sávio", image: natacao4, contact: "(81) 98224-9769" },
    { title: "Hóquei", teacher: "Equipe Técnica", image: hoquei, contact: "(81) 98892-6000" },
    { title: "Handebol", teacher: "Marculino: Diniz / Feminino: Cristiano", image: handebol,  contact: <>Masculino: (81) 99954-3153<br />Feminino:  99628-5442</> },
    { title: "Escolinha Society", teacher: "Prof. Lúcio Surubim", image: futebol, contact: "(81) 99609-8366" },
    { title: "Academia RW", teacher: "Equipe RW", image: academia, contact: "(81) 3129-6160" },
    { title: "Boxe", teacher: "Izaque", image: boxe, contact: "(81) 98361-6719 / 99625-0234 " },
    { title: "Muay Thai e Taekwondo", teacher: "Izaque", image: muai, contact: "(81) 98361-6719 / 99625-0234" },
    { title: "Ballet", teacher: "Prof.ª Amanda Jacó", image: ballet, contact: "(81) 99890-7155" },
    { title: "Salão de Beleza", teacher: "Camem Alves", image: salaodebeleza, contact: "(81) 3221-6308" },
    { title: "Tênis", teacher: "Prof.ª Jéssica", image: tenis, contact: "(81) 97100-0870" },
    { title: "Tênis Kids", teacher: "Prof. Leandro", image: teniskids, contact: "(81) 98794-7285" },
    { title: "Tênis Adulto", teacher: "Prof. Valdir", image: tenis2, contact: "(81) 99905-1545" },
    { title: "Volêi de Praia", teacher: "Prof.ª Camila", image: futevolei, contact: "(81) 99814-6161" },
    { title: "Tai Chi Chuan", teacher: "Prof. Emerson", image: tai, contact: "(81) 98608-1584" },
    { title: "Kung Fu", teacher: "Prof. Júlio Kushida", image: kung, contact: "(81) --/--" },
    { title: "Sinuca ISSA", teacher: "Ítaro Santos", image: sinuca, contact: "(81) 99883-0147" },
    { title: "Colônia de Férias", teacher: "Nogueira", image: colonia, contact: "(81) 99171-2572" },
     { title: "Massagem", teacher: "Arnaldo", image: massagem, contact: "(81) 99168-7376" },
  ];

  const features = [
    { icon: Award, title: 'Instrutores Qualificados', description: 'Professores experientes em cada modalidade esportiva' },
    { icon: Users, title: 'Estrutura Completa', description: 'Salas, quadras e piscina com equipamentos modernos' },
    { icon: Clock, title: 'Horários Flexíveis', description: 'Atividades disponíveis em vários horários durante a semana' }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-red-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
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
                    alt={activity.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-lg text-gray-700 mb-1">{activity.teacher}</p>
                  <p className="text-gray-600 font-semibold">📞 {activity.contact}</p>
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
