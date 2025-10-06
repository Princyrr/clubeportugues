
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import VisitCounter from "./VisitCounter";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Logo.png"
                alt="Logo Clube Português"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Clube Português</h3>
                <p className="text-yellow-200">do Recife</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Tradição, cultura e esporte desde 1934. O melhor clube social do Recife.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/clubeportuguesoficial/?locale=pt_BR" className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/clubeportuguesdorecife/" className="text-white hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Início</Link></li>
              <li><Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors duration-300">Quem Somos</Link></li>
              <li><Link to="/fale-conosco" className="text-gray-300 hover:text-white transition-colors duration-300">Fale Conosco</Link></li>
              <li><Link to="/portal" className="text-gray-300 hover:text-white transition-colors duration-300">Portal</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Serviços</h4>
            <ul className="space-y-2">
              <li><Link to="/servicos/servicos" className="text-gray-300 hover:text-white transition-colors duration-300">Serviços</Link></li>
              <li><Link to="/servicos/restaurante" className="text-gray-300 hover:text-white transition-colors duration-300">Restaurante Adega</Link></li>
              <li><Link to="/servicos/barcelos" className="text-gray-300 hover:text-white transition-colors duration-300">Bar Barcelos</Link></li>
              <li><Link to="/servicos/agenda-shows" className="text-gray-300 hover:text-white transition-colors duration-300">Agenda de Shows</Link></li>
            <li><Link to="/servicos/noticias" className="text-gray-300 hover:text-white transition-colors duration-300">Noticias</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contato</h4>
            <div className="space-y-3">
              
              {/* Endereço */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <span className="text-gray-300">
                  Avenida Conselheiro Rosa e Silva, 172 - Recife  (PE)
                </span>
              </div>

              {/* Telefone e WhatsApp alinhados verticalmente */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">(81) 3231-5400</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <a
                    href="https://wa.me/5581982524617"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    (81) 98252-4617
                  </a>
                </div>
              </div>

              
 <div className="flex items-start space-x-3">
  <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
  <span className="text-gray-300 break-words max-w-full lg:max-w-[400px]">
    portugues@clubeportuguesdorecife.com.br
  </span>
</div>



            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
         <VisitCounter />
          <p className="text-gray-300">
            © 2025 Clube Português do Recife. Desenvolvido por Priscila Ramonna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
