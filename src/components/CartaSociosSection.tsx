import { motion } from "framer-motion";
import { FileText, ShieldCheck, Landmark, Users } from "lucide-react";
import cartaImg from "../assets/carta-socios.png";

const CartaSociosSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 to-yellow-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,230,150,0.4),_transparent_60%)]" />

      {/* Título */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900">
          <span className="text-red-700">Carta</span> aos Sócios
        </h2>
        <div className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-green-700 to-red-700 rounded-full"></div>
      </div>

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
  src={cartaImg}
  alt="Carta aos Sócios"
  className="relative rounded-2xl shadow-2xl w-full max-h-[520px] object-cover border-4 border-white"
/>


          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 text-gray-800"
        >
          <h3 className="text-3xl font-extrabold text-green-800 mb-6">
            Primeiros 100 dias de gestão
          </h3>

          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-red-700" />
              Gestão com transparência e responsabilidade fiscal
            </li>
            <li className="flex items-center gap-3">
              <Landmark className="text-red-700" />
              Valorização do patrimônio e respeito às tradições
            </li>
            <li className="flex items-center gap-3">
              <Users className="text-red-700" />
              Gestão participativa baseada no diálogo com os sócios
            </li>
          </ul>

          <p className="mt-6 text-justify text-gray-700 leading-relaxed">
            Nos primeiros meses da atual gestão do Clube Português do Recife,
            foi realizado um diagnóstico profundo e responsável da situação
            financeira da instituição. A análise detalhada de receitas e
            despesas permitiu decisões seguras, com foco no equilíbrio
            financeiro e na continuidade das atividades do clube.
            <br /><br />
            Entre as principais ações, destacam-se o corte de despesas
            desnecessárias, a regularização de débitos fiscais por meio de
            parcelamentos e a retomada da regularidade das certidões, sempre
            pautados por uma administração profissional e comprometida com o
            futuro do clube.
          </p>

          {/* Botão */}
          <div className="mt-8">
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:68382cb1-2701-4ae3-b12d-4b076ad4600d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-700 to-red-700 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <FileText />
              Acessar carta completa (Clique Aqui)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CartaSociosSection;
