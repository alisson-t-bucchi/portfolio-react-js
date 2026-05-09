import { SpeedInsights } from "@vercel/speed-insights/react"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"; 
import { faInstagram, faGithub, faLinkedinIn, faSpotify } from "@fortawesome/free-brands-svg-icons";
import ScrollDinamicIndicator from "../components/ScrollDinamicIndicator";

export default function Layout({ children }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
      setProjectsOpen(false);
    };

      const toggleProjects = () => {
        setProjectsOpen(!projectsOpen);
    };

    return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
            <div className="flex items-baseline gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Alisson 
                </h1>
                <span className="text-white/30">|</span>
                <span className="hidden sm:block text-sm text-blue-500 font-medium">
                    QA Automation & Data
                </span>
            </div>
            <div className="lg:hidden" >
                <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} /> 
            </div>

            <div className={`${menuVisible ? "block" : "hidden"} space-x-6 font-bold text-2xl lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0` }>
                <a href="#about" className="hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">About</a>
                 
                 <div className="relative group">
                    <button 
                    className="hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                    onClick={toggleProjects}    
                    >
                        Projects
                    </button>
                    <div className={`${projectsOpen ? "block" : "hidden"} lg:group-hover:block absolute z-10 mt-2 bg-white rounded-md shadow-lg p-0.5 space-y-0.5 text-xl text-black min-w-[200px] lg:left-1/2 lg:-translate-x-1/2`}>
                        <a href="#qa" className="block hover:bg-white px-3 py-2 rounded">QA Projects</a>
                        <a href="#ai-dataviz" className="block hover:bg-white px-3 py-2 rounded">AI & Data Visual</a>
                        <a href="#fullstack" className="block hover:bg-white px-3 py-2 rounded">Full-Stack Apps</a>
                    </div>
                </div>
                <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">Testimonials</a>
                {/* <a href="#contact" className="hover:text-white transition-colors duration-150 transform hover:scale-125">Contact</a> */}
            </div>
        </div>
    </nav>
    
    {children}

    <ScrollDinamicIndicator />

        <footer className="py-15 body-font">
            <div className="px-5 py-5 mx-auto flex flex-col items-center justify-center">
                <a className="flex title-font font-medium items-center justify-center">
                    <span className="ml-3 text-2xl">Let's work together!</span>
                </a>
                {/* <span className="mt-2 text-lg text-gray-700">Page visits: {counter}</span> */}
                <div className="flex justify-center mt-4 gap-x-4">
                    <a href="https://www.linkedin.com/in/alisson-tex-bucchi/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110" />
                    </a>
                    <a href="https://github.com/alisson-t-bucchi" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-black transition-colors duration-300 transform hover:scale-110" />
                    </a>
                    <a href="mailto:alisson.bucchi@outlook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" title="Contact Me!" className="hover:text-green-400 transition-colors duration-300 transform hover:scale-110" />
                    </a>
                </div>
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center">
                © 2026 Alisson Bucchi — Built with React & Tailwind
            </p>
        </footer>
        <SpeedInsights />
    </>
)}

