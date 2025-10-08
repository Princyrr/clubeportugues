import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Heart, Users, Utensils } from 'lucide-react';

// Importar suas imagens locais
import barcelos from '../../assets/barcelos.png';
import barcelossalgados from '../../assets/barcelossalgados.png';

const Barcelos = () => {
  const menuItems = [
  {
    category: 'Almoço Comercial',
    items: [
      { name: 'Frango à Parmegiana', description: 'Frango empanado coberto com molho de tomate e queijo gratinado, servido com arroz e fritas', price: '' },
      { name: 'Cupim Acebolado', description: 'Cupim macio refogado com cebolas caramelizadas, acompanhado de arroz e feijão', price: '' },
      { name: 'Carne de Sol', description: 'Carne de sol grelhada servida com macaxeira e arroz', price: '' },
      { name: 'Camarão à Parmegiana', description: 'Camarões gratinados com molho de tomate e queijo, acompanhados de arroz e batatas', price: '' },
      { name: 'Feijoada', description: 'Feijão preto selecionado e uma seleção especial de carnes suínas e defumadas', price: '' }
    ]
  },
  {
    category: 'Petiscos',
    items: [
      { name: 'Caldinhos', description: 'Pequenas porções de caldos quentes e temperados', price: '' },
      { name: 'Camarão ao Alho e Óleo', description: 'Camarões salteados no alho e óleo, servidos quentes', price: '' },
      { name: 'Isca de Peixe à Milanesa', description: 'Peixes empanados e fritos até ficarem dourados e crocantes', price: '' },
      { name: 'Bolinho de Bacalhau', description: 'Tradicionais bolinhos de bacalhau fritos, crocantes por fora e macios por dentro', price: '' },
      { name: 'Calabresa com Fritas', description: 'Linguiça calabresa fatiada grelhada, servida com batatas fritas', price: '' },
      { name: 'Panelinha de Gorgonzola', description: 'Queijo gorgonzola derretido servido em panelinha, acompanhado de torradas', price: '' },
      { name: 'Frango à Passarinha', description: 'Pequenos pedaços de frango fritos e temperados, crocantes e saborosos', price: '' },
      { name: 'Batata Fritas', description: 'Batatas cortadas e fritas até ficarem douradas e crocantes', price: '' }
    ]
  },
  {
    category: 'Lanches',
    items: [
      { name: 'Sanduiches', description: 'Pães recheados com carnes, queijos, vegetais e molhos especiais', price: '' },
      { name: 'Tapiocas', description: 'Tapiocas recheadas com diversos sabores', price: '' },
      { name: 'Coxinhas', description: ' Recheados com frango desfiado', price: '' },
      { name: 'Enroladinho', description: 'Massa fina recheada com salsicha ou queijo', price: '' },
      { name: 'Empadas', description: 'Pequenas tortas recheadas com frango', price: '' },
      { name: 'Pães Recheados', description: 'Pães macios com diversos recheios', price: '' }
    ]
  },
  {
    category: 'Bebidas e Drinks',
    items: [
      { name: 'Heineken', description: 'Cerveja importada, refrescante e de sabor equilibrado', price: '' },
      { name: 'Devassa', description: 'Cerveja nacional leve e saborosa', price: '' },
      { name: 'Amistel', description: 'Cerveja de sabor suave e refrescante', price: '' },
      { name: 'Whiskys', description: 'Seleção de whiskys nacionais e importados, servidos puros ou com gelo', price: '' },
      { name: 'Caipirinha', description: 'Clássico drink brasileiro feito com cachaça, limão e açúcar', price: '' },
      { name: 'Caipiroska', description: 'Versão da caipirinha feita com vodka e frutas variadas', price: '' }
    ]
  }
];


  const ambiences = [
    {
      title: 'Ambiente Descontraído',
      description: 'Perfeito para relaxar após o trabalho ou se encontrar com amigos',
      icon: Heart
    },
    {
      title: 'Encontros e Convivência',
      description: 'Espaço ideal para reuniões, happy hours e confraternizações',
      icon: Users
    },
    {
      title: 'Sabor Autêntico',
      description: 'Petiscos, pratos e drinks preparados com cuidado e qualidade',
      icon: Utensils
    }
  ];

  return (
    <div className="pt-12 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-red-600 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${barcelos})`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Utensils className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bar <span className="text-yellow-300">Barcelos</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Localizado no Clube Português do Recife, oferecemos almoço comercial, lanches, petiscos e drinks refrescantes em um ambiente acolhedor.
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
                A Essência do <span className="text-green-600">Bar Barcelos</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Um bar acolhedor com tradição portuguesa, oferecendo pratos, lanches e drinks para todos os gostos.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa missão é proporcionar momentos de descontração e sabor, combinando qualidade, variedade e ambiente agradável.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Atendimento de Qualidade</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
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
                  src={barcelossalgados}
                  alt="Bar Barcelos Petiscos"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
                p-4 sm:p-6 rounded-2xl shadow-xl 
                w-36 sm:w-48 md:w-56 text-center">
  <Utensils className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 mx-auto" />
  <div className="text-sm sm:text-lg font-bold">Sabor e Tradição</div>
  <div className="text-xs sm:text-sm opacity-90">Desde 1923</div>
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
              Nosso <span className="text-green-600">Cardápio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algunas delícias que agradam todos os paladares: pratos, petiscos, lanches e drinks refrescantes, além desses tem muitos mais no nosso bar!
    
            </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lembrando que temos muitos mais opções, esses são apenas alguns e que são sucesso entre nossos clientes. 
    
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
              Mais que um <span className="text-green-600">Bar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um espaço de convivência, sabor e tradição
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
                className="text-center p-8 bg-gradient-to-br from-green-50 to-green-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-gradient-to-r from-green-800 to-red-800">
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
                <p>Terça a Sexta: 9h às 17h</p>
                <p>Sábado: 9h às 16h</p>
                <p>Domingo: 9h às 16h</p>
                <p>Segunda: FECHADO</p>
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
                <p>Dentro do Clube Português</p>
                <p>Próximo à Quadra de Esportes</p>
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
