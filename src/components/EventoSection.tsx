import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import evento1 from "../assets/evento1.png";

const EventoSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-yellow-50 overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 opacity-90" />

      {/* Título centralizado no topo */}
      {/* Título centralizado no topo */}
<div className="relative z-10 flex flex-col items-center mb-16">
  <div className="flex flex-col items-center justify-center mb-4">
    <Calendar className="w-8 h-8 text-red-700 mb-2 sm:mb-0 sm:mr-3" />
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight text-center">
      <span className="text-red-700">Agenda</span> de Eventos
    </h2>
  </div>
</div>

<div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-14 z-10">
  {/* Imagem */}
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="md:w-1/2 w-full flex flex-col items-center text-center"
  >
    <div className="relative w-full">
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur-lg opacity-40 animate-pulse" />
      <img
        src={evento1}
        alt="Evento do Clube Português"
        className="relative rounded-2xl shadow-2xl w-full object-cover border-4 border-white"
      />
    </div>
  </motion.div>

  {/* Conteúdo */}
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-start"
  >
    <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-green-800 mb-6">
      🎉 Dia das Crianças no Clube Português 🎈
    </h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
      👧🧒 O dia <strong>12 de outubro</strong> será de pura diversão para a garotada!  
      <br />
      🕚 <strong>Das 11h às 14h</strong>, teremos atividades recreativas especiais na
      piscina 🏖️ e no parque infantil 🌳, garantindo muita alegria, brincadeiras e
      boa energia para celebrarmos essa data tão especial.  
      <br />
      💚 Traga a família e venha viver momentos únicos com a criançada!
    </p>

    <Link
      to="/servicos/agenda-shows"
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-700 to-red-700 text-white font-semibold rounded-lg hover:from-green-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      Saiba mais
    </Link>

    <div className="mt-10 w-32 h-1 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full" />
  </motion.div>
</div>

    </section>
  );
};

export default EventoSection;
