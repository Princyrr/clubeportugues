import { motion } from "framer-motion";
import { FileText, Calendar, Download } from "lucide-react";
import fundoBalanco from "../../assets/balancete.png";

type Balancete = {
  mes: string;
  ano: string;
  link: string;
};

const Balancetes = () => {
  const balancetes: Balancete[] = [
    {
      mes: "Setembro",
      ano: "2025",
      link: "https://drive.google.com/file/d/1USKdm_cc8oYgOQs246GAIZDDC51nu1tR/view?usp=drive_link",
    },
    
  ];

  return (
    <div className="pt-12 md:pt-24">
      {/* -------- HERO -------- */}
      <section className="relative py-24 bg-gradient-to-r from-green-800 via-red-800 to-green-600 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/30"
        />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${fundoBalanco})` }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 text-yellow-400 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl">
              Balancetes{" "}
              <span className="text-yellow-400 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                Financeiros
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Prestação de contas com transparência e compromisso. Confira aqui
              os balancetes mensais do Clube Português do Recife.
            </p>
          </motion.div>
        </div>
      </section>

      {/* -------- LISTA DE BALANCETES -------- */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Calendar className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Balancetes Recentes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Clique em um mês para visualizar o documento completo em PDF.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {balancetes.map((b, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform-gpu p-8 text-center border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-red-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <FileText className="w-10 h-10 text-green-700 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {b.mes} <span className="text-green-700">{b.ano}</span>
                </h3>
                <p className="text-gray-600 mb-8 text-sm">
                  Balancete financeiro do mês de {b.mes.toLowerCase()}.
                </p>
                <motion.a
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 via-green-700 to-red-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Visualizar PDF
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balancetes;
