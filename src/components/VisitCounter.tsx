import { useEffect, useState, useRef } from "react";

const VisitCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [displayText, setDisplayText] = useState("VISITAS".split(""));
  const [hasAnimated, setHasAnimated] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    fetch("https://backend-clubeportugues.onrender.com/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCount(10000);
        setLoading(false);
      });
  }, []);

  // Executa o efeito quando o span entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startScrambleEffect();
        }
      },
      { threshold: 0.6 } // só dispara quando 60% do elemento estiver visível
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Função do efeito de embaralhar
  const startScrambleEffect = () => {
    const target = "VISITAS";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText(
        target.split("").map((letter, i) =>
          i < iterations ? letter : chars[Math.floor(Math.random() * chars.length)]
        )
      );
      if (iterations >= target.length) clearInterval(interval);
      iterations += 0.5;
    }, 80);
  };

  const digits = String(count ?? 10000).split("");

  return (
    <div className="flex flex-col items-center mt-2 mb-4">
      {/* Título animado */}
      <span
        ref={titleRef}
        className="font-bold mb-1 text-sm sm:text-base md:text-lg
                   bg-gradient-to-r from-green-400 via-yellow-200 to-red-400
                   bg-[length:200%_auto] animate-gradient-move text-transparent bg-clip-text
                   tracking-wider transition-all duration-700"
      >
        {displayText.join("")}
      </span>

      {/* Contador */}
      {loading ? (
        <div className="flex justify-center gap-[2px] sm:gap-1">
          {Array(5)
            .fill("⏳")
            .map((d, idx) => (
              <div
                key={idx}
                className="w-6 h-8 sm:w-7 sm:h-9 md:w-10 md:h-10
                           bg-gray-700 text-white font-bold text-sm sm:text-base md:text-lg
                           flex items-center justify-center rounded shadow-md animate-pulse"
              >
                {d}
              </div>
            ))}
        </div>
      ) : (
        <div className="flex justify-center flex-wrap gap-[2px] sm:gap-1">
          {digits.map((digit, idx) => (
            <div
              key={idx}
              className="w-6 h-8 sm:w-7 sm:h-9 md:w-10 md:h-10
                         bg-gradient-to-b from-green-700 to-red-700
                         text-yellow-300 font-bold text-sm sm:text-base md:text-lg
                         flex items-center justify-center rounded shadow-md
                         transition-transform duration-300 hover:scale-105"
            >
              {digit}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisitCounter;
