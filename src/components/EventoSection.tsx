import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Phone, Ticket } from "lucide-react";
import evento1 from "../assets/evento1.png";

const EventoSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 to-yellow-100 overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,230,150,0.4),_transparent_60%)]" />

      {/* Título */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900">
          <span className="text-red-700">Agenda</span> de Eventos
        </h2>
        <div className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-green-700 to-red-700 rounded-full"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-14">
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 w-full"
        >
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-red-600 to-green-700 opacity-30 blur-lg group-hover:opacity-50 transition" />
            <img
              src={evento1}
              alt="Grande Sardinhada de São Martinho"
              className="relative rounded-2xl shadow-2xl w-full border-4 border-white"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 text-gray-800"
        >
          <h3 className="text-3xl font-extrabold text-green-800 mb-6 leading-snug">
            🐟✨ Grande Sardinhada de São Martinho ✨
          </h3>

          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3"><Calendar className="text-red-700" /> 22 de novembro</li>
            <li className="flex items-center gap-3"><Clock className="text-red-700" /> Das 12h30 às 16h30</li>
            <li className="flex items-center gap-3"><MapPin className="text-red-700" /> Salão Nobre – Clube Português 🇵🇹</li>
            <li className="flex items-center gap-3"><Ticket className="text-red-700" /> Adesão: R$ 150,00</li>
            <li className="flex items-center gap-3"><Phone className="text-red-700" /> Informações: (81) 3231.5400</li>
          </ul>

          <p className="mt-6 text-justify text-gray-700 leading-relaxed">
            Venha viver uma tarde deliciosa com sabores tradicionais, boa música e ótimas companhias 
            no clima acolhedor do São Martinho 🍷🔥.
          </p>

          <Link
            to="/servicos/agenda-shows"
            className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-green-700 to-red-700 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            Reservar agora
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventoSection;

