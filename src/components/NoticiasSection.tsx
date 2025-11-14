import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import noticia12 from '../assets/noticia12.png';
import noticia15 from '../assets/noticia15.png';
import noticia11 from '../assets/noticia16.png';
import noticia21 from '../assets/noticia21.png';

const NoticiasSection = () => {
  const noticias = [
    { img: noticia12, title: 'Novo Horário da Secretaria', description: 'Informamos que a secretaria do Clube Português do Recife está com novo horário de funcionamento, vem conferir!' },
    { img: noticia15, title: 'Nova Administração', description: ' Um novo capítulo começa na Adega do Clube Português, agora está sob a administração da Garrafeira Brasil ' },
    { img: noticia11, title: 'Bar Barcelos', description: 'Está aberto e está com muitas novidades, agora temos Chopp da Brahma!' },
    { img: noticia21, title: '175 Anos De História e Cultura LUSA!', description: 'O Clube Português do Recife parabeniza o Gabinete Português de Leitura de Pernambuco pelos seus 175 anos de fundação!' }
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 80 : 250;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * (isMobile ? 1 : 1.5) + 0.5,
      vx: (Math.random() - 0.5) * (isMobile ? 1 : 2.7),
      vy: (Math.random() - 0.5) * (isMobile ? 1 : 2.7),
      color: "rgba(10, 133, 10, 0.8)"
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < (isMobile ? 60 : 90)) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(10, 133, 10, 0.1)";
            ctx.stroke();
          }
        }
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100">
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0, width: "100%", height: "100%" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Últimas <span className="text-green-700">Notícias</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Fique por dentro de tudo o que acontece no Clube Português do Recife
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {noticias.map((noticia, index) => {
            const fromLeft = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: fromLeft ? -120 : 120, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group flex flex-col h-full min-h-[450px]"
              >
                {/* Glow esfumaçado ao redor do card */}
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur-3xl opacity-40 animate-pulse z-0 shadow-[0_15px_50px_rgba(255,200,0,0.5)]" />

                {/* Conteúdo do card */}
                <div className="relative flex flex-col flex-1 bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden z-10 shadow-lg hover:shadow-[0_25px_50px_rgba(255,180,0,0.6)] transition-shadow duration-500">
                  <img
                    src={noticia.img}
                    alt={noticia.title}
                    className="w-full h-56 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{noticia.title}</h3>
                    <p className="text-gray-700 flex-grow mb-6">{noticia.description}</p>
                    <Link
                      to="/servicos/noticias"
                      className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-700 to-red-700 text-white font-semibold rounded-lg hover:from-green-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
