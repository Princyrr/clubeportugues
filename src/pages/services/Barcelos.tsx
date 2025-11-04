import { motion } from "framer-motion";
import { Clock, MapPin, Heart, Users, Utensils } from "lucide-react";

// Imagens
import barcelos from "../../assets/barcelos.png";
import barcelossalgados from "../../assets/barcelossalgados.png";

const Barcelos = () => {
  const ambiences = [
    {
      title: "Ambiente Descontraído",
      description:
        "Perfeito para relaxar após o trabalho ou se encontrar com amigos.",
      icon: Heart,
    },
    {
      title: "Encontros e Convivência",
      description:
        "Espaço ideal para reuniões, happy hours e confraternizações.",
      icon: Users,
    },
    {
      title: "Sabor Autêntico",
      description:
        "Pratos e drinks preparados com ingredientes selecionados e cuidado.",
      icon: Utensils,
    },
  ];

  return (
    <div className="pt-12 md:pt-24 font-sans text-gray-900">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${barcelos})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <Utensils className="w-14 h-14 text-amber-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Bar <span className="text-amber-400">Barcelos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Um espaço acolhedor no coração do Clube Português — tradição,
            sabor e boas histórias.
          </p>
          
        </motion.div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              A Essência do <span className="text-emerald-600">Bar Barcelos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Inspirado nas raízes portuguesas, o Bar Barcelos combina tradição
              e modernidade em um ambiente que valoriza o sabor, a boa
              companhia e o prazer de compartilhar momentos únicos.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cada detalhe é pensado para oferecer conforto, qualidade e uma
              experiência memorável — do atendimento ao último gole.
            </p>

            <div className="flex gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-red-100 rounded-2xl p-6 shadow-sm text-center w-full">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <p className="text-gray-600 text-sm">Atendimento de Qualidade</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-red-100 rounded-2xl p-6 shadow-sm text-center w-full">
                <div className="text-3xl font-bold text-amber-600">Tradição</div>
                <p className="text-gray-600 text-sm"> Você Encontra Aqui!</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={barcelossalgados}
                alt="Ambiente do Bar Barcelos"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-4 sm:p-6 shadow-lg text-center">
              <Utensils className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-800">Sabor e Tradição</div>
              <div className="text-sm text-gray-500">Anos de história</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ambience */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Mais que um <span className="text-emerald-600">Bar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Um ambiente sofisticado, descontraído e cheio de vida —
              perfeito para celebrar os melhores momentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ambiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-10 bg-white/70 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-emerald-600 to-red-500 mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-gradient-to-r from-emerald-900 to-amber-800 text-white text-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Clock className="w-12 h-12 mx-auto mb-6 text-amber-300" />
            <h3 className="text-2xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="text-amber-100 space-y-2 text-lg">
              <p>Terça a Sexta: 9h às 17h</p>
              <p>Sábado: 9h às 16h</p>
              <p>Domingo: 9h às 16h</p>
              <p className="opacity-80 text-sm mt-4">Segunda: Fechado</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-12 h-12 mx-auto mb-6 text-amber-300" />
            <h3 className="text-2xl font-bold mb-4">Localização</h3>
            <div className="text-amber-100 space-y-2 text-lg">
              <p>Dentro do Clube Português do Recife</p>
              <p>Próximo à Quadra de Esportes</p>
              <p>Entrada independente disponível</p>
              <p className="text-sm opacity-80 mt-3">
                Acesso para não-sócios também
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Barcelos;
