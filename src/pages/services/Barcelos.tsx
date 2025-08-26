import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Clock, MapPin, Heart, Users, Utensils } from 'lucide-react';

const Barcelos = () => {
  const menuItems = [
    {
      category: 'Cafés Especiais',
      items: [
        { name: 'Café da Bica', description: 'Café expresso tradicional português', price: 'R$ 6,00' },
        { name: 'Galão', description: 'Café com leite no copo alto', price: 'R$ 8,00' },
        { name: 'Meia de Leite', description: 'Café com leite na chávena', price: 'R$ 7,00' }
      ]
    },
    {
      category: 'Doces e Salgados',
      items: [
        { name: 'Pastel de Nata', description: 'Tradicional pastel de nata quentinho', price: 'R$ 5,00' },
        { name: 'Bola de Berlim', description: 'Doce frito com creme pasteleiro', price: 'R$ 7,00' },
        { name: 'Rissol de Camarão', description: 'Salgado crocante com recheio de camarão', price: 'R$ 8,00' }
      ]
    },
    {
      category: 'Bebidas Refrescantes',
      items: [
        { name: 'Sumol', description: 'Refrigerante português sabor laranja', price: 'R$ 6,00' },
        { name: 'Água das Pedras', description: 'Água mineral com gás portuguesa', price: 'R$ 5,00' },
        { name: 'Imperial', description: 'Cerveja portuguesa gelada', price: 'R$ 8,00' }
      ]
    }
  ];

  const ambiences = [
    {
      title: 'Ambiente Acolhedor',
      description: 'Um espaço que recria a atmosfera das cafeterias tradicionais de Portugal',
      icon: Heart
    },
    {
      title: 'Encontro Social',
      description: 'Local perfeito para conversar com amigos e fazer novos contatos',
      icon: Users
    },
    {
      title: 'Sabores Autênticos',
      description: 'Receitas originais trazidas diretamente de Portugal',
      icon: Utensils
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Coffee className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cafeteria <span className="text-yellow-300">Barcelos</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              O melhor do café português no coração do clube. Tradição, sabor e aconchego em cada xícara.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Conheça Nosso Cardápio
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Essência do <span className="text-amber-600">Café Português</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Cafeteria Barcelos é um pedacinho de Portugal no Recife. Inspirada nas 
                tradicionais cafeterias portuguesas, oferecemos um ambiente aconchegante 
                onde você pode saborear o melhor café e os doces mais queridos de Portugal.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nosso café é importado diretamente das melhores torrefações portuguesas, 
                garantindo aquele sabor único que faz parte da cultura lusitana. Cada xícara 
                é preparada com o carinho e a técnica tradicional portuguesa.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Café Português</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-1">7h</div>
                  <div className="text-sm text-gray-600">Aberto por Dia</div>
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
                  src="https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Cafeteria Barcelos"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
                <Coffee className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold">Café Tradicional</div>
                <div className="text-sm opacity-90">Desde 1923</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
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
              Nosso <span className="text-orange-600">Cardápio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sabores autênticos que transportam você diretamente para as cafeterias de Lisboa
            </p>
          </motion.div>

          <div className="space-y-12">
            {menuItems.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                        <span className="text-xl font-bold text-orange-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience Section */}
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
              Mais que uma <span className="text-amber-600">Cafeteria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um espaço de convivência e tradição portuguesa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ambiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours and Contact */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Clock className="w-12 h-12 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Horário de Funcionamento</h3>
              <div className="text-amber-100 space-y-2">
                <p>Segunda a Sexta: 7h às 22h</p>
                <p>Sábado: 7h às 20h</p>
                <p>Domingo: 8h às 18h</p>
                <p className="text-sm mt-4">*Sujeito a alterações em feriados</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-12 h-12 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Localização</h3>
              <div className="text-amber-100 space-y-2">
                <p>Térreo do Clube Português</p>
                <p>Próximo à recepção principal</p>
                <p>Entrada independente disponível</p>
                <p className="text-sm mt-4">Acesso para não-sócios também</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Barcelos;