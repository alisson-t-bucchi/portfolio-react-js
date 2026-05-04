import { SpeedInsights } from "@vercel/speed-insights/react"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"; 
import { faInstagram, faGithub, faLinkedinIn, faSpotify } from "@fortawesome/free-brands-svg-icons";
import ScrollDinamicIndicator from "../components/ScrollDinamicIndicator";

export default function Layout({ children }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [counter, setCounter] = useState(0);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
      setProjectsOpen(false);
    };

      const toggleProjects = () => {
        setProjectsOpen(!projectsOpen);
    };
    
    /* useEffect(() => {
        const storedCount = localStorage.getItem("pageVisitCount");
        const count = storedCount ? parseInt(storedCount, 10) : 0;
        const newCount = count + 1;
        setCounter(newCount);
        localStorage.setItem("pageVisitCount", newCount);
    }, []);
    **/

    return (
    <>
        <nav className="scroll-smooth py-4 flex justify-between items-center lg:px-12">
            <h1 className="text-3xl font-bold"> My Portfolio</h1>

            <div className="lg:hidden" >
                <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} /> 
            </div>

            <div className={`${menuVisible ? "block" : "hidden"} space-x-6 font-bold text-2xl lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0` }>
                <a href="#about" className="hover:text-white transition-colors duration-150 transform hover:scale-125">About</a>
                 
                 <div className="relative group">
                    <button 
                    className="hover:text-white transition-colors duration-150 transform hover:scale-125"
                    onClick={toggleProjects}    
                    >
                        Projects
                    </button>
                    <div className={`${projectsOpen ? "block" : "hidden"} 
                        lg:group-hover:block 
                        absolute z-10 mt-2 bg-white rounded-md shadow-lg p-4 space-y-2 text-xl text-black min-w-[200px]
                        lg:left-1/2 lg:-translate-x-1/2
                        `}>
                        <a href="#qa" className="block hover:bg-white px-3 py-2 rounded">QA Projects</a>
                        <a href="#ai-dataviz" className="block hover:bg-white px-3 py-2 rounded">AI & Data Visual</a>
                        <a href="#fullstack" className="block hover:bg-white px-3 py-2 rounded">Full-Stack Apps</a>
                    </div>
                </div>
                <a href="#testimonials" className="hover:text-white transition-colors duration-150 transform hover:scale-125">Testimonials</a>
                {/* <a href="#contact" className="hover:text-white transition-colors duration-150 transform hover:scale-125">Contact</a> */}
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

