import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todas', name: 'Todas' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'esportes', name: 'Esportes' },
    { id: 'gastronomia', name: 'Gastronomia' },
    { id: 'cultura', name: 'Cultura' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Nova temporada de shows de Fado começa em março',
      excerpt: 'Grandes nomes do fado português se apresentarão no clube durante toda a temporada de outono.',
      content: 'A nova temporada de shows de Fado no Clube Português do Recife promete emocionar...',
      author: 'Maria Santos',
      date: '2025-01-15',
      category: 'eventos',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Equipe de futebol conquista título estadual',
      excerpt: 'Após uma campanha brilhante, nosso time de futebol trouxe mais um troféu para casa.',
      content: 'Em uma final emocionante, a equipe de futebol do Clube Português...',
      author: 'João Silva',
      date: '2025-01-12',
      category: 'esportes',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Novo chef português renova cardápio do restaurante',
      excerpt: 'Chef António Rodrigues traz novidades da culinária tradicional portuguesa.',
      content: 'O restaurante do clube recebe um novo chef, diretamente de Lisboa...',
      author: 'Ana Costa',
      date: '2025-01-10',
      category: 'gastronomia',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Festival de Cultura Portuguesa movimenta o clube',
      excerpt: 'Três dias de celebração da rica cultura lusitana com música, dança e gastronomia.',
      content: 'O Festival de Cultura Portuguesa foi um sucesso absoluto...',
      author: 'Pedro Oliveira',
      date: '2025-01-08',
      category: 'cultura',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Adega recebe novos rótulos portugueses exclusivos',
      excerpt: 'Seleção especial de vinhos diretamente das melhores vinícolas do Douro e Alentejo.',
      content: 'Nossa adega foi renovada com uma seleção exclusiva...',
      author: 'Carlos Mendes',
      date: '2025-01-05',
      category: 'gastronomia',
      image: 'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Natação: atletas do clube se destacam em competição nacional',
      excerpt: 'Jovens promessas da natação conquistam medalhas em campeonato brasileiro.',
      content: 'A equipe de natação do clube teve uma performance excepcional...',
      author: 'Sofia Fernandes',
      date: '2025-01-03',
      category: 'esportes',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'todas' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 via-green-800 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Calendar className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-yellow-400">Notícias</span> do Clube
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Fique por dentro de tudo que acontece no Clube Português do Recife
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-600 to-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'todas' && !searchTerm && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-green-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredArticle.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    
                    <Link
                      to={`/servicos/noticias/${featuredArticle.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Ler Mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularArticles.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhuma notícia encontrada
              </h3>
              <p className="text-gray-500">
                Tente ajustar os filtros ou termo de busca
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Tag className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600 font-medium capitalize">
                          {article.category}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      
                      <Link
                        to={`/servicos/noticias/${article.id}`}
                        className="text-green-600 hover:text-green-800 font-medium flex items-center transition-colors duration-300"
                      >
                        Ler Mais
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Receba Nossas Notícias
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Cadastre-se em nossa newsletter e fique sempre informado sobre os eventos e novidades do clube
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                Cadastrar
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;