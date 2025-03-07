import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

export default function Layout({ children }) {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

    return (
    <>
    <nav className="py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Info & Projects</h1>
        <div className="lg:hidden" >
            <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} /> 
        </div>
        <div className={`${menuVisible ? "block" : "hidden"} space-x-6 font-bold text-2xl lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-lime-100 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0` }>
            <a href="#about" className="hover:text-white transition-colors duration-150 transform hover:scale-125">About</a>
            <a href="#tech-stack" className="hover:text-white transition-colors duration-150 transform hover:scale-125">Tech Stack</a>
            <a href="#projects" className="hover:text-white transition-colors duration-150 transform hover:scale-125">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors duration-150 transform hover:scale-125">Contact</a>
        </div>
    </nav>
    
    {children}

    <footer className="py-15 body-font">
     <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <span className="ml-3 text-xl">© 2024 Website MIT Licensed.</span>
        </a>
     </div>
    </footer>
  </>
  )
}