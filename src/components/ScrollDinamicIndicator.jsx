// components/ScrollIndicator.jsx
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      setIsAtBottom(scrollTop + viewportHeight >= totalHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center text-gray-500 cursor-pointer"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={isAtBottom ? faChevronUp : faChevronDown} size="2x" />
      <span className="text-sm">{isAtBottom ? "Scroll up" : "Scroll down"}</span>
    </motion.div>
  );
}
