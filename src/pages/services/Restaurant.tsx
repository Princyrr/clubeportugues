import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Star, Utensils, Wine, ChefHat } from 'lucide-react';

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState('pratos-principais');

  const menuCategories = [
    { id: 'entradas', name: 'Entradas' },
    { id: 'pratos-principais', name: 'Pratos Principais' },
    { id: 'sobremesas', name: 'Sobremesas' },
    { id: 'bebidas', name: 'Bebidas' }
  ];

  const menuItems = {
    'entradas': [
      { name: 'Caldo Verde', description: 'Tradicional sopa portuguesa com couve e linguiça', price: 'R$ 28,00' },
      { name: 'Pastéis de Bacalhau', description: 'Bolinhos de bacalhau crocantes (6 unidades)', price: 'R$ 35,00' },
      { name: 'Queijos e Enchidos', description: 'Seleção de queijos e embutidos portugueses', price: 'R$ 45,00' }
    ],
    'pratos-principais': [
      { name: 'Bacalhau à Brás', description: 'Bacalhau desfiado com batata palha e ovos', price: 'R$ 68,00' },
      { name: 'Francesinha', description: 'Sanduíche típico do Porto com molho especial', price: 'R$ 52,00' },
      { name: 'Costeleta de Porco Alentejana', description: 'Costeleta grelhada com amêijoas e batatas', price: 'R$ 75,00' },
      { name: 'Polvo à Lagareiro', description: 'Polvo assado com azeite, alho e batatas', price: 'R$ 85,00' }
    ],
    'sobremesas': [
      { name: 'Pastel de Nata', description: 'Clássico pastel de nata português (3 unidades)', price: 'R$ 18,00' },
      { name: 'Pudim Abade de Priscos', description: 'Pudim tradicional com toucinho do céu', price: 'R$ 22,00' },
      { name: 'Arroz Doce', description: 'Arroz doce cremoso com canela', price: 'R$ 16,00' }
    ],
    'bebidas': [
      { name: 'Vinho Verde', description: 'Garrafa de vinho verde português', price: 'R$ 45,00' },
      { name: 'Ginjinha', description: 'Licor de ginja tradicional (dose)', price: 'R$ 12,00' },
      { name: 'Sagres', description: 'Cerveja portuguesa (600ml)', price: 'R$ 15,00' }
    ]
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <ChefHat className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Restaurante <span className="text-yellow-400">Português</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Sabores autênticos de Portugal no coração do Recife. Uma experiência gastronômica única.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Fazer Reserva
            </button>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <Clock className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
              <p className="text-gray-600">
                Terça a Domingo<br />
                12h às 15h | 19h às 23h<br />
                Segunda: Fechado
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <Phone className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reservas</h3>
              <p className="text-gray-600">
                (81) 3333-4444<br />
                restaurante@clubeportugues.com.br<br />
                WhatsApp: (81) 99999-8888
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Avaliação</h3>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">4.8/5 estrelas</p>
            </motion.div>
          </div>

          {/* About Restaurant */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Uma Experiência <span className="text-green-800">Gastronômica Única</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nosso restaurante oferece o que há de melhor da culinária portuguesa, 
              preparado com ingredientes frescos e receitas tradicionais passadas de geração em geração. 
              Um ambiente acolhedor onde cada refeição é uma celebração da cultura lusitana.
            </p>
          </motion.div>
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
            className="text-center mb-12"
          >
            <Utensils className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nosso <span className="text-red-800">Cardápio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pratos tradicionais portugueses preparados com amor e dedicação
            </p>
          </motion.div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-green-800 ml-4">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wine Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Wine className="w-12 h-12 text-red-800 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Carta de <span className="text-red-800">Vinhos</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa carta de vinhos foi cuidadosamente selecionada para harmonizar 
                perfeitamente com os pratos do nosso cardápio. Oferecemos uma ampla 
                seleção de vinhos portugueses, desde os tradicionais vinhos do Porto 
                até os frescos vinhos verdes do Minho.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Vinhos do Porto e Douro
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Vinhos Verdes do Minho
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Vinhos do Alentejo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Seleção de vinhos brasileiros
                </li>
              </ul>
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
                  src="https://images.pexels.com/photos/1803104/pexels-photo-1803104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Carta de Vinhos"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;