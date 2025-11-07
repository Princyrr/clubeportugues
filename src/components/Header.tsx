import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Quem Somos', path: '/quem-somos' },
    {
      name: 'Serviços',
      path: '#',
      submenu: [
        { name: 'Serviços', path: '/servicos/servicos' },
        { name: 'Adega Restaurante', path: '/servicos/restaurante' },
        { name: 'Bar Barcelos', path: '/servicos/barcelos' },
        { name: 'Agenda de Eventos', path: '/servicos/agenda-shows' },
        { name: 'Notícias', path: '/servicos/noticias' },
        { name: "Balancetes", path: "/balancetes" }

      ],
    },
    { name: 'Fale Conosco', path: '/fale-conosco' },
    {
      name: 'Portal',
      path: 'https://portal.multiclubes.com.br/clubeportuguesrecife/login.aspx?ReturnUrl=%2fclubeportuguesrecife%2f',
      external: true,
    },
  ];

  return (
    <motion.header
      className="fixed w-full top-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fundo gradiente fixo */}
    <div
  className={`absolute inset-0 transition-colors duration-300 ${
    scrolled
      ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 backdrop-blur-md shadow-lg'
      : 'bg-gradient-to-r from-green-800/80 to-red-800/80'
  }`}
/>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-16 md:h-20 lg:h-24">

          {/* Logo + Nome */}
          <Link
            to="/"
            className="flex items-center relative z-10 space-x-4"
            onClick={scrollToTop}
          >
            <img
              src="/Logo.png"
              alt="Clube Português do Recife"
              className="
                h-10 sm:h-12 md:h-14 lg:h-16 transition-transform duration-300 hover:scale-105
              "
            />
            <span
              className={`flex flex-col leading-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold tracking-wide">
                Clube Português
              </span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                do Recife
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative z-10">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span
                      className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
                        scrolled ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-all duration-300 ${
                        scrolled ? 'text-gray-800' : 'text-white'
                      } ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-800 transition-colors duration-200 font-medium"
                              onClick={() => {
                                setIsServicesOpen(false);
                                scrollToTop();
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium transition-colors duration-300 hover:text-yellow-500 ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-300 hover:text-yellow-400 ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    } ${location.pathname === item.path ? 'text-yellow-400' : ''}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 relative z-10 ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white rounded-lg mt-2 overflow-hidden shadow-xl relative z-10"
            >
              <div className="py-2 sm:py-4 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-2 sm:py-3 text-left text-gray-800 hover:bg-green-50 font-medium"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-8 py-1 sm:py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 transition-colors duration-200"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsServicesOpen(false);
                                    scrollToTop();
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 sm:py-3 text-gray-800 hover:bg-green-50 hover:text-green-800 transition-colors duration-200 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 sm:py-3 text-gray-800 hover:bg-green-50 hover:text-green-800 transition-colors duration-200 font-medium ${
                          location.pathname === item.path ? 'bg-green-50 text-green-800' : ''
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          scrollToTop();
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

