import { useEffect, useState } from "react";

const VisitCounter = () => {
  const [count, setCount] = useState<number | null>(null); // número ou null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-clubeportugues.onrender.com/visits", { method: "POST" })
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setCount(10000); // fallback
        setLoading(false);
      });
  }, []);

  const digits = String(count ?? 10000).split("");

  return (
    <div className="flex flex-col items-center mt-2 mb-6">
      {/* Título */}
      <span className="text-gray-100 font-semibold mb-2 text-lg sm:text-base">
        Visitas
      </span>

      {/* Contador ou loading */}
      {loading ? (
        <div className="flex justify-center gap-1">
          {Array(5).fill("⏳").map((d, idx) => (
            <div
              key={idx}
              className="w-10 h-12 sm:w-6 sm:h-8 md:w-10 md:h-10
                         bg-gray-700 text-white font-bold text-lg sm:text-base md:text-xl
                         flex items-center justify-center rounded shadow-md animate-pulse"
            >
              {d}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center flex-wrap gap-1">
          {digits.map((digit, idx) => (
            <div
              key={idx}
              className="w-10 h-12 sm:w-6 sm:h-8 md:w-10 md:h-10
                         bg-gradient-to-b from-green-700 to-red-700
                         text-yellow-300 font-bold text-lg sm:text-base md:text-xl
                         flex items-center justify-center rounded shadow-md
                         transition-transform duration-300 hover:scale-110"
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
