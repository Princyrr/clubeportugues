// src/components/HeroCarousel.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Importar imagens do assets
import adega1 from "../assets/adega1.jpg";
import piscina from "../assets/piscina.jpg";
import piscinaPng from "../assets/piscina.png";
import piscina2 from "../assets/piscina2.png";
import quadradetenis from "../assets/quadradetenis.png";
import sinuca from "../assets/sinuca.jpg";
import varanda from "../assets/varanda.png";
import campo from "../assets/campo.png";
import barcelos from "../assets/barcelos.png";
import clube from "../assets/clube.png";
import clube1 from "../assets/clube1.png";
import clube3 from "../assets/clube3.png";
import parque1 from "../assets/parque1.png";

gsap.registerPlugin(ScrollTrigger);

const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const textRef = useRef(null); // <--- referência para a seção de texto

  const imagens = [
    adega1,
    piscina,
    piscinaPng,
    piscina2,
    quadradetenis,
    sinuca,
    varanda,
    campo,
    barcelos,
    clube,
    clube1,
    clube3,
    parque1,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".carousel-slide");
      const angle = 360 / slides.length;

      // Posiciona os slides
      gsap.set(slides, {
        rotateY: (i) => i * angle,
        transformOrigin: "50% 50% -650px",
        backfaceVisibility: "hidden",
        opacity: (i) => (i === 0 ? 1 : 0),
      });

      // Animação de rotação contínua dos slides
      gsap.to(slides, {
        rotateY: "+=360",
        duration: 100,
        ease: "linear",
        repeat: -1,
        onUpdate: () => {
          slides.forEach((slide) => {
            const rotation = gsap.getProperty(slide, "rotateY") as number;
            const normalized = (rotation % 360 + 360) % 360;
            gsap.set(slide, { opacity: normalized < 90 || normalized > 270 ? 1 : 0 });
          });
        },
      });

      // Scroll animation apenas para o texto
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // quando o topo do texto atingir 80% da viewport
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-r from-green-800 via-green-700 to-red-800 flex flex-col items-center justify-center overflow-hidden px-4 pb-20">
      
      {/* Carrossel 3D */}
      <div
        ref={carouselRef}
        className="relative w-full max-w-[600px] h-[300px] perspective-[1500px] mx-auto flex items-center justify-center"
      >
        <div className="relative w-full h-full transform-style-preserve-3d flex items-center justify-center">
          {imagens.map((img, i) => (
            <div
              key={i}
              className="
                carousel-slide 
                absolute 
                w-[300px] sm:w-[310px] 
                h-[180px] sm:h-[220px] 
                rounded-lg 
                border-2 border-yellow-400 
                shadow-[0_0_30px_5px_rgba(255,255,0,0.6)] 
                overflow-hidden
              "
            >
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Texto abaixo */}
      <div ref={textRef} className="relative z-10 mt-12 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 sm:mb-6">
          Seja Sócio do <span className="text-yellow-400">Clube Português</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Venha fazer parte da nossa história! Tradição, cultura, esporte e
          momentos únicos para toda a família.
        </p>
        <Link
          to="/fale-conosco"
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Associe-se Agora
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default HeroCarousel;
