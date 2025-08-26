import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Star, Clock, Award, Grape, Globe } from 'lucide-react';

const Cellar = () => {
  const wineCollections = [
    {
      region: 'Porto e Douro',
      description: 'Vinhos únicos da região mais famosa de Portugal',
      wines: ['Quinta do Noval Vintage', 'Taylor\'s 20 Years', 'Graham\'s Six Grapes'],
      image: 'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      region: 'Vinho Verde',
      description: 'Vinhos frescos e leves da região do Minho',
      wines: ['Casal Garcia', 'Quinta da Aveleda', 'Gazela Vinho Verde'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      region: 'Alentejo',
      description: 'Vinhos encorpados do sul de Portugal',
      wines: ['Esporão Reserva', 'Monte Velho', 'Cartuxa EA'],
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Seleção Premium',
      description: 'Vinhos cuidadosamente selecionados pelos nossos sommeliers'
    },
    {
      icon: Star,
      title: 'Certificação',
      description: 'Todos os vinhos com certificação de origem e qualidade'
    },
    {
      icon: Globe,
      title: 'Importação Direta',
      description: 'Importamos diretamente das melhores vinícolas portuguesas'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-red-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Wine className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Adega <span className="text-yellow-400">Portuguesa</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Uma seleção exclusiva dos melhores vinhos de Portugal. Tradição, qualidade e sabor únicos.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Conheça Nossa Seleção
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Cellar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Grape className="w-12 h-12 text-purple-800 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tradição em Cada <span className="text-red-800">Garrafa</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa adega é um verdadeiro tesouro para os amantes do vinho português. 
                Mantemos uma temperatura e umidade controladas para preservar a qualidade 
                e o sabor único de cada vinho.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Com mais de 200 rótulos diferentes, desde vinhos jovens e frescos até 
                vintages raros e colecionáveis, oferecemos uma experiência completa 
                para todos os paladares e ocasiões.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-800 mb-2">200+</div>
                  <div className="text-gray-600">Rótulos Diferentes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800 mb-2">15°C</div>
                  <div className="text-gray-600">Temperatura Ideal</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Adega Portuguesa"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wine Collections */}
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
              Coleções por <span className="text-green-800">Região</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore os sabores únicos de cada região vinícola portuguesa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wineCollections.map((collection, index) => (
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
                    src={collection.image}
                    alt={collection.region}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{collection.region}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Destaques:</h4>
                    {collection.wines.map((wine, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {wine}
                      </div>
                    ))}
                  </div>
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
              Por que Escolher Nossa <span className="text-purple-800">Adega</span>?
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

      {/* Visit Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Visite Nossa Adega
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Agende uma visita guiada e conheça de perto nossa coleção especial. 
              Degustações disponíveis mediante agendamento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Horário de Visitação</h3>
                <p className="text-gray-200">
                  Segunda a Sexta: 14h às 18h<br />
                  Sábados: 10h às 16h
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Degustações</h3>
                <p className="text-gray-200">
                  Agendamento obrigatório<br />
                  (81) 3333-4444
                </p>
              </div>
            </div>
            <button className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Agendar Visita
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cellar;