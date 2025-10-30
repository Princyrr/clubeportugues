import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

// Importar todas as imagens locais
import noticia1 from '../../assets/noticia1.jpg';
import noticia2 from '../../assets/noticia2.jpg';
import noticia3 from '../../assets/noticia3.jpg';
import noticia4 from '../../assets/noticia4.png';
import noticia5 from '../../assets/noticia5.png';
import noticia6 from '../../assets/noticia6.png';
import noticia7 from '../../assets/noticia7.png';
import noticia8 from '../../assets/noticia8.png';
import noticia9 from '../../assets/noticia9.jpg';
import noticia10 from '../../assets/noticia10.jpg';
import noticia11 from '../../assets/noticia11.png';
import noticia12 from '../../assets/noticia12.png';
import noticia13 from '../../assets/noticia13.png';
import noticia14 from '../../assets/noticia14.png';
import noticia15 from '../../assets/noticia15.png';


// 🔥 Importar capa da notícia 7 (apenas galeria1 será usada na listagem)
import galeria1 from '../../assets/galeria1.jpg';

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
      title: 'Novo Presidente e o Vice Precidente',
      excerpt: 'No dia 25 de agosto de 2025, o Clube Português do Recife realizou a eleição que definiu seu novo Presidente e Vice-Presidente.',
      content: 'A nova temporada de shows de Fado no Clube Português do Recife promete emocionar...',
      author: 'Priscila',
      date: '2025-08-29',
      category: 'eventos',
      image: noticia1,
      featured: false
    },
   {
  id: 2,
  title: 'Técnica Convocada',
  excerpt: 'Com muito orgulho, o Clube Português do Recife anuncia a convocação da treinadora Keycy Florêncio para integrar a Seleção Brasileira de Natação.',
  content: 'É SELEÇÃO BRASILEIRA! 🇧🇷 Entre os dias 10 e 16 de novembro de 2025, na Bolívia, acontecerá a Copa Pacífico de Natação e nossa treinadora Keycy Florêncio representará o Clube Português do Recife na Seleção Brasileira. Orgulho CPR! ❤️💚',
  author: 'Priscila',
  date: '2025-09-24',
  category: 'esporte',
  image: noticia2,
  featured: false
},

    {
      id: 3,
      title: 'Novo chef português renova cardápio do restaurante',
      excerpt: 'O Chef traz novidades da culinária tradicional portuguesa.',
      content: 'O restaurante do clube recebe um novo chef, diretamente de Lisboa...',
      author: 'Ana Costa',
      date: '2025-01-10',
      category: 'gastronomia',
      image: noticia3,
      featured: false
    },
    {
      id: 4,
      title: '🏆 CAMPEÃS DO BRASIL 2025!',
      excerpt: 'O Clube Português conquista, pela sexta vez, o título de Campeão Brasileiro Júnior de Handebol Feminino!',
      content: 'Handebol',
      author: 'Diretoria',
      date: '2025-06-26',
      category: 'esportes',
      image: noticia4,
      featured: false
    },
    {
      id: 5,
      title: 'Convocação para Seleção Brasileira',
      excerpt: 'Adrielly Alana e Ana Clara Lyra foram convocadas para a Seleção Brasileira de Natação.',
      content: 'Nossa adega foi renovada com uma seleção exclusiva...',
      author: 'Priscila',
      date: '2025-08-31',
      category: 'esportes',
      image: noticia5,
      featured: false
    },
    {
      id: 6,
      title: 'Gratidão e Reconhecimento',
      excerpt: 'Estamos nos aproximando de um novo ciclo no Clube Português do Recife, não poderíamos deixar de registrar nossa sincera gratidão.',
      content: 'Gratidão e Reconhecimento',
      author: 'Priscila',
      date: '2025-08-30',
      category: 'eventos',
      image: noticia6,
      featured: false
    },
    {
      id: 7,
      title: 'Posse do Presidente e Vice-Presidente',
      excerpt: 'A cerimônia de posse aconteceu no dia 01/09/2025, marcando o início de um novo ciclo no Clube Português do Recife.',
      content: 'A posse oficial do Presidente Daniel Ferreira Rodrigues e do Vice-Presidente Celso Stamford Gaspar...',
      author: 'Diretoria',
      date: '2025-09-04',
      category: 'eventos',
      // 🔥 Usar apenas galeria1 como capa na listagem
      image: galeria1,
      featured: false
    },
   {
  id: 8,
  title: 'Handebol: Campeonato Brasileiro 2025',
  excerpt: 'Em último jogo da chave contra a equipe de @ahbchandebol as lusas saem da disputa com a vitória pelo placar de FMO/PORTUGUÊS 30 X 21 FMEBC-SC e o primeiro lugar do grupo B do Campeonato Brasileiro de handebol Juvenil Feminino 2025.',
  content: 'Em último jogo da chave contra a equipe de @ahbchandebol as lusas saem da disputa com a vitória pelo placar de FMO/PORTUGUÊS 30 X 21 FMEBC-SC e o primeiro lugar do grupo B do Campeonato Brasileiro de handebol Juvenil Feminino 2025.',
  author: 'Diretoria de Esportes',
  date: '2025-09-27',
  category: 'esportes',
  image: noticia7,
  featured: false
},
 {
  id: 9,
  title: 'Natação: Convocadas para defender o Brasil na Copa Pacífico',
  excerpt: 'As adolescentes pernambucanas convocadas para defender o Brasil na Copa Pacífico.',
  content: 'As adolescentes pernambucanas convocadas para defender o Brasil na Copa Pacífico.',
  author: 'Priscila',
  date: '2025-10-01',
  category: 'esportes',
  image: noticia8,
  featured: false
},
{
  id: 10,
  title: 'Bar Barcelos temporariamente fechado',
  excerpt: 'Vem novidade boa por aí, com nova administração e muitas surpresas! Aguardem!!!',
  content: 'Vem novidade boa por aí, com nova administração e muitas surpresas! Aguardem!!!',
  author: 'Priscila',
  date: '2025-10-01',
  category: 'gastronomia',
  image: noticia9,
  featured: false
},
{
  id: 12,
  title: 'Comunicado Importante',
  excerpt: 'Reafirmamos nosso compromisso com a segurança e o bem-estar dos Associados e convidados!',
  content: 'Reafirmamos nosso compromisso com a segurança e o bem-estar dos Associados e convidados!',
  author: 'Diretoria do Clube',
  date: '2025-10-03',
  category: 'gastronomia',
  image: noticia10,
  featured: false
},
{
  id: 13,
  title: 'Lusos na Seleção 🇧🇷',
  excerpt: 'Nossa atleta Julia Gabrielly e nosso treinador João Prestrelo representaram o Brasil no Sul-Centro Americano Sub-15 em Assunção, Paraguai, conquistando o 3º lugar! ',
  content: 'Nossa atleta Julia Gabrielly e nosso treinador João Prestrelo representaram o Brasil no Sul-Centro Americano Sub-15 em Assunção, Paraguai, conquistando o 3º lugar! ',
  author: 'Clube Português do Recife',
  date: '2025-10-02',
  category: 'esporte',
  image: noticia11,
  featured: false
},
{
  id: 14,
  title: 'Novo Horário da Secretaria',
  excerpt: 'Informamos que a Secretaria do Clube Português do Recife está com novo horário de funcionamento.',
  content: 'Informamos que a Secretaria do Clube Português do Recife está com novo horário de funcionamento. ',
  author: 'Secretaria',
  date: '2025-10-07',
  category: 'todas',
  image: noticia12,
  featured: true
},
{
  id: 15,
  title: ' Orgulho Luso no Handebol!',
  excerpt: 'Quatro jogadoras formadas no FMO/Clube Português foram convocadas para a Seleção Brasileira de Handebol.',
  content: 'Quatro jogadoras formadas no FMO/Clube Português foram convocadas para a Seleção Brasileira de Handebol. ',
  author: 'Diretoria de Esportes',
  date: '2025-10-17',
  category: 'esporte',
  image: noticia13,
  featured: false
},
{
  id: 16,
  title: 'Tetracampeão Brasileiro de Handebol ',
  excerpt: 'Fmo/Clube Português é tetracampeão brasileiro de handebol na categoria cadete!',
  content: 'Fmo/Clube Português é tetracampeão brasileiro de handebol na categoria cadete! ',
  author: 'Diretoria de Esportes',
  date: '2025-10-25',
  category: 'esporte',
  image: noticia14,
  featured: false
},
{
  id: 17,
  title: 'Restaurante Adega ',
  excerpt: 'O Restaurante Adega do Clube Português agora está sob a administração da Garrafeira Brasil',
  content: 'O Restaurante Adega do Clube Português agora está sob a administração da Garrafeira Brasil',
  author: 'Clube Português',
  date: '2025-10-30',
  category: 'gastronomia',
  image: noticia15,
  featured: false
}



  ];

  // Ordena sempre do maior id para o menor
  const sortedNews = [...newsArticles].sort((a, b) => b.id - a.id);

  // Aplica filtros
  const filteredNews = sortedNews.filter(article => {
    const matchesCategory = selectedCategory === 'todas' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Destaque
  const featuredArticle = sortedNews.find(article => article.featured);

  // Divide em recentes e antigas
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  const recentArticles = filteredNews.filter(article => new Date(article.date) >= oneMonthAgo && !article.featured);

  // Notícias antigas (mais de 30 dias atrás)
  const oldNews = sortedNews.filter(article => {
    const articleDate = new Date(article.date);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return articleDate < thirtyDaysAgo;
  });

  return (
    <div className="pt-12 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 via-green-800 to-red-800 overflow-hidden">
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
                <div className="h-96 lg:h-full">
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

      {/* Recent News Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {recentArticles.length === 0 ? (
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
              {recentArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-96 overflow-hidden">
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

      {/* Old News List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Notícias Anteriores
          </h2>

          <div className="space-y-6">
            {oldNews.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                {/* Thumbnail */}
                <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </span>
                    <Link
                      to={`/servicos/noticias/${article.id}`}
                      className="text-green-600 hover:text-green-800 font-medium flex items-center"
                    >
                      Ler Mais
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-red-800">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-6">
        Fale com o Clube Português do Recife
      </h2>
      <p className="text-xl text-gray-200 mb-8">
        Para saber mais informações sobre o <strong>Clube Português do Recife</strong>,
        eventos, atividades e serviços disponíveis, entre em contato conosco.
      </p>

      <div className="flex justify-center">
        <a
          href="/fale-conosco"
          className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
        >
          Fale Conosco
        </a>
      </div>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default News;
