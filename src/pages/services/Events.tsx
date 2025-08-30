import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Music, Users, Star, Ticket } from 'lucide-react';

// Importando as imagens locais
import evento1 from '../../assets/evento1.jpg';
import evento2 from '../../assets/evento2.jpg';
import evento3 from '../../assets/evento3.jpg';

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState('janeiro');

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const events = {
    janeiro: [
      {
        date: '15 Jan',
        title: 'Noite do Fado',
        artist: 'Maria Fernanda',
        time: '20h30',
        price: 'R$ 45,00',
        image: evento1
      },
      {
        date: '22 Jan',
        title: 'Festival da Francesinha',
        artist: 'Chef António Silva',
        time: '19h00',
        price: 'R$ 35,00',
        image: evento2
      },
      {
        date: '29 Jan',
        title: 'Baile da Saudade',
        artist: 'Orquestra Lusitana',
        time: '21h00',
        price: 'R$ 50,00',
        image: evento3
      }
    ],
    fevereiro: [
      {
        date: '05 Fev',
        title: 'Carnaval Português',
        artist: 'Rancho Folclórico',
        time: '20h00',
        price: 'R$ 40,00',
        image: evento1
      },
      {
        date: '12 Fev',
        title: 'Serenata de São Valentim',
        artist: 'Duo Romântico',
        time: '19h30',
        price: 'R$ 55,00',
        image: evento2
      }
    ],
    março: [
      {
        date: '08 Mar',
        title: 'Homenagem às Mulheres Portuguesas',
        artist: 'Coral Feminino',
        time: '18h00',
        price: 'Gratuito',
        image: evento3
      }
    ]
  };

  const eventTypes = [
    {
      icon: Music,
      title: 'Shows Musicais',
      description: 'Fado, música popular portuguesa e apresentações especiais'
    },
    {
      icon: Users,
      title: 'Eventos Sociais',
      description: 'Bailes, confraternizações e celebrações tradicionais'
    },
    {
      icon: Star,
      title: 'Festivais Temáticos',
      description: 'Celebrações da cultura portuguesa e datas especiais'
    }
  ];

  // contato da instituição
  const whatsappNumber = '5581982524617'; // coloque o número sem caracteres especiais
  const emailAddress = 'clube@clubeportuguesdorecife.com.br';

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${evento1})`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Calendar className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Agenda de <span className="text-yellow-400">Shows</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Eventos culturais, shows musicais e celebrações que mantêm viva a tradição portuguesa
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Entre em contato
            </a>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
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
              Tipos de <span className="text-blue-800">Eventos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversas modalidades de entretenimento para todos os gostos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Programação <span className="text-purple-800">2025</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira nossa agenda completa de eventos e shows
            </p>
          </motion.div>

          {/* Month Selector */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {months.slice(0, 3).map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month.toLowerCase())}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedMonth === month.toLowerCase()
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Events List */}
          <motion.div
            key={selectedMonth}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {events[selectedMonth as keyof typeof events]?.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 md:h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.artist}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-800">{event.price}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de informações sobre o evento: ${event.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Whatsapp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )) || (
              <div className="col-span-full text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-500">Eventos em breve para este mês</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-3xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Para Mais Informações
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Entre em contato com a Secretária para saber mais informações. Garantia de diversão e cultura!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Escolha o Evento</h3>
                  <p className="text-gray-300">Selecione o show ou evento de sua preferência</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Clique no Contato</h3>
                  <p className="text-gray-300">Use Whatsapp ou E-mail</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Aproveite</h3>
                  <p className="text-gray-300">Chegue um pouco antes e curta o evento</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
  href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações sobre um evento!`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  (81) 98252-4617
</a>

               <a
  href={`mailto:${emailAddress}`}
  className="border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 break-words whitespace-normal text-center w-full sm:w-auto"
>
  {emailAddress}
</a>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
