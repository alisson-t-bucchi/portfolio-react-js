import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WorkanaLogo from "../assets/images/workana-logo.webp";
import LogicalisLogo from "../assets/images/logicalis-logo.webp"
import UpworkLogo from "../assets/images/upwork-logo.webp"; 
import SolinftecLogo from "../assets/images/solinftec-logo.webp";

const images = [
  WorkanaLogo,
  LogicalisLogo,
  UpworkLogo,
  SolinftecLogo
];

export default function Banner() {
    const [numImages, setNumImages] = useState(4);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth < 640) setNumImages(2);
      else if (window.innerWidth < 1024) setNumImages(3);
      else setNumImages(4);
    };

    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  return (
    <section className="overflow-hidden py-8 ">
        <h3 className="text-3xl font-black text-center mb-4 py-4">Companies</h3>
      <div className="relative w-full h-40 md:h-56 lg:h-64 flex items-center">
        <motion.div
          className="flex w-max flex-nowrap gap-x-18"
          initial={{ x: "0%" }}
          animate={{ x: "-100%"}}
          transition={{
            repeat: Infinity,
            repeatType: "loop", 
            duration: 80,
            ease: "linear",
          }}
        >
            {[...images.slice(0, numImages), ...images.slice(0, numImages), ...images.slice(0, numImages)].map((src, index) => (
            <div key={index} className="w-40 md:w-52 lg:w-64 h-full">
              <img
              src={src}
              alt={`img-${index}`}
              className="w-full h-full object-contain rounded-lg"
              />
            </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};