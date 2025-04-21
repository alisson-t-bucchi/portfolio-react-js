import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import PersonalVideo from "./PersonalVideo";

export default function HeroSection({content: {title, role, complement}}) {
  return (
  <header className="text-center py-18">
    <div className="grid lg:grid-cols-2 lg:min-h-6/12 lg:mt-8">
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
            <h2 className="text-4xl font-bold">{title}</h2>
            <h3 className="text-2xl font-bold">{role}</h3>
            <h3 className="text-xl font-bold">{complement}</h3>

            <div className="py-3 lg:flex space-x-6">
              <a href="https://www.linkedin.com/in/alisson-tex-bucchi/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
              </a>
              <a href="https://github.com/alisson-t-bucchi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
              </a>
              <a href="https://issuu.com/alisson-tech-dev/docs/professional_skill_doc_3" target="_blank">
                <FontAwesomeIcon icon={faDownload} size="2x" title="Skills doc here!" transition="opacity 0.1s" className="hover:text-white transition-colors duration-150 transform hover:scale-145" />
              </a>
              <button className="relative bg-transparent border-2 border-black text-black font-bold py-1 px-2 rounded-lg shadow-md hover:shadow-lg active:shadow-inner transform transition-transform duration-200 hover:scale-115 active:scale-95">
                <a href="mailto:alisson.bucchi@outlook.com" target="_blank">
                  Contact me
                </a>
              </button>
            </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <PersonalVideo />
          <p className="text-lg text-gray-900 font-medium">Hello, hello, tech people! </p>
        </div>
    </div>
  </header>
  )
}
