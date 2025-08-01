import { SpeedInsights } from "@vercel/speed-insights/react"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import { faInstagram, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
        <nav className="scroll-smooth py-4 flex justify-between items-center lg:px-12">
            <h1 className="text-3xl font-bold"> My Portfolio</h1>

            <div className="lg:hidden" >
                <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} /> 
            </div>

            <div className={`${menuVisible ? "block" : "hidden"} space-x-6 font-bold text-2xl lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-lime-100 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0` }>
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
                        absolute z-10 mt-2 bg-lime-100 rounded-md shadow-lg p-4 space-y-2 text-xl text-black min-w-[200px]
                        lg:left-1/2 lg:-translate-x-1/2
                        `}>
                        <a href="#qa" className="block hover:bg-lime-300 px-3 py-2 rounded">QA Projects</a>
                        <a href="#ai-dataviz" className="block hover:bg-lime-300 px-3 py-2 rounded">AI & Data Visual</a>
                        <a href="#fullstack" className="block hover:bg-lime-300 px-3 py-2 rounded">Full-Stack Apps</a>
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
                    <span className="ml-3 text-2xl">© 2024 Website MIT Licensed.</span>
                </a>
                <div className="flex justify-center mt-4 gap-x-4">
                    <a href="https://www.linkedin.com/in/alisson-tex-bucchi/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
                    </a>
                    <a href="https://github.com/alisson-t-bucchi" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
                    </a>
                    <a href="https://www.instagram.com/coded_future/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
                    </a>
                </div>
            </div>
        </footer>
        <SpeedInsights />
    </>
)}

