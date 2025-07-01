import { useInView } from "react-intersection-observer";

export default function PersonalVideo() {
  const { ref, inView } = useInView({
    triggerOnce: true,   
    threshold: 0.1,    
  });

  return (
    <div ref={ref}>
      {inView ? (
        <video className="w-60 rounded-full md:inline"
          src="videos/hedra-ai-pixar-animation.mp4"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/ai-personal-video.webp"
        >
          Seu navegador não suporta o vídeo.
        </video>
      ) : (
        <img
        className="w-60 rounded-full md:inline"
        src="/ai-pixar-personal-image.webp"
        alt="Pré-visualização do vídeo"
        />
      )}
    </div>
  );
}
