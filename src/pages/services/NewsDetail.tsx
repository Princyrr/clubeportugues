
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

import noticia1 from '../../assets/noticia1.jpg';
import noticia2 from '../../assets/noticia2.jpg';
import noticia3 from '../../assets/noticia3.jpg';
import noticia4 from '../../assets/noticia4.png';
import noticia5 from '../../assets/noticia5.png';
import noticia6 from '../../assets/noticia6.png';
import noticia7 from '../../assets/noticia7.png';
import noticia8 from '../../assets/noticia8.png';
import noticia9 from '../../assets/noticia9.jpg';

// Importando imagens da galeria da posse
import galeria1 from '../../assets/galeria1.jpg';
import galeria2 from '../../assets/galeria2.jpg';
import galeria3 from '../../assets/galeria3.jpg';
import galeria4 from '../../assets/galeria4.jpg';
import galeria5 from '../../assets/galeria5.jpg';
import galeria6 from '../../assets/galeria6.jpg';
import galeria7 from '../../assets/galeria7.jpg';

// Array de artigos
const newsArticles = [
  {
    id: 1,
    title: 'Novo Presidente e Vice-Presidente',
    content: `
      <p style="text-align: justify;">
  A eleição para o novo Presidente e Vice-Presidente do Clube Português do Recife aconteceu no dia 25/08/2025. 
  O processo foi transparente e contou com a participação ativa dos associados, garantindo legitimidade à nova diretoria. 
  O evento ainda contou com apresentações de grandes nomes do fado, celebrando a cultura portuguesa e reforçando a tradição do clube.
A <strong>Chapa 1</strong> foi eleita para conduzir o futuro do <strong>Clube Português do Recife</strong>!<br></p>
<p style="text-align: justify;">
  Com grande alegria anunciamos a vitória e reafirmamos nosso compromisso com a 
  <strong>emoção, gratidão e união</strong> que sempre marcaram a trajetória desta casa. Os sócios proprietários escolheram, democraticamente, a continuidade da tradição e o fortalecimento das nossas raízes portuguesas, 
  que seguem vivas em cada conquista e em cada passo dado juntos. </p>
<br><br>
<p style="text-align: justify;">
  📅 <strong>Biênio 01/09/2025 a 31/08/2027</strong><br>
  👤 <strong>Presidente eleito:</strong> Daniel Ferreira Rodrigues<br>
  👤 <strong>Vice-presidente eleito:</strong> Celso Stamford Gaspar<br>
</p><br><br>
<p style="text-align: justify;">
  O futuro já começou, e ele é construído por todos nós! Unidos, vamos escrever mais um capítulo de orgulho, história e pertencimento 
  no Clube Português do Recife. ✨
</p>
    `,
    author: 'Priscila',
    date: '2025-08-28',
    category: 'eventos',
    image: noticia1,
    readTime: '2 min'
  },
 {
  id: 2,
  title: 'Técnica Convocada para a Seleção Brasileira',
  content: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">

      <h2 style="color:#006400; text-align:center;">🇧🇷 É SELEÇÃO BRASILEIRA! 🇧🇷</h2>

      <p style="text-align: justify;">
        O <strong>Clube Português do Recife</strong> tem a imensa alegria de anunciar que a 
        <strong>treinadora Keycy Florêncio</strong> foi oficialmente convocada para integrar a 
        <strong>Seleção Brasileira de Natação</strong>.  
      </p>

      <p style="text-align: justify;">
        Esse é mais um marco histórico não apenas para nossa instituição, mas também para todo o esporte pernambucano, 
        reforçando o talento, a dedicação e a excelência de Keycy em sua trajetória profissional.  
      </p>

      <div style="margin: 20px 0; padding: 15px; border-left: 4px solid #006400; background:#f9f9f9;">
        <h3 style="color:#333;">📅 Linha do Tempo da Competição</h3>
        <ul style="list-style:none; padding-left:10px;">
          <li>✅ <strong>Convocação Oficial:</strong> Setembro de 2025</li>
          <li>🌍 <strong>Local:</strong> Bolívia</li>
          <li>🏊 <strong>Competição:</strong> Copa Pacífico de Natação</li>
          <li>📆 <strong>Datas:</strong> 10 a 16 de novembro de 2025</li>
        </ul>
      </div>

      <p style="text-align: justify;">
        A participação da nossa treinadora nesta importante competição internacional reafirma o compromisso do 
        <strong>CPR</strong> em contribuir para o desenvolvimento do esporte nacional.  
      </p>

      <p style="text-align: center; font-size:1.1em; font-weight:bold; color:#d32f2f;">
        Parabéns, Keycy! Você é motivo de orgulho para todo o CPR e para Pernambuco. ❤️💚
      </p>
    </div>
  `,
  author: 'Priscila',
  date: '2025-09-24',
  category: 'esportes',
  image: noticia2,
  readTime: '3 min'
}
,
  {
    id: 3,
    title: 'Novo chef português renova cardápio do restaurante',
    content: `
      <p>O restaurante do clube recebe um novo chef, diretamente de Lisboa, trazendo sabores autênticos da culinária portuguesa...</p>
    `,
    author: 'Ana Costa',
    date: '2025-01-10',
    category: 'gastronomia',
    image: noticia3,
    readTime: '4 min'
  },
  {
    id: 4,
    title: '🏆 CAMPEÃS DO BRASIL 2025!',
    content: `
       <p style="text-align: justify;"> O Clube Português conquista, pela sexta vez, o título de Campeão Brasileiro Júnior de Handebol Feminino!!!
No domingo (22/05), nossas guerreiras venceram o Esporte Clube Pinheiros por 27x25, em uma final eletrizante no Poliesportivo Henrique Villaboim, em São Paulo.
Com garra, talento e espírito de equipe, nosso time superou a pressão e garantiu a vitória histórica!

A diretoria do Clube Português parabeniza atletas, comissão técnica e todos os envolvidos, por essa conquista grandiosa e agradece ao apoio fundamental do nosso patrocinador @fmo.edu.br

Orgulho de Pernambuco!</p>
    `,
    author: 'Diretoria',
    date: '2025-06-26',
    category: 'esportes',
    image: noticia4,
    readTime: '6 min'
  },
  {
    id: 5,
    title: 'Convocadas para a Seleção Brasileira de Natação',
    content: `
    <p style="text-align: justify;">
      O Clube Português tem a honra de anunciar que as atletas <strong>Adrielly Alana</strong> e <strong>Ana Clara Lyra</strong> foram convocadas para integrar a <strong>Seleção Brasileira de Natação</strong>.
    </p>
    `,
    author: 'Priscila',
    date: '2025-08-31',
    category: 'esportes',
    image: noticia5,
    readTime: '2 min'
  },
  {
    id: 6,
    title: '✨ Gratidão e reconhecimento ✨',
    content: `
    <p style="text-align: justify;">
  Ao nos aproximarmos de um novo ciclo no <strong>Clube Português do Recife</strong>, não poderíamos deixar de registrar nossa sincera gratidão aos presidentes que conduziram esta instituição com dedicação e compromisso: 
  <strong>Fernando Medicis Pinto</strong> (2017 – 2023) e <strong>João Jorge Barbosa Marinho</strong> (2023 – 2025).  
  Seus esforços, visão e trabalho incansável foram fundamentais para fortalecer nossa tradição, valorizar nossa comunidade e preparar o caminho para os próximos capítulos da nossa história.
</p>

    `,
    author: 'Diretoria do Clube',
    date: '2025-08-30',
    category: 'eventos',
    image: noticia6, 
    readTime: '4 min'
  },
  {
    id: 7,
    title: 'Posse do Presidente e Vice-Presidente',
    content: `
      <p style="text-align: justify;">
        No dia <strong>01 de setembro de 2025</strong>, o <strong>Clube Português do Recife</strong> viveu um momento histórico com a cerimônia de posse do novo Presidente <strong>Daniel Ferreira Rodrigues</strong> e do Vice-Presidente <strong>Celso Stamford Gaspar</strong>.
      </p>
      <p style="text-align: justify;">
        A solenidade contou com a presença de autoridades, sócios e convidados especiais, que celebraram juntos a nova fase da instituição. O evento foi marcado por discursos emocionantes e pela reafirmação do compromisso com a tradição e o futuro do Clube.
      </p>
      <p style="text-align: justify;">
        O clima de união e esperança esteve presente em cada detalhe, reforçando o orgulho de fazer parte desta história.
      </p>
    `,
    author: 'Priscila',
    date: '2025-09-04',
    category: 'eventos',
    image: galeria1, // thumb principal
    gallery: [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7],
    readTime: '3 min'
  },
{
  id: 8,
  title: '🏆 Lusas do Juvenil no Campeonato Brasileiro 2025',
  content: `
    <p style="text-align: justify;">
      As <strong>Lusas do Juvenil</strong> partem para um grande desafio no 
      <strong>Campeonato Brasileiro de Clubes Juvenil Feminino de Handebol 2025</strong>, 
      que acontecerá na cidade de <strong>Balneário Camboriú-SC</strong>, entre os dias 
      <strong>29/09 a 04/10</strong>.
    </p>

    <p style="text-align: justify;">
      A estreia foi marcada por uma vitória expressiva diante da equipe do 
      <strong>@lhhandebol</strong>, com o placar final de 
      <strong>FMO/PORTUGUÊS 31 x 17 LIGA HAMBURGENCE</strong>.
    </p>

    <p style="text-align: justify;">
      Amanhã <strong>(30/09/2025)</strong>, nossas atletas enfrentam a equipe paulista <strong>São Caetano</strong>, 
      às <strong>18h00</strong>. Todos os jogos estão sendo transmitidos ao vivo 
      pelo canal oficial <strong>CBHBTV</strong> no YouTube. 
      Acompanhe também os bastidores e atualizações em nossos <em>storys</em>!
    </p>

    <p style="text-align: center; margin-top: 20px; font-weight: bold;">
      ✨ Patrocínio ✨ <br/>
      <a href="https://fmo.edu.br" target="_blank">@fmo.edu.br</a> &nbsp;|&nbsp; 
      <a href="https://instagram.com/instituto.maria" target="_blank">@instituto.maria</a>
    </p>
  `,
  author: 'Diretoria do Clube',
  date: '2025-09-27',
  category: 'esportes',
  image: noticia7,
  readTime: '4 min'
},
{
  id: 9,
  title: '🏊‍♀️ Pernambucanas convocadas para representar o Brasil na Copa Pacífico de Natação',
  content: `
    <p style="text-align: justify;">
      É com orgulho que anunciamos a convocação das jovens atletas do 
      <strong>Clube Português do Recife</strong>: 
      <strong>Beatriz Andrade</strong> e <strong>Adrielly Alana</strong>, ambas de 14 anos, 
      e <strong>Ana Clara Lyra</strong>, de 15 anos. 
      Pela primeira vez, elas vestirão as cores da <strong>Seleção Brasileira Infantil e Juvenil de Natação</strong>, 
      representando o país na <strong>Copa Pacífico</strong>, que será realizada em 
      <strong>Cochabamba, Bolívia</strong>, de <strong>10 a 16 de novembro</strong>.
    </p>

    <p style="text-align: justify;">
      As nadadoras terão ainda a companhia da experiente treinadora 
      <strong>Keycy Florêncio</strong>, que retorna à seleção nacional após uma década, 
      integrando a comissão técnica durante a competição. 
      Cada atleta participará de provas específicas: 
      Beatriz competirá nos <strong>50m, 100m e 200m peito</strong>; 
      Adrielly disputará os <strong>200m e 400m livre</strong>, além dos 
      <strong>100m e 200m borboleta</strong>; 
      já Ana Clara estará nas provas de <strong>50m e 100m peito</strong> e 
      <strong>50m e 100m borboleta</strong>.
    </p>

    <p style="text-align: justify;">
      A <strong>Confederação Brasileira de Desportos Aquáticos (CBDA)</strong> destacou que 
      os custos com passagens, hospedagem, alimentação, transporte, uniformes e inscrições 
      são de responsabilidade dos convocados. 
      Por isso, atletas e comissão estão em busca de <strong>patrocinadores e apoiadores</strong> 
      que possam contribuir para viabilizar esta importante participação internacional.
    </p>

    <p style="text-align: center; margin-top: 20px;">
      📩 <strong>Interessados em apoiar</strong> podem entrar em contato diretamente com a treinadora 
      <strong>Keycy Florêncio</strong> pelo telefone 
      <a href="tel:+5581997592238">(81) 99759-2238</a> 
      ou pelo e-mail <a href="mailto:keycykf@hotmail.com">keycykf@hotmail.com</a>.
    </p>
  `,
  author: 'Diretoria do Clube',
  date: '2025-10-01',
  category: 'esportes',
  image: noticia8,
  readTime: '4 min'
},

{ 
  id: 10,
  title: '🍻 Barcelos Bar e Restaurante – Uma nova fase está chegando!',
  content: `
    <p style="text-align: justify;">
      O <strong>Barcelos Bar e Restaurante</strong>, localizado dentro do 
      <strong>Clube Português do Recife</strong>, está passando por um momento de transformação. 
      <strong>Temporariamente fechado</strong>, o espaço retorna em breve com uma proposta totalmente renovada, 
      trazendo mais qualidade e experiências únicas para o público.
    </p>

    <p style="text-align: justify;">
      Sob uma <strong>nova administração</strong>, o Barcelos se prepara para surpreender os clientes 
      com novidades especiais, gastronomia de excelência e um ambiente ainda mais acolhedor. 
      A promessa é de uma experiência completa que une tradição, modernidade e um atendimento de alto padrão.
    </p>

    <p style="text-align: justify;">
      Em breve, todos poderão aproveitar um espaço repaginado, cheio de boas surpresas e momentos inesquecíveis.
    </p>

    <p style="text-align: center; margin-top: 20px;">
      👀🔥 <strong>Fica de olho!</strong> Em breve o Barcelos estará de volta com muitas novidades para você e sua família.  
      Acompanhe as atualizações e prepare-se para viver essa nova experiência!
    </p>
  `,
  author: 'Priscila',
  date: '2025-10-01',
  category: 'gastronomia',
  image: noticia9,
  readTime: '3 min'
}



];

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsArticles.find(a => a.id === parseInt(id ?? "0"));

  if (!article) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-red-600">Notícia não encontrada</h1>
        <Link
          to="/servicos/noticias"
          className="mt-6 inline-block bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-3 rounded-lg"
        >
          Voltar às Notícias
        </Link>
      </div>
    );
  }

  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="pt-32">
      {/* Botão Voltar */}
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

      {/* Conteúdo da Notícia */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Meta */}
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

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Imagem ou Galeria */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              {article.gallery ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {article.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${article.title} - Foto ${idx + 1}`}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  ))}
                </div>
              ) : (
               <img
  src={article.image}
  alt={article.title}
  className="w-full max-h-[700px] h-auto object-cover"
/>


              )}
            </div>

            {/* Conteúdo */}
            <div
              className="prose prose-lg max-w-none prose-green prose-headings:text-gray-900 prose-p:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.article>
        </div>
      </section>

      {/* Relacionados */}
      {relatedArticles.length > 0 && (
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
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetail;
