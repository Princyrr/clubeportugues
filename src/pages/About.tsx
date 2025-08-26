import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1923', event: 'Fundação do Clube Português do Recife' },
    { year: '1935', event: 'Inauguração da primeira sede própria' },
    { year: '1950', event: 'Conquista do primeiro título estadual' },
    { year: '1980', event: 'Reforma e modernização das instalações' },
    { year: '2000', event: 'Abertura do novo complexo esportivo' },
    { year: '2023', event: '100 anos de tradição e história' }
  ];

  const values = [
    {
      icon: Trophy,
      title: 'Excelência',
      description: 'Buscamos sempre o mais alto padrão em tudo que fazemos'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Valorizamos o espírito de união e pertencimento'
    },
    {
      icon: Heart,
      title: 'Tradição',
      description: 'Preservamos nossa história e cultura portuguesa'
    },
    {
      icon: Target,
      title: 'Inovação',
      description: 'Modernizamos constantemente nossos serviços'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Uma tradição que atravessa gerações
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Fundado em 1923 por imigrantes portugueses, o Clube Português do Recife nasceu 
                  com a missão de preservar as tradições lusitanas e promover a integração da 
                  comunidade portuguesa na capital pernambucana.
                </p>
                <p>
                  Ao longo de mais de 100 anos, o clube se consolidou como um dos principais 
                  centros sociais e esportivos da região, oferecendo um espaço único onde 
                  tradição e modernidade se encontram harmoniosamente.
                </p>
                <p>
                  Hoje, somos mais que um clube - somos uma família que cultiva valores, 
                  celebra conquistas e constrói um legado para as futuras gerações.
                </p>
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
                  src="https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Clube Português"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm font-medium">Anos de História</div>
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
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;