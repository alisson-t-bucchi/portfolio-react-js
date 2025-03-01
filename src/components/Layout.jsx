import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

export default function Layout({children}) {
  return (
  <>
  <head>
    <title>Portfolio</title>
  </head>
    <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ALISSONDEV</h1>
        <div className="lg:hidden">
            <FontAwesomeIcon icon={faBars} size="2x" /> 
        </div>
        <div className="hidden space-x-6 text-xl lg:block">
            <a href="#about">About</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
    
    {children}
  
        <footer id="contact" className="text-center py-6 border-t mt-12">
            <p>&copy; 2025 ALISSONDEV</p>
        </footer>
  </>
  )
}
