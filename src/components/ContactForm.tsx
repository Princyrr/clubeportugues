import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const inputFocus = {
  scale: 1.01,
  boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.5)",
  borderColor: "#22c55e",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const whatsappNumber = "5581982524617"; 
  const addressText = "Avenida Conselheiro Rosa e Silva, 172";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `
📩 *Novo contato pelo site*:

👤 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone || 'Não informado'}
📌 Assunto: ${formData.subject}
📝 Mensagem: ${formData.message}
    `;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const ContactItem: React.FC<{ Icon: React.ElementType, title: string, content: React.ReactNode }> = 
    ({ Icon, title, content }) => (
    <div className="flex items-start space-x-3 lg:space-x-4">
      <div className="bg-gradient-to-r from-green-600 to-red-600 p-2 lg:p-3 rounded-xl shadow-md flex-shrink-0">
        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </div>
      <div>
        <h4 className="font-bold text-base lg:text-lg text-gray-900 mb-0.5 lg:mb-1">{title}</h4>
        <p className="text-sm lg:text-base text-gray-600">{content}</p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }} 
      className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 w-full min-h-screen pt-12 pb-20 px-4 font-sans" 
    >
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-12 text-center relative"
        >
          <span className="text-red-700"> Fale </span> Conosco
          <span className="block w-20 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto mt-3 rounded-full"></span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video"
        >
          <iframe
            title="Localização - Avenida Conselheiro Rosa e Silva, 172"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4891176212555!2d-34.89677352355815!3d-8.051805590924967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab188c01d4df71%3A0xd6e5f381c8b3234d!2sAv.%20Conselheiro%20Rosa%20e%20Silva%2C%20172%20-%20Gra%C3%A7as%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-4 lg:space-y-8"> 
              <ContactItem 
                Icon={MapPin} 
                title="Localização" 
                content={
                  <>
                    {addressText}<br />
                    Graças - Recife/PE - CEP: 52020-220
                  </>
                }
              />
              <ContactItem 
                Icon={Phone} 
                title="Telefones" 
                content={
                  <>
                    (81) 3231-5400 <br />
                    (81) 98252-4617
                  </>
                }
              />
              
              <ContactItem 
                Icon={Clock} 
                title="Horário de Funcionamento" 
                content={
                  <>
                    Seg a Sex: 6h às 21h<br />
                    Fins de Semana/Feriados: 8h às 16h
                  </>
                }
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-6 lg:pt-0" 
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    whileFocus={inputFocus} 
                    transition={{ duration: 0.2 }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none transition-all duration-300 placeholder-gray-400"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    whileFocus={inputFocus}
                    transition={{ duration: 0.2 }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none transition-all duration-300 placeholder-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    whileFocus={inputFocus}
                    transition={{ duration: 0.2 }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none transition-all duration-300 placeholder-gray-400"
                    placeholder="(81) 99999-9999"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors duration-300 appearance-none bg-white pr-10" 
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3e%3cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="associacao">Associação</option>
                    <option value="eventos">Eventos</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="esportes">Esportes</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  whileFocus={inputFocus}
                  transition={{ duration: 0.2 }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none transition-all duration-300 resize-none placeholder-gray-400"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }} 
                transition={{ duration: 0.1 }}
                className="w-full bg-gradient-to-r from-green-700 to-red-700 text-white font-bold tracking-wide py-3 sm:py-4 px-6 rounded-xl shadow-lg hover:from-green-800 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-3 text-base sm:text-lg uppercase"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
