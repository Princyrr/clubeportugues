import { motion } from 'framer-motion';
import { Clock, Phone, Star, Wine, ChefHat, Instagram } from 'lucide-react';
import noticia2 from '../../assets/adega1.jpg';
import vinhoImg from '../../assets/adega2.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const Restaurant = () => {
  return (
    <div className="pt-12 md:pt-24 bg-neutral-50 text-gray-900">

      {/* HERO */}
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-green-900 via-red-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url(${noticia2})` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <ChefHat className="w-16 h-16 text-yellow-400 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
              Adega <span className="text-yellow-400">Restaurante</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Sabores autênticos de Portugal no coração do Recife. Uma experiência gastronômica inesquecível.
            </p>

            <p className="text-2xl font-semibold text-yellow-300 mb-4">
              Reservas: <span className="text-white">81 3097-7270</span>
            </p>

            <p className="inline-block text-sm md:text-base font-semibold text-red-300 bg-black/40 px-6 py-3 rounded-xl shadow-md">
              ⚠️ Não pedimos dinheiro para reservas antecipadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INFO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Horário */}
          <motion.div {...fadeUp(0)} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <Clock className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
            <p className="text-gray-600 leading-relaxed">
              Terça a Domingo<br />11:30h às 16h<br />Quintas e Sextas<br />17h às 23h<br />
              <span className="font-semibold text-red-700">Segunda: Fechado</span>
            </p>
          </motion.div>

          {/* Reservas */}
          <motion.div {...fadeUp(0.1)} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <Phone className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Reservas</h3>
            <p className="text-gray-600 leading-relaxed">
              restaurante@clubeportugues.com.br<br />
              WhatsApp: (81) 3097-7270
            </p>
            <a
              href="https://www.instagram.com/adega.restauranteportugues/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-5 text-pink-600 hover:text-pink-800 transition"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-medium">@adega.restauranteportugues</span>
            </a>
          </motion.div>

          {/* Avaliação */}
          <motion.div {...fadeUp(0.2)} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Avaliação</h3>
            <div className="flex justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 font-medium">4.9 / 5 estrelas</p>
          </motion.div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <motion.section {...fadeUp(0.3)} className="text-center py-24 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-4xl font-bold mb-6">
          Uma Experiência <span className="text-green-800">Gastronômica Única</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          O Adega Restaurante oferece o melhor da culinária portuguesa, 
          com ingredientes frescos, receitas tradicionais e um ambiente acolhedor.
          Cada prato é uma homenagem à herança lusitana.
        </p>
      </motion.section>

      {/* VINHOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0.2)}>
            <Wine className="w-12 h-12 text-red-800 mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Carta de <span className="text-red-800">Vinhos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Uma seleção cuidadosamente escolhida para harmonizar com cada prato. 
              Vinhos portugueses, vinhos do Porto, e rótulos exclusivos do Chile e da Espanha.
            </p>
            <ul className="space-y-3 text-gray-700">
              {["Espumantes", "Brancos, Tintos e Rosés", "Vinhos de Portugal", "Vinhos do Chile"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={vinhoImg}
                alt="Carta de Vinhos"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
