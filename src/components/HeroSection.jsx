import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import PersonalVideo from "./PersonalVideo";
import { Typewriter } from "react-simple-typewriter"
//import PersonalImage from "../assets/images/Web_Photo_Editor.jpg"

export default function HeroSection({content: {title, roleLines}}) {
  return (
  <header className="text-center py-18 lg:px-12 shadow-lg rounded-lg bg-lime-300 p-4 mt-10">
    <div className="grid lg:grid-cols-2 lg:min-h-6/12 lg:mt-8">
      <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
          <h2 className="text-4xl font-bold">
            <Typewriter
              words={[title]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            </h2>
          <h2 className="text-3xl font-bold">
          <Typewriter
              words={roleLines}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </h2>
          <div className="py-3 lg:flex space-x-6">
            <a href="https://www.linkedin.com/in/alisson-tex-bucchi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
            </a>
            <a href="https://github.com/alisson-t-bucchi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
            </a>
            <a href="https://issuu.com/alisson-tech-dev/docs/professional_skills_documents_alisson" target="_blank">
            <FontAwesomeIcon icon={faDownload} size="2x" title="Skills document" transition="opacity 0.1s" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
            </a>
            {/* <button className="relative bg-transparent border-2 border-black text-black font-bold py-1 px-2 rounded-lg shadow-md hover:shadow-lg active:shadow-inner transform transition-transform duration-200 hover:scale-115 active:scale-95"> */}
            <a href="mailto:alisson.bucchi@outlook.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" title="Contact me!" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-4">
           <img className="w-90 rounded-full border-6 md:inline" 
            src={PersonalImage} 
            alt="personal image" 
          />
        </div> */}
      <div className="flex flex-col items-center gap-4">
        <PersonalVideo />
        <p className="text-lg text-gray-900 font-medium">Hello, hello, tech people! </p>
      </div>
      
    </div>
  </header>
  )
}
