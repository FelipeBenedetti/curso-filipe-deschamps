import { useState, useEffect } from "react";
//import './styles/sam.css'

export default function Sam() {
  const galeria = [
    { type: "image", src: "images/sam1.jpg" },
    { type: "image", src: "images/sam2.jpg" },
    { type: "video", src: "images/video.mp3" },
    { type: "video", src: "images/video2.mp3" },
  ];

  // Inicializando o índice com null para evitar problema de renderização no lado do servidor
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    // Definindo o índice aleatório após a renderização inicial
    setCurrentIndex(Math.floor(Math.random() * galeria.length));
  }, []); // O array vazio significa que o useEffect será chamado apenas no cliente

  // Se ainda não tivermos um índice, não renderiza nada
  if (currentIndex === null) return null;

  // Próxima mídia
  const nextMidia = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galeria.length);
  };

  // Mídia anterior
  const prevMidia = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galeria.length) % galeria.length,
    );
  };

  const currentItem = galeria[currentIndex];

  return (
    <div className="carrossel">
      <button onClick={prevMidia} className="nextAndPrevius">
        {" "}
        {"<"}{" "}
      </button>

      {currentItem.type === "image" ? (
        <img src={currentItem.src} alt="Imagem da galeria" />
      ) : (
        <video controls>
          <source src={currentItem.src} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      )}

      <button onClick={nextMidia} className="nextAndPrevius">
        {" "}
        {">"}{" "}
      </button>
    </div>
  );
}
