import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import WebPhoto from "../assets/images/web_photo.webp"

export default function HeroSection({content: {title, role}}) {
  return (
  <header className="text-center py-12">
    <div className="grid lg:grid-cols-2 lg:min-h-6/12 lg:mt-8">
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
            <h2 className="text-4xl font-bold">{title}</h2>
            <h3 className="text-2xl font-bold">{role}</h3>
            <img className="w-60 rounded-full md:hidden border-4" 
            src={WebPhoto} 
            alt="Alisson" 
            />
          {/*   <button className=" bg-blue-600 text-white px-1 py-1 rounded-lg">
              Contact me
            </button> */}

            <div className="py-3 lg:flex space-x-6">
              <a href="https://www.linkedin.com/in/alisson-tex-bucchi/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
              </a>
              <a href="https://github.com/alisson-t-bucchi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
              </a>
              <a href="mailto:alisson.bucchi@outlook.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
              </a>
              <a href="https://issuu.com/alisson-tech-dev/docs/professional_skill_doc_3" target="_blank">
                <FontAwesomeIcon icon={faDownload} size="2x" title="Skills doc here!" transition="opacity 0.1s" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
              </a>
            </div>
        </div>
        <div>
            <img className="w-60 rounded-full hidden md:inline border-4" 
            src={WebPhoto} 
            alt="Alisson" 
            />
        </div>
    </div>
    </header>
  )
}
