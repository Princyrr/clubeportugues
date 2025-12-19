
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
import noticia10 from '../../assets/noticia10.jpg';
import noticia11 from '../../assets/noticia11.png';
import noticia12 from '../../assets/noticia12.png';
import noticia13 from '../../assets/noticia13.png';
import noticia14 from '../../assets/noticia14.png';
import noticia15 from '../../assets/noticia15.png';
import noticia16 from '../../assets/noticia16.png';
import noticia17 from '../../assets/noticia17.png';
import noticia18 from '../../assets/noticia18.png';
import noticia19 from '../../assets/noticia19.jpg';
import noticia20 from '../../assets/noticia20.jpg';
import noticia21 from '../../assets/noticia21.png';
import noticia22 from '../../assets/noticia22.png';
import noticia23 from '../../assets/noticia23.png';
import noticia24 from '../../assets/noticia24.png';
import noticia25 from '../../assets/noticia25.jpg';
import noticia26 from '../../assets/banner1.png';
import noticia27 from '../../assets/noticia27.png';
import noticia28 from '../../assets/noticia28.png';

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
  Em último jogo da chave contra a equipe de <strong>@ahbchandebol</strong>, as <strong>Lusas</strong> saem da disputa com a vitória pelo placar de <strong>FMO/PORTUGUÊS 30 X 21 FMEBC-SC</strong> e conquistam o <strong>primeiro lugar do Grupo B</strong> do <strong>Campeonato Brasileiro de Handebol Juvenil Feminino 2025</strong>.
</p>

<p style="text-align: justify;">
  Lusas se preparam agora para a disputa das <strong>quartas de final</strong> contra a equipe de <strong>@acrihf.criciuma</strong>. A partida irá ocorrer nesta tarde de quinta-feira <strong>(02/10) </strong> às <strong>16h30</strong>.
</p>

<p style="text-align: center; font-weight: bold; margin-top: 15px;">
  CONTAMOS COM A SUA TORCIDA!<br/>
  TRANSMISSÃO NO YOUTUBE: <strong>TVCBHB</strong>
</p>

<p style="text-align: center; margin-top: 20px; font-weight: bold;">
  PATROCÍNIO: <br/>
  <a href="https://fmo.edu.br" target="_blank">@fmo.edu.br</a> &nbsp;|&nbsp; 
  <a href="https://instagram.com/instituto.maria" target="_blank">@instituto.maria</a>
</p>

  `,
  author: 'Diretoria do Clube',
  date: '2025-10-03',
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
},
{ 
  id: 12,
  title: ' ⚠️ Comunicado Importante',
  content: `
    <p style="text-align: justify;">
  Diante das recentes notícias veiculadas em âmbito nacional sobre a <strong>adulteração de bebidas alcoólicas</strong>, 
  o <strong>Clube Português do Recife</strong> vem a público reafirmar o seu compromisso com a <strong>segurança, 
  qualidade e procedência</strong> de todos os produtos comercializados em suas dependências.
</p>

<p style="text-align: justify;">
  Informamos que todas as bebidas disponibilizadas aos nossos associados e clientes são adquiridas <strong>exclusivamente 
  de distribuidores oficiais, idôneos e reconhecidos no mercado</strong>, sempre acompanhadas de <strong>nota fiscal</strong> 
  e seguindo rigorosos critérios de controle. 
</p>

<p style="text-align: justify;">
  Esse cuidado garante a <strong>autenticidade, a qualidade e a segurança</strong> das bebidas que oferecemos, 
  preservando a confiança e o bem-estar de todos que frequentam nosso espaço.
</p>

<p style="text-align: justify;">
  O <strong>Clube Português do Recife</strong> reafirma seu compromisso de atuar com <strong>responsabilidade, 
  transparência e respeito</strong> aos seus associados, parceiros e clientes, garantindo sempre um ambiente seguro 
  e de excelência.
</p>


  `,
  author: 'Diretoria do Clube',
  date: '2025-10-03',
  category: 'gastronomia',
  image: noticia10,
  readTime: '5 min'
},
{ 
  id: 13,
  title: '✨ Lusos na Seleção 🇧🇷   ',
  content: `
  <p style="text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 10px;">
  🇧🇷✨ Orgulho que transborda nossas cores!
</p>

<p style="text-align: justify;">
  Nossa atleta <strong>Julia Gabrielly</strong> e nosso treinador <strong>João Prestrelo</strong> representaram o Brasil 
  no <strong>Sul-Centro Americano Sub-15</strong>, realizado em Assunção, Paraguai, conquistando o <strong>3º lugar</strong>! 
  🥉🏆 
</p>

<p style="text-align: justify;">
  Uma vitória que enche de orgulho toda a família do <strong>Clube Português do Recife</strong>, mostrando a força da dedicação, 
  da disciplina e do espírito esportivo que nos move.
</p>

<p style="text-align: center; margin-top: 20px; font-size: 16px;">

  👏👏 Parabéns, <strong>Julia Gabrielly</strong> e <strong>João Prestrelo</strong>, por levarem o nome do nosso clube 
  e do nosso país ao pódio internacional! 
  
</p>
  `,
  author: 'Clube Português do Recife',
  date: '2025-10-02',
  category: 'esporte',
  image: noticia11,
  readTime: '3 min'
},
{
  id: 14,
  title: '🕗 Novo Horário de Funcionamento da Secretaria',
  content: `
  <div style="color: #2b2b2b; font-family: 'Arial', sans-serif; padding: 20px;">
    <h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #1b5e20; margin-bottom: 10px;">
      📢 Comunicado Oficial
    </h2>

    <p style="text-align: center; font-size: 18px; font-weight: 500; margin-bottom: 25px;">
      <strong>Clube Português do Recife</strong>
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
      A partir do dia <strong>Novembro de 2025</strong>, a <strong>Secretaria</strong> do 
      <strong>Clube Português do Recife</strong> passará a funcionar em <strong>novo horário</strong>. 
      Confira abaixo os dias e horários atualizados:
    </p>

    <ul style="list-style: none; padding: 0; margin: 0; font-size: 16px; line-height: 1.8;">
      <li style="margin-bottom: 8px;">🕗 <strong>Segunda a Quinta-feira:</strong> <span style="color: #1b5e20;">8h às 18h</span></li>
      <li style="margin-bottom: 8px;">🕔 <strong>Sexta-feira:</strong> <span style="color: #1b5e20;">8h às 17h</span></li>
      <li>🌿 <strong>Sábado:</strong> <span style="color: #1b5e20;">8h às 12h</span></li>
      <li>🌞 <strong>Domingos e Feriados:</strong> <span style="color: #1b5e20;">Fechado</span></li>
    </ul>

    <p style="text-align: justify; margin-top: 25px; font-size: 16px;">
      Agradecemos a compreensão e esperamos por você. Será um prazer recebê-lo dentro do novo horário!
    </p>

    <div style="margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
      <p style="text-align: justify; font-size: 16px; line-height: 1.6;">
        ⚠️ <strong>Importante:</strong> o <strong>funcionamento geral do clube</strong> permanece o mesmo:
      </p>

      <ul style="list-style: none; padding: 0; margin: 0; font-size: 16px; line-height: 1.8;">
        <li>🏋️‍♀️ <strong>Segunda a Sexta:</strong> 6h às 21h</li>
        <li>🌞 <strong>Sábado e Domingo:</strong> 8h às 16h</li>
        <li>🎉 <strong>Feriados:</strong> 8h às 16h</li>
      </ul>

      <p style="margin-top: 15px; text-align: justify;">
        Apenas o <strong>horário da Secretaria</strong> passou por alteração.
      </p>
    </div>

    <p style="text-align: center; margin-top: 25px; font-size: 16px; font-weight: bold; color: #1b5e20;">
      💚 Secretaria do Clube Português do Recife
    </p>
  </div>
  `,
  author: 'Secretaria',
  date: '2025-11-08',
  category: 'todas',
  image: noticia12,
  readTime: '2 min'
},

{
  id: 15,
  title: '🏐💚 Orgulho Luso no Handebol!',
  content: `
  <div style="color: #2b2b2b; font-family: 'Arial', sans-serif; padding: 20px;">
    <h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #1b5e20; margin-bottom: 15px;">
      Orgulho Luso no Handebol!
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Quatro jogadoras formadas no <strong>FMO/Clube Português</strong> foram convocadas para a 
      <strong>Seleção Brasileira de Handebol</strong>, que realiza fase de treinamentos em Portugal, 
      rumo ao <strong>Mundial 2025</strong>! 🇧🇷🇵🇹
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Entre elas, a ponta-esquerda <strong>Jamily Félix</strong>, que segue defendendo o <strong>FMO/Português</strong>, 
      e as ex-lusas <strong>Renata Arruda</strong>, <strong>Maria Grasielly</strong> e <strong>Mirela Maria</strong>, 
      que hoje atuam na Europa.
    </p>

    <blockquote style="font-style: italic; color: #1b5e20; border-left: 4px solid #1b5e20; padding-left: 12px; margin: 25px 0;">
      “É o resultado de um trabalho de formação de mais de 20 anos, que segue revelando talentos para o handebol brasileiro.”
    </blockquote>

    <p style="text-align: right; font-size: 15px; font-weight: bold; margin-bottom: 30px;">
      — Técnico Cristiano Rocha
    </p>

    <p style="text-align: center; font-size: 17px; font-weight: 600; color: #1b5e20; margin-bottom: 25px;">
      💪 Orgulho que atravessa fronteiras!
    </p>

    <p style="text-align: center; font-size: 15px;">
      📖 Leia a matéria completa no site:<br>
      <a href="https://www.diariodepernambuco.com.br" target="_blank" style="color: #1b5e20; font-weight: bold; text-decoration: none;">
        diariodepernambuco.com.br
      </a>
    </p>

    <div style="margin-top: 25px; text-align: center; font-size: 15px; color: #444;">
      #ClubePortuguês &nbsp;|&nbsp; #OrgulhoLuso &nbsp;|&nbsp; #Handebol &nbsp;|&nbsp; #SeleçãoBrasileira &nbsp;|&nbsp; #FMO &nbsp;|&nbsp; #TalentosDoPortuguês
    </div>
  </div>
  `,
  author: 'Diretoria de Esportes',
  date: '2025-10-17',
  category: 'esporte',
  image: noticia13, // substitua pelo nome da imagem correspondente
  readTime: '3 min'
},
{
  id: 16,
  title: '🏐💚 FMO/Clube Português é tetracampeão brasileiro de handebol!',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #1b5e20; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🏆 FMO/Clube Português é tetracampeão brasileiro de handebol!
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Após um campeonato intenso, com derrota no primeiro jogo, nossas <strong>Lusinhas</strong> sagraram-se campeãs 
      em um confronto emocionante contra a equipe do <strong>Itajaí</strong>. Que orgulho de ser Luso! 💚💛
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 15px;">
      Além disso, tivemos representantes na seleção do campeonato:
    </p>

    <ul style="list-style: none; padding: 0; margin-bottom: 25px;">
      <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span style="color: #1b5e20; font-size: 18px;">🥅</span> Melhor goleira: <strong>@saraherzborges</strong>
      </li>
      <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span style="color: #1b5e20; font-size: 18px;">➡️</span> Melhor ponta direita: <strong>@annygsilvaa</strong>
      </li>
      <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span style="color: #1b5e20; font-size: 18px;">💪</span> Melhor pivô: <strong>@anaa_dangelis</strong>
      </li>
      <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span style="color: #1b5e20; font-size: 18px;">🎯</span> Melhor técnico: <strong>@joao.prestrelo</strong>
      </li>
    </ul>

    <p style="text-align: center; font-size: 18px; font-weight: 600; color: #1b5e20; margin-bottom: 20px; background: #e1f5e4; padding: 10px 15px; border-radius: 10px;">
      Luso lenha ❤️💚
    </p>

    <div style="text-align: center; font-size: 15px; margin-bottom: 20px; color: #555;">
      Patrocínio:<br>
      <strong>@fmo.edu.br</strong> &nbsp;|&nbsp; <strong>@instituto.maria</strong>
    </div>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #ClubePortuguêsRecife &nbsp;|&nbsp; #Handebol &nbsp;|&nbsp; #Tetracampeão
    </div>

  </div>
  `,
  author: 'Diretoria de Esportes',
  date: '2025-10-24',
  category: 'esporte',
  image: noticia14, // substitua pelo nome da imagem correspondente
  readTime: '3 min'
},
{
  id: 17,
  title: '🍷 Um novo capítulo na Adega do Clube Português 🍷',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🥂 Um novo capítulo começa na Adega do Clube Português
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A tradição encontra um novo sabor.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A <strong>Adega do Clube Português</strong> agora está sob a administração da 
      <strong>Garrafeira Brasil</strong> junto com <strong>@mariana.chalita.figueiredo</strong>.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Mais do que um espaço, é uma experiência onde o vinho, a gastronomia e os bons encontros se encontram à mesa.
    </p>

    <p style="text-align: center; font-size: 18px; font-weight: 600; color: #6a1b1a; margin: 25px 0;">
      🍷 Venha viver essa nova fase conosco.
    </p>

    <p style="text-align: center; font-size: 16px; color: #333; margin-bottom: 20px;">
      <strong>Adega Garrafeira Brasil – Clube Português</strong>
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #GarrafeiraBrasil &nbsp;|&nbsp; #AdegaDoClubePortuguês &nbsp;|&nbsp; #VinhosComHistória &nbsp;|&nbsp; #NovoCapítulo
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-10-30',
  category: 'gastronomia',
  image: noticia15,
  readTime: '2 min'
},
{
  id: 18,
  title: '🍻 Bar Barcelos está de volta! 🍻',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🍻 O Bar Barcelos reabriu no Clube Português!
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O tradicional <strong>Bar Barcelos</strong> está de volta e cheio de novidades! Agora funcionando <strong>de domingo a domingo</strong>, o espaço foi totalmente revitalizado para receber os sócios e visitantes com muito conforto e boa energia.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      No novo cardápio, você encontra <strong>petiscos deliciosos</strong>, <strong>almoços saborosos</strong> e o destaque da casa: o <strong>chopp Brahma gelado(Apenas sextas, sábados e domingos)</strong>, servido na temperatura perfeita para acompanhar bons momentos com os amigos e a família.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O Bar Barcelos está funcionando em um <strong>horário especial</strong>: abre às <strong>11h</strong> e fecha às <strong>20h</strong>, garantindo aquele clima agradável e seguro.
    </p>

    <p style="text-align: center; font-size: 18px; font-weight: 600; color: #6a1b1a; margin: 25px 0;">
      🍺 Venha conferir o novo Bar Barcelos e brindar essa nova fase no Clube Português!
    </p>

    <p style="text-align: center; font-size: 16px; color: #333; margin-bottom: 20px;">
      <strong>Bar Barcelos – Clube Português</strong>
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #BarBarcelos &nbsp;|&nbsp; #ClubePortuguês &nbsp;|&nbsp; #ChoppBrahma &nbsp;|&nbsp; #Petiscos &nbsp;|&nbsp; #NovidadesNoClube
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-11-07',
  category: 'gastronomia',
  image: noticia16,
  readTime: '2 min'
},
{
  id: 19,
  title: '🥉 Orgulho Luso! 🇵🇹',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🥉 ORGULHO LUSO! 🇵🇹
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O <strong>Clube Português do Recife</strong> encerrou sua participação no <strong>Campeonato Brasileiro de Hóquei sobre Patins Masculino 2025</strong> com medalha de bronze! 💪🏑
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Jogando em casa, o Luso goleou o <strong>Internacional de Santos (SP)</strong> por <strong>6×0</strong>, garantindo o <strong>3° lugar</strong> e coroando uma campanha sólida, com <strong>cinco vitórias em sete partidas</strong>! 🔥
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O destaque individual ficou por conta do chileno <strong>Nico Fernandez</strong>, artilheiro da equipe com <strong>17 gols marcados</strong>.
      Para o técnico <strong>Leônidas Agra</strong>, o resultado reflete o excelente desempenho e a força da equipe:
    </p>

    <blockquote style="font-style: italic; background: #fff; border-left: 4px solid #6a1b1a; padding: 10px 15px; margin: 20px 0; color: #444;">
      “O time esteve muito bem e se comportou muito bem. Foi uma grande campanha, e todos estão de parabéns.”
    </blockquote>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Além do desempenho em quadra, o torneio — realizado no <strong>Clube Português</strong> — foi uma verdadeira <strong>festa do hóquei nacional</strong>, mostrando que <strong>Pernambuco é uma potência da modalidade!</strong> 👏
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
      Agora, o <strong>Luso</strong> volta suas atenções para o <strong>Campeonato Pernambucano</strong>, em busca de novas conquistas. 💚❤️
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #OrgulhoLuso &nbsp;|&nbsp; #ClubePortuguês &nbsp;|&nbsp; #HóqueiSobrePatins &nbsp;|&nbsp; #Bronze2025 &nbsp;|&nbsp; #ForçaLusa
    </div>

  </div>
  `,
  author: 'Diretoria de Esportes',
  date: '2025-11-11',
  category: 'esportes',
  image: noticia17,
  readTime: '2 min'
},
{
  id: 20,
  title: '📚 175 Anos de História e Cultura Lusa!',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      📚175 ANOS DE HISTÓRIA E CULTURA LUSA!
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O <strong>Clube Português do Recife</strong> parabeniza o <strong>Gabinete Português de Leitura de Pernambuco</strong> pelos seus <strong>175 anos de fundação</strong>, celebrados neste mês — uma data que simboliza a força da cultura, da língua e da presença portuguesa em nosso Estado. ✨
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Fundado em <strong>1849</strong>, o Gabinete nasceu do ideal de um grupo de imigrantes portugueses que buscavam promover a leitura, o conhecimento e o convívio intelectual em Pernambuco. Ao longo de quase dois séculos, tornou-se um dos mais importantes espaços de preservação da <strong>memória luso-brasileira</strong>, abrigando um riquíssimo acervo literário e histórico. 📖
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O <strong>Clube Português</strong> se une às homenagens, com orgulho e admiração, celebrando essa trajetória que inspira e conecta gerações em torno dos mesmos valores de <strong>tradição, cultura e identidade portuguesa</strong>. ❤️
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
      Parabéns ao <strong>Gabinete Português de Leitura de Pernambuco</strong>, símbolo vivo da herança cultural que compartilhamos!
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #ClubePortuguês &nbsp;|&nbsp; #GabinetePortuguêsDeLeitura &nbsp;|&nbsp; #175Anos &nbsp;|&nbsp; #CulturaLusa &nbsp;|&nbsp; #PortugalNoBrasil &nbsp;|&nbsp; #OrgulhoLuso &nbsp;|&nbsp; #TradiçãoEHistória &nbsp;|&nbsp; #Recife &nbsp;|&nbsp; #Pernambuco
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-11-14',
  category: 'cultura',
  image: noticia21,
  readTime: '3 min'
},
{
  id: 21,
  title: '🏆 FMO / CLUBE PORTUGUÊS (PE) ESTÁ NA FINAL!',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🏆 FMO / CLUBE PORTUGUÊS (PE) ESTÁ NA FINAL!
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Em uma semifinal muito disputada, o <strong>FMO / Clube Português (PE)</strong> venceu o <strong>Cascavel (PR)</strong> por 33 a 29 e garantiu sua vaga na grande final da <strong>Liga Nacional Feminina 2025</strong>!
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Agora, o Português enfrenta o <strong>E.C. Pinheiros (SP)</strong> na decisão nacional, que será dia <strong>15 de novembro</strong>, a partir das 18h (de Brasília).!
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      <strong>📍 Arena Sorriso – Sorriso/MT</strong><br/>
      <strong>📺 Transmissão exclusiva pela TV CBHb</strong><br/>
      <strong>📸 @ruasmidia</strong>
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #FinalFour2025 &nbsp;|&nbsp; #LigaNacional &nbsp;|&nbsp; #Handebol &nbsp;|&nbsp; #CBHb &nbsp;|&nbsp; #Português &nbsp;|&nbsp; #Cascavel &nbsp;|&nbsp; #SorrisoMT &nbsp;|&nbsp; #TVCBHb
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-11-14',
  category: 'esportes',
  image: noticia18,
  readTime: '3 min'
},
{
  id: 22,
  title: '🤾‍♂️ Liga Nacional de Handebol: Clube Português e Taubaté na Grande Final!',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🤾‍♂️🔥Clube Português  e Taubaté decidem a Liga Nacional!
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A noite desta quarta-feira (12) foi marcada por muita emoção no <strong>Final Four da Liga Nacional de Handebol Masculino</strong>. Em duas semifinais intensas, <strong>Taubaté</strong> e <strong>Clube Português</strong> garantiram vaga na grande decisão do torneio.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O <strong>Taubaté</strong> avançou após um confronto extremamente equilibrado contra o <strong>Pinheiros</strong>, definido apenas na disputa de tiros de sete metros. Já o <strong>Clube Português</strong> venceu o <strong>Itajaí</strong> em uma partida igualmente disputada, assegurando seu lugar na final.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A grande final acontece no <strong>sábado (15)</strong>, às <strong>20h</strong> (horário de Brasília). Antes disso, às <strong>19h</strong>, será decidido o bronze. Toda a fase final está sendo realizada em <strong>Sorriso, no Mato Grosso</strong>. No horário local, os jogos ocorrem às 19h (final) e 18h (bronze).
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
      A transmissão ao vivo será feita pela <strong>TV CBHb</strong> no YouTube, permitindo que os torcedores acompanhem cada momento dessa decisão emocionante.
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #LigaNacionalDeHandebol &nbsp;|&nbsp; #HandebolBrasil &nbsp;|&nbsp; #Taubaté &nbsp;|&nbsp; #ClubePortuguês &nbsp;|&nbsp; #FinalFour &nbsp;|&nbsp; #Esportes &nbsp;|&nbsp; #Handebol
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-11-14',
  category: 'esportes',
  image: noticia19,
  readTime: '3 min'
},
{
  id: 23,
  title: '🏑 Campeonato Brasileiro Master de Hóquei em Recife!',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🏑 RECIFE RECEBE O BRASILEIRO MASTER DE HÓQUEI SOBRE PATINS!
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A capital pernambucana será o cenário de mais um grande momento da modalidade! Entre os dias <strong>20 e 22 de novembro</strong>, Recife sediará o 
      <strong>Campeonato Brasileiro Master de Hóquei sobre Patins</strong>, reunindo atletas veteranos de diversas regiões do país para uma competição marcada por técnica, reencontros e muita paixão pelo esporte.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O torneio chega como uma verdadeira celebração do hóquei nacional, oferecendo ao público jogos emocionantes e uma atmosfera de confraternização entre antigos e novos talentos da categoria Master.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A organização geral está a cargo do <strong>Pernambuco Hóquei Clube</strong>, que já iniciou reuniões e definições logísticas para garantir um evento bem estruturado. A equipe trabalha lado a lado com atletas, dirigentes e apoiadores para entregar uma competição de qualidade dentro e fora da quadra.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
      Para acompanhar as partidas, resultados e atualizações, acesse o link oficial:
      <br/><br/>
      <a href="https://drive.google.com/file/d/10w_JeFPSrBpN4s9e55K9uAZO4IBBdAfj/view?usp=sharing" target="_blank" style="color:#6a1b1a; font-weight:bold;">
        👉 Clique aqui para acompanhar a Tabela
      </a>
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #HóqueiMaster &nbsp;|&nbsp; #HóqueiSobrePatins &nbsp;|&nbsp; #Recife2025 &nbsp;|&nbsp; #EsporteVeterano &nbsp;|&nbsp; #ClubePortuguês &nbsp;|&nbsp; #PernambucoHóqueiClube
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-11-14',
  category: 'esportes',
  image: noticia20,
  readTime: '3 min'
}
,
{
  id: 24,
  title: '✨🇵🇹 Sardinhada de São Martinho no Clube Português!',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      Sardinhada de São Martinho no Clube Português! ✨🇵🇹
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O salão nobre esteve cheio de alegria, tradição e sabor neste sábado (22/11)! 🥂🔥  
      Cerca de 130 pessoas, entre portugueses, sócios e amigos do Clube, se reuniram para celebrar a Sardinhada de São Martinho, um momento especial que preserva a cultura, reúne famílias e fortalece os laços com as nossas raízes.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Foram boas conversas, mesa farta, música, vinho e muita animação — exatamente como manda a tradição! 🍷🐟🎶
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
      Agradecemos a todos que participaram e fizeram dessa festa um encontro inesquecível!  
      Que venham mais celebrações que aquecem o coração e enchem o Clube de vida! ❤️💚
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #777;">
      #Sardinhada &nbsp;|&nbsp; #SãoMartinho &nbsp;|&nbsp; #ClubePortuguês &nbsp;|&nbsp; #TradiçãoPortuguesa
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-11-24',
  category: 'cultura',
  image: noticia22,
  readTime: '3 min'
},
{
  id: 25,
  title: 'Brasileiro Master de Hóquei encerra com grandes jogos e espírito de confraternização',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">

    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      Brasileiro Master de Hóquei encerra com grandes jogos e espírito de confraternização
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Entre os dias 20 e 22 de novembro, a quadra do Clube Português do Recife foi palco do Campeonato Brasileiro Master de Hóquei sobre Patins, reunindo atletas veteranos e quatro clubes pernambucanos. A competição ficou marcada pelo clima de amizade, reencontros e fair play, além da presença de nomes históricos do hóquei nacional.
    </p>

    <h3 style="font-size: 20px; font-weight: 600; margin-top: 20px; margin-bottom: 10px; color: #6a1b1a;">
      🏆 Equipes campeãs
    </h3>

    <p style="font-size: 16px; line-height: 1.8; margin-bottom: 15px;">
      🥇 <strong>Categoria +55:</strong> O título ficou com o Pernambuco Hóquei Clube (PHC), que venceu a Portuguesa-SP por 4 x 2. Vitória pernambucana com emoção e experiência na quadra!
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
      🥇 <strong>Categoria +45:</strong> O Sertãozinho-SP garantiu o troféu ao bater o Natal Hóquei Clube (NHC) por 6 x 2, mostrando ritmo forte e alto desempenho técnico.
    </p>

    <h3 style="font-size: 20px; font-weight: 600; margin-top: 20px; margin-bottom: 10px; color: #6a1b1a;">
      🌎 Participação nacional
    </h3>

    <p style="font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      O torneio contou com equipes de quatro estados, reforçando a representatividade do hóquei brasileiro:
    </p>

    <ul style="font-size: 16px; line-height: 1.8; margin-bottom: 25px; padding-left: 20px;">
      <li><strong>Pernambuco:</strong> Clube Português do Recife, Pernambuco Hóquei Clube, Confraria do Hóquei, Sport Club do Recife</li>
      <li><strong>Rio Grande do Norte:</strong> Natal Hóquei Clube</li>
      <li><strong>Rio de Janeiro:</strong> Teresópolis Hóquei Clube</li>
      <li><strong>São Paulo:</strong> Sertãozinho Hóquei Clube, Portuguesa (A. Portuguesa de Desportos), Veteranos Hóquei Clube</li>
    </ul>

    <p style="font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
      O Brasileiro Master reafirmou o valor da modalidade, celebrando tradição, longevidade esportiva e união entre gerações que seguem fazendo história no hóquei nacional.
    </p>

    <div style="margin-top: 20px; text-align: center; font-size: 14px; color: #777;">
      #BrasileiroMaster &nbsp;|&nbsp; #HóqueiSobrePatins &nbsp;|&nbsp; #ClubePortuguês &nbsp;|&nbsp; #EsporteVeterano &nbsp;|&nbsp; #HóqueiBrasil
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-11-26',
  category: 'esportes',
  image: noticia23,
  readTime: '5 min'
},
{
  id: 26,
  title: '🚨 Informações da Seletiva Lusa – Atualização Importante! 🚨',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🚨 INFORMAÇÕES SELETIVA LUSA 🚨
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 15px;">
      <strong>Data:</strong> 06/12<br>
      <strong>Local:</strong> Clube Português do Recife<br>
      <strong>Horário:</strong> 13h às 15h
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      1 - Houve uma breve alteração nos horários. A seletiva acontecerá das <strong>13:00 às 15:00</strong> para todas as categorias. Fiquem atentas para chegar com <strong>30 minutos de antecedência</strong> ao clube.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      2 - Sobre a seletiva online: no dia <strong>06/12</strong> também se encerram as inscrições e o recebimento dos formulários online.
    </p>

    <p style="text-align: justify; font-size: 16px; font-weight: 600; line-height: 1.8; margin-bottom: 25px;">
      Não perca essa chance, vem ser Luso! 💪🏽
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #555;">
      Patrocínio:<br>
      @fmo.edu.br &nbsp;|&nbsp; @instituto.maria
    </div>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-12-03',
  category: 'esportes',
  image: noticia24,
  readTime: '4 min'
},
{
  id: 27,
  title: ' NOTA DE ESCLARECIMENTO ',
  content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      NOTA DE ESCLARECIMENTO
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 15px; font-weight: bold;">
      91ᵒ ANIVERSÁRIO DO CLUBE PORTUGUÊS DO RECIFE
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A Diretoria Executiva recém-empossada do Clube Português do Recife informa aos seus associados, frequentadores e à comunidade em geral que, excepcionalmente neste ano, não será realizada a tradicional festa comemorativa do 91ᵒ aniversário da nossa instituição.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      A decisão foi tomada com responsabilidade e transparência, considerando o atual processo de reorganização financeira do Clube. Esta medida reflete o compromisso de austeridade fiscal assumido desde o início da nova gestão.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Estamos certos de que decisões como esta, ainda que temporárias, são fundamentais para garantir a saúde financeira do Clube e construir um futuro mais vigoroso, sustentável e vitorioso para todos que fazem parte desta casa.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Contamos com a compreensão de todos e seguimos trabalhando com dedicação para honrar a história do Clube Português do Recife e fortalecer ainda mais o seu legado.
    </p>

    <p style="text-align: justify; font-size: 16px; font-weight: 600; line-height: 1.8; margin-top: 30px;">
      Cordialmente,<br>
      Daniel Ferreira Rodrigues – Presidente<br>
      Celso Stamford Gaspar – Vice-Presidente<br>
      Diretoria Executiva - Clube Português do Recife
    </p>

  </div>
  `,
  author: 'Clube Português',
  date: '2025-12-04',
  category: 'eventos',
  image: noticia25,
  readTime: '4 min'
},
{
 id: 28,
title: '🎉✨ 91 anos do Clube Português do Recife ✨🎉',
content: `
  <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
      🎉✨ 91 anos do Clube Português do Recife ✨🎉
    </h2>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Hoje é dia de celebrar as tradições, amizades fortalecidas e histórias escritas e marcadas no coração do Recife.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Ao longo de quase um século, vivemos momentos que marcaram gerações, acolhemos famílias, promovemos cultura, esporte, gastronomia e celebramos com orgulho nossas raízes portuguesas.
    </p>

    <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
      Agradecemos a cada associado, colaborador e amigo que fez — e faz — parte dessa trajetória tão vitoriosa 🇵🇹
    </p>

    <p style="text-align: justify; font-size: 16px; font-weight: 600; line-height: 1.8; margin-bottom: 25px;">
      Parabéns, Clube Português do Recife!!! Que venham muitos outros anos de memória, união e grandes conquistas!
    </p>

    <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #555;">
      #ClubePortuguês &nbsp;|&nbsp; #91Anos &nbsp;|&nbsp; #Tradição &nbsp;|&nbsp; #História &nbsp;|&nbsp; #Celebração
    </div>

  </div>
`,
author: 'Clube Português',
date: '2025-12-05',
category: 'eventos',
image: noticia26,
readTime: '4 min'

},
{
  id: 29,
  title: '🚨 Seletiva Infantil Feminina 2026 PRORROGADA!',
  content: `
    <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
      
      <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
        🚨 ATENÇÃO: Seletiva Infantil Feminina 2026 PRORROGADA!
      </h2>

      <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        A seletiva infantil feminina do Clube Português para a temporada 2026 foi 
        <strong>prorrogada</strong>. Esta é a oportunidade para jovens atletas que sonham 
        em fazer parte da equipe lusa.
      </p>

      <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        Podem participar atletas nascidas em <strong>2012, 2013 ou 2014</strong>. 
        As inscrições devem ser realizadas por meio do formulário online.
      </p>

      <p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom: 25px;">
        👉 <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSeV4girwYePghu0zIQTC28WU4mAQcD7yr1ZbYNnc3cY8H_mVA/viewform?pli=1" 
          target="_blank" 
          style="color: #6a1b1a; text-decoration: underline;"
        >
          Clique aqui para acessar o formulário de inscrição
        </a>
      </p>

      <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        A seletiva será realizada de forma <strong>online</strong> e ficará disponível até o dia 
        <strong>5 de janeiro de 2026</strong>.
      </p>

      <p style="text-align: justify; font-size: 16px; font-weight: 600; line-height: 1.8; margin-bottom: 25px;">
        📞 Dúvidas e informações: <strong>(81) 99625-1515</strong>
      </p>

      <div style="margin-bottom: 20px; font-size: 15px;">
        <strong>Patrocínio:</strong><br />
        @fmo.edu.br<br />
        @instituto.maria
      </div>

      <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #555;">
        #ClubePortuguês &nbsp;|&nbsp; #SeletivaInfantil &nbsp;|&nbsp; #Handebol &nbsp;|&nbsp; #Luso
      </div>

    </div>
  `,
  author: 'Clube Português',
  date: '2025-12-19',
  category: 'esportes',
  image: noticia27,
  readTime: '3 min'
},

{
  id: 30,
  title: 'PORTUGUÊS VENCE O SPORT POR 1 A 0 E CONQUISTA O CAMPEONATO PERNAMBUCANO 2025',
  content: `
    <div style="font-family: 'Arial', sans-serif; color: #2b2b2b; padding: 20px; max-width: 900px; margin: auto; background: #f9faf6; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
      
      <h2 style="text-align: center; font-size: 26px; font-weight: 700; color: #6a1b1a; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
        PORTUGUÊS VENCE O SPORT POR 1 A 0 E CONQUISTA O CAMPEONATO PERNAMBUCANO 2025
      </h2>

      <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        O Clube Português é o grande campeão do Campeonato Pernambucano de Hóquei sobre Patins 2025. 
        Em um jogo tenso, equilibrado e decidido nos detalhes, o Português venceu o Sport Recife por 
        1 a 0, conquistando o segundo turno e, de forma direta, garantindo o título estadual.
      </p>

      <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        A decisão foi marcada por forte disputa defensiva, intensidade do início ao fim e poucas 
        oportunidades claras de gol. As duas equipes demonstraram organização tática e espírito 
        competitivo, transformando a final em um duelo de alto nível técnico.
      </p>

      <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        O gol do título saiu apenas na reta final da partida. Ceará, em jogada decisiva, marcou 
        faltando apenas 4 minutos para o fim, explodindo a torcida e selando a vitória que coroou 
        a campanha do Clube Português na temporada.
      </p>

      <p style="text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        Com a conquista do segundo turno, somada ao primeiro turno já vencido anteriormente, o 
        Português confirmou sua superioridade no Estadual e levantou a taça pernambucana de 2025 
        sem necessidade de partida extra.
      </p>

      <p style="text-align: justify; font-size: 16px; font-weight: 600; line-height: 1.8; margin-bottom: 25px;">
        A TV OK Brasil acompanha e valoriza o hóquei sobre patins pernambucano, celebrando mais um 
        capítulo importante da história da modalidade no estado.
      </p>

      <div style="margin-top: 15px; text-align: center; font-size: 14px; color: #555;">
        TV OK Brasil – A casa do hóquei sobre patins.
      </div>

    </div>
  `,
  author: 'Clube Português',
  date: '2025-12-19',
  category: 'esportes',
  image: noticia28,
  readTime: '4 min'
}















];

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsArticles.find(a => a.id === parseInt(id ?? "0"));

  if (!article) {
    return (
      <div className="pt-24 text-center">
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
    <div className="pt-12 md:pt-24">
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
