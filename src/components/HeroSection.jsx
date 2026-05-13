import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import PersonalImage from "../assets/images/personal_photo_2.jpeg"
import { Typewriter } from "react-simple-typewriter"

export default function HeroSection({content: {title, roleLines}}) {
  return (
  <header className="text-center py-18 lg:px-12 p-6 mt-10">
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
          <div className="py-3 flex flex-nowrap gap-4 sm:gap-6 mt-2 items-center justify-center">
            <a href="#qa" className=" bg-white text-slate-900 font-bold text-center px-4 py-2 rounded-lg transition-colors duration-150 transform hover:scale-110">
                View Projects 🔎
            </a> 
            <a href="https://www.linkedin.com/in/alisson-tex-bucchi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:text-white transition-colors duration-150 transform hover:scale-125" />
            </a>
            <a href="https://github.com/alisson-t-bucchi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-4xl hover:text-white transition-colors duration-150 transform hover:scale-125" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:px-12 p-6 mt-10">
          <div className="p-[4px] rounded-full bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900">
            <img className="w-70 h-70 rounded-full object-cover"
            src={PersonalImage}
            alt="personal image"
            />
          </div>
        </div> 
    </div>
  </header>
  )
}
