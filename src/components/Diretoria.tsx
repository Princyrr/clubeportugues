
import { motion } from "framer-motion";

const Diretoria = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Diretoria <span className="text-red-600">2025</span>
        </motion.h2>

        {/* Presidente e Vice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 text-center">
          <div>
            <img
              src="/presidente.png"
              alt="Presidente"
              className="w-64 h-72 object-cover rounded-2xl shadow-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Presidente</h3>
            <p className="text-gray-700">
              DANIEL FERREIRA RODRIGUES
            </p>
          </div>
          <div>
            <img
              src="/vicepresidente.png"
              alt="Vice-Presidente"
              className="w-64 h-72 object-cover rounded-2xl shadow-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Vice-Presidente</h3>
            <p className="text-gray-700">
              CELSO STAMFORD GASPAR
            </p>
          </div>
        </div>

        {/* Departamentos */}
        <div className="space-y-10">
          <h3 className="text-2xl font-semibold text-gray-900">
            Departamentos
          </h3>

          <div>
            <p className="font-bold">ADMINISTRATIVO:</p>
            <p className="text-gray-700">
              WALDOMIRO MARIANO SÁ FILHO
            </p>
          </div>

          <div>
            <p className="font-bold">COMERCIAL:</p>
            <p className="text-gray-700">
              AMERICO MARTINS BARBOSA
             
            </p>
            <p className="text-gray-700">
             
              BENTO DOMINGOS DOS SANTOS ROMEIRA DE SÁ
            </p>
          </div>

          <div>
            <p className="font-bold">COMUNICAÇÃO:</p>
            <p className="text-gray-700">CÉLIA STAMFORD GASPAR AMARAL</p>
            <p className="text-gray-700">ROBERTA MARIA TEJO CAMINHA</p>
          </div>

          <div>
            <p className="font-bold">CULTURAL:</p>
            <p className="text-gray-700">
              SILVIO AMORIM
            </p>
          </div>

          <div>
            <p className="font-bold">ENGENHARIA E PLANEJAMENTO:</p>
            <p className="text-gray-700">
             LUIZ MOURA DE SANTANA
            </p>
          </div>

          <div>
            <p className="font-bold">ESPORTES:</p>
            <p className="text-gray-700">
              INÁCIO DE BARROS MELO NETO
            </p>
            <p className="text-gray-700">
              FELIPE TADEU MOREIRA LIMA RÊGO BARROS
            </p>
          </div>

          <div>
            <p className="font-bold">FEMININO:</p>
            <p className="text-gray-700">
              ELIANE DE LEMOS RODRIGUES
            </p>
            <p className="text-gray-700">
              RUBIA PRISCILA PARISIO GASPAR
            </p>
          </div>

          <div>
            <p className="font-bold">FINANCEIRO:</p>
            <p className="text-gray-700">ATENIENSE ALVES MACHADO JUNIOR</p>
            <p className="text-gray-700">BENTO DOMINGOS TAVARES ROMEIRA</p>
          </div>

          <div>
            <p className="font-bold">SEGURANÇA:</p>
            <p className="text-gray-700">ERICK MARCÍLIO APRIGIO DA SILVA</p>
          </div>

          
          <div>
            <p className="font-bold">JURÍDICO:</p>
            <p className="text-gray-700">ALESSANDRO LUIS COUTO RODRIGUES</p>
          </div>

          <div>
            <p className="font-bold">PATRIMÔNIO E MANUTENÇÃO:</p>
            <p className="text-gray-700">
             DANIEL DE LEMOS RODRIGUES
            </p>
            <p className="text-gray-700">
             PAULINO JOSÉ DOS SANTOS ROMEIRA DE SÁ FERREIRA
            </p>
          </div>

          <div>
            <p className="font-bold">SOCIAL:</p>
            <p className="text-gray-700">PAULO DE TARSO DORNELAS DE ANDRADE</p>
            <p className="text-gray-700">MARIA LÚCIA BRAVO CISNEIRO CAVALCANTI</p>
          </div>
        </div>

        {/* Mesa da Assembleia Geral */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Mesa da Assembleia Geral
          </h3>
          <p><b>Presidente:</b> João Fernandes Bravo Filho</p>
          <p><b>Vice-Presidente:</b> Joaquim Francisco de Souza</p>
          <p><b>1° Secretário:</b> Louise Lettieri Vilella</p>
          <p><b>2° Secretário:</b> Luiz Carlos Bezerra Cavalcanti</p>
        </div>

        {/* Conselho Deliberativo */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Conselho Deliberativo
          </h3>
          <p><b>Presidente:</b> Rodrigo Ferreira Santos</p>
          <p><b>Vice-Presidente:</b> José Carlos Lopes Tinoco</p>
          <p><b>1° Secretário:</b> Antônio Carlos de Matos Lyra</p>
          <p><b>2° Secretário:</b> Marco Antônio Muniz Maciel</p>
        </div>

        {/* Conselho Fiscal */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Conselho Fiscal
          </h3>
          <p><b>Efetivos:</b> Antônio José Dias de Oliveira Peixoto, Daniel Ferreira Rodrigues, Vicente Manuel Miranda Reis de Melo</p>
          <p><b>Suplentes:</b> Jorge Luiz Pinto Barbosa, Roberto Vilela de Melo e Silva, Daniel Melo do Carmo</p>
        </div>
      </div>
    </section>
  );
};

export default Diretoria;

