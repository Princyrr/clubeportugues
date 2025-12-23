import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import noticia26 from '../assets/noticia26.png';
import natal from '../assets/natal.png';

import noticia21 from '../assets/noticia21.png';
import funcionamento from '../assets/funcionamento.png';

const NoticiasSection = () => {
  const noticias = [
    { img: noticia26, title: '91 anos do Clube Português do Recife ', description: 'Parabéns, Clube Português do Recife!!! Que venham muitos outros anos de memória, união e grandes conquistas!' },
    { img: natal, title: '🎄✨ Feliz Natal!', description: 'Neste tempo de reflexão, união e esperança, a Diretoria do Clube Português deseja um Feliz Natal! ' },
    { img: funcionamento, title: 'Horário de Funcionamento Natal e Ano Novo', description: 'Informamos que o Clube Português do Recife terá funcionamento diferenciado durante as festividades de Natal e Ano Novo 2025, Clique em Saiba Mais.' },
    { img: noticia21, title: '175 Anos De História e Cultura LUSA!', description: 'O Clube Português do Recife parabeniza o Gabinete Português de Leitura de Pernambuco pelos seus 175 anos de fundação!' }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Últimas <span className="text-green-700">Notícias</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Fique por dentro de tudo o que acontece no Clube Português do Recife
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {noticias.map((noticia, index) => {
            const fromLeft = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: fromLeft ? -120 : 120, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group flex flex-col h-full min-h-[450px]"
              >

                {/* Glow ao redor do card */}
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur-3xl opacity-40 animate-pulse z-0 shadow-[0_15px_50px_rgba(255,200,0,0.5)]" />

                {/* Conteúdo */}
                <div className="relative flex flex-col flex-1 bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden z-10 shadow-lg hover:shadow-[0_25px_50px_rgba(255,180,0,0.6)] transition-shadow duration-500">
                  <img
                    src={noticia.img}
                    alt={noticia.title}
                    className="w-full h-56 sm:h-56 md:h-80 lg:h-[22rem] xl:h-[23rem] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{noticia.title}</h3>
                    <p className="text-gray-700 flex-grow mb-6">{noticia.description}</p>
                    <Link
                      to="/servicos/noticias"
                      className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-700 to-red-700 text-white font-semibold rounded-lg hover:from-green-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
