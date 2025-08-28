import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Tag } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();

  // In a real app, you'd fetch this data based on the ID
  const article = {
    id: 1,
    title: 'Nova temporada de shows de Fado começa em março',
    content: `
      <p>A nova temporada de shows de Fado no Clube Português do Recife promete emocionar todos os amantes da música tradicional portuguesa. Com início previsto para março, a programação conta com grandes nomes do fado contemporâneo e clássico.</p>
      
      <p>O evento de abertura contará com a participação especial da fadista Maria Fernanda, diretamente de Lisboa, que interpretará clássicos como "Lágrima" e "Gaivota", além de apresentar composições próprias de seu mais recente álbum.</p>
      
      <h3>Programação Completa</h3>
      
      <p>Durante os três meses de temporada, o clube receberá diferentes artistas a cada quinzena, oferecendo uma variedade única de estilos e interpretações do fado. Entre os destaques confirmados estão:</p>
      
      <ul>
        <li><strong>Maria Fernanda</strong> - 15 de março</li>
        <li><strong>João Braga</strong> - 29 de março</li>
        <li><strong>Ana Moura Jr.</strong> - 12 de abril</li>
        <li><strong>Carlos Santana (fadista)</strong> - 26 de abril</li>
      </ul>
      
      <p>Cada apresentação terá início às 20h30, no salão principal do clube, com capacidade limitada para garantir uma experiência íntima e autêntica. O ambiente será preparado especialmente para criar a atmosfera tradicional das casas de fado portuguesas.</p>
      
      <h3>Ingressos e Reservas</h3>
      
      <p>Os ingressos já estão disponíveis na secretaria do clube e através do telefone (81) 3333-4444. Sócios do clube têm desconto especial de 30% em todos os shows da temporada.</p>
      
      <p>Para proporcionar a melhor experiência possível, será servido um menu especial com petiscos portugueses e uma seleção de vinhos da nossa adega, harmonizados especialmente para cada apresentação.</p>
      
      <p>Esta temporada marca mais um importante evento cultural do Clube Português do Recife, reafirmando nosso compromisso em manter vivas as tradições lusitanas e oferecer cultura de qualidade para nossos associados e visitantes.</p>
    `,
    author: 'Maria Santos',
    date: '2025-01-15',
    category: 'eventos',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '5 min'
  };

  const relatedArticles = [
    {
      id: 4,
      title: 'Festival de Cultura Portuguesa movimenta o clube',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Novo chef português renova cardápio do restaurante',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-32">
      {/* Back Button */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/servicos/noticias"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar às Notícias
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium capitalize bg-green-50 px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(article.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <div className="flex items-center text-gray-500 text-sm">
                <User className="w-4 h-4 mr-1" />
                {article.author}
              </div>
              
              <span className="text-gray-500 text-sm">{article.readTime} de leitura</span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Share Button */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-green prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{article.author}</h4>
                    <p className="text-gray-600 text-sm">Redação Clube Português</p>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Artigos Relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/servicos/noticias/${relatedArticle.id}`}
                    className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-300">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                to="/servicos/noticias"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Todas as Notícias
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;