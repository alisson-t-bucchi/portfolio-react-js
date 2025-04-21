import { useInView } from "react-intersection-observer";

export default function PersonalVideo() {
  const { ref, inView } = useInView({
    triggerOnce: true,   
    threshold: 0.1,    
  });

  return (
    <div ref={ref}>
      {inView ? (
        <video className="w-90 rounded-full md:inline border-0"
          src="public/videos/ai-personal-video.mp4"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="public/ai-personal-video.webp"
        >
          Seu navegador não suporta o vídeo.
        </video>
      ) : (
        <img
        className="w-80 rounded-full md:inline"
        src="public/ai-personal-image.webp"
        alt="Pré-visualização do vídeo"
        />
      )}
    </div>
  );
}
