import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, Star, Utensils, Wine, ChefHat, Instagram } from 'lucide-react';
import noticia2 from '../../assets/adega1.jpg';
import vinhoImg from '../../assets/adega2.jpg';



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
      { name: 'Couvert Adega', description: 'Cebola, abobrinha e beringela marinados, pasta de queijo e pão caseiro', price: '' },
  { name: 'Bolinho de Bacalhau', description: 'Bolinhos de bacalhau crocantes por fora e macios por dentro', price: '' },
  { name: 'Caldinhos', description: 'peixe, camarão e feijão', price: '' },
  { name: 'Carpaccio de Carne', description: 'Ao molho de mostarda, queijo parmesão, rúcula, alcaparras e torradas', price: '' },
  { name: 'Camarão à Milanesa com Molho Rosé', description: 'Camarões empanados, fritos e servidos com molho rosé especial', price: '' },
  { name: 'Camarão ao Alho e Óleo', description: 'Camarões salteados no alho e óleo, servidos quentes', price: '' },
  { name: 'Tábua de Frios', description: 'Seleção de queijos, embutidos e acompanhamentos', price: '' },
  { name: 'Isca de Peixe', description: 'Peixes empanados e fritos até ficarem dourados e crocantes', price: '' },
 
  { name: 'Moela à Moda Portuguesa', description: 'Acompanha torradas', price: '' }
    ],
    'pratos-principais': [
     { name: 'Filé ao Molho Madeira', description: 'Filé mignon grelhado servido com molho madeira especial', price: '' },
  { name: 'Steak au Poivre Alto Grelhado', description: 'Ao molho madeira pimentado servido com arroz e legumes', price: '' },
  { name: 'Filé aos Quatro Queijos', description: 'Servido com Fettuccine ao molho pesto', price: '' },
  { name: 'Diplomata', description: 'Filé envolvido no bacon, servido com arroz piamontez e fritas', price: '' },
  { name: 'Chateaubriand', description: 'Filé alto regado ao molho chatobriand com arroz à grega e purê', price: '' },
  { name: 'Paillard', description: 'Filé batido, servido com fettuccine ao molho de queijo', price: '' },
  { name: 'Filé à Parmegiana', description: 'Filé empanado com fettuccine ao sugo e fritas', price: '' },
  { name: 'Filé de Peito ao Catupiry', description: 'Servido com arroz branco e batata palha', price: '' },
  { name: 'Frango à Parisiense', description: 'Fettuccine ao molho branco presunto, cubos de frango', price: '' },
  { name: 'Frango à Cubana', description: 'Peito de frango empanado com arroz à grega, batata frita, banana empanada e ovo frito.', price: '' },
  { name: 'Arroz de Polvo', description: 'Arroz preparado com pedaços de polvo e temperos mediterrâneos', price: '' },
    { name: 'Sinfonia Marítima', description: 'Servida com arroz de alho', price: '' },
  { name: 'Peixe à Belle Meunière', description: 'Filé de pescada amarela, puxado na manteiga com alcaparras, champignon e camarão, servido com purê de batatas e arroz de brócolis.', price: '' },
  { name: 'Peixe à Moda do Chef', description: 'Pescada amarela grelhada com molho de tomate, servido com legumes ao vapor.', price: '' },
  { name: 'Salmão com Molho de Alcaparras', description: 'Servido com arroz de brócolis.', price: '' },
  { name: 'Salmão com Ervas Finas', description: 'servido com legumes no bafo.', price: '' }
    ],
    'sobremesas': [
      { name: 'Pudim de Leite', description: 'Pudim cremoso de leite tradicional', price: '' },
  { name: 'Pastel de Belém', description: 'Clássico pastel de nata português com massa folhada ', price: '' },
  { name: 'Cartola', description: 'Banana frita com queijo manteiga e açúcar, finalizada com canela', price: '' },
  { name: 'Queijo Manteiga com Mel de Engenho', description: 'Queijo manteiga servido com mel artesanal de engenho', price: '' }
    ],
    'bebidas': [
     { name: 'Refrigerantes', description: 'Variedade de sabores de refrigerante ', price: '' },
  { name: 'Sucos', description: 'Sucos preparados na hora', price: '' },
  { name: 'Energético', description: 'Bebida energética para aumentar a disposição', price: '' },
  { name: 'Vodkas', description: 'Seleção de vodkas nacionais e importadas', price: '' },
  { name: 'Cachaças', description: 'Cachaças artesanais e tradicionais brasileiras', price: '' },
  { name: 'Whiskies', description: 'Whiskies nacionais e importados de alta qualidade', price: '' },
  { name: 'Cervejas', description: 'Cervejas nacionais e importadas geladas', price: '' },
  { name: 'Gins', description: 'Gins com botânicos selecionados', price: '' },
  { name: 'Drinks', description: 'Coquetéis clássicos e exclusivos preparados na hora', price: '' },
  { name: 'Vinhos', description: 'variedades é o que não falta por aqui', price: '' },
    ]
  };

  return (
    <div className="pt-12 md:pt-24">
      
     {/* Hero Section */}
     <section className="relative py-20 bg-gradient-to-r from-green-800 to-red-800 overflow-hidden">
  <div className="absolute inset-0 bg-black/30" />
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{ backgroundImage: `url(${noticia2})` }}
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
        Adega <span className="text-yellow-400">Restaurante</span>
      </h1>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
        Sabores autênticos de Portugal no coração do Recife. Uma experiência gastronômica única.
      </p>

      {/* Mensagem de contato */}
      <p className="text-2xl font-semibold text-yellow-300 mb-4">
        Reservas e informações: <span className="text-white">81 3097-7270</span>
      </p>

      {/* Mensagem de alerta */}
      <p className="text-lg text-red-300 font-bold bg-black/40 px-4 py-2 rounded-lg inline-block">
        ⚠️ Atenção: Não pedimos dinheiro para reservas antecipadas.
      </p>
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
                11:30h às 16h<br />
                Quintas e Sextas<br />
                17h às 23h <br />
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
    restaurante@clubeportugues.com.br<br />
    WhatsApp: (81) 3097-7270
  </p>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/adega.restauranteportugues/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 mt-4 text-pink-600 hover:text-pink-800 transition"
  >
    <Instagram className="w-6 h-6" />
    <span className="font-medium">@adega.restauranteportugues</span>
  </a>
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
              <p className="text-gray-600">4.9/5 estrelas</p>
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
  Pratos tradicionais portugueses preparados com amor e dedicação. Estas são apenas algumas das muitas opções que você encontrará em nosso cardápio completo, recheado de sabores e variedade.
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
                 Espumantes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Vinho Branco, Vinho Tinto  e Rosé
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Vinhos de Portugal
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Vinhos do Chile
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
                  src={vinhoImg}
                  alt="Carta de Vinhos"
                  className="w-full h-80 md:h-[600px] object-cover rounded-2xl"
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
