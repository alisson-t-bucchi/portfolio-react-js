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
  <section className="overflow-hidden py-22">
    <div className="text-center mb-22">
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
        Companies I’ve worked with
      </h3>
    </div>
    
    <div className="relative w-full flex items-center h-24 md:h-32">

    {/* fade left */}
    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-slate-900 to-transparent z-10" />

    {/* fade right */}
    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-900 to-transparent z-10" />

    <motion.div
      className="flex w-max flex-nowrap gap-x-10 md:gap-x-14"
      animate={{ x: "-50%" }}
      transition={{
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      }}
    >
      {[...images, ...images].map((src, index) => (
        <div key={index} className="w-44 md:w-56 lg:w-72">
          <img
            src={src}
            alt="company logo"
            className="w-full h-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
          />
        </div>
      ))}
    </motion.div>
  </div>
</section>

)};