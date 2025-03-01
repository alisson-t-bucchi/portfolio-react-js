import BackgroundImg from "./assets/background-image-colorfull_3.jpg"
import AllureIcon from "./assets/icons/allure_icon.webp"
import CohereIcon from "./assets/icons/Cohere-logo.webp"
import JavaIcon from "./assets/icons/java.png"
import K6Icon from "./assets/icons/k6-icon.webp"
import PythonIcon from "./assets/icons/python.png"
import SeleniumIcon from "./assets/icons/selenium.jpeg"
import Layout from "./components/Layout" 
import HeroSection from "./components/HeroSection"
import Cards from "./components/Cards"

const techIcons = [
  AllureIcon,
  CohereIcon, 
  JavaIcon, 
  K6Icon, 
  PythonIcon, 
  SeleniumIcon
]

const heroSection = {
  title: "Alisson T. Bucchi",
  role: "QA Tester & Data Developer + Automation Specialist"
} 

function App() {
  return (
    <main className="px-4 text-gray-900 lg:px-30">
      <Layout>
        <HeroSection content={heroSection} />

        <section id="about" className="text-center">
          <h3 className="text-3xl font-bold">About Me</h3>
          <div className="grid lg:grid-cols-2">
            <div className="flex justify-center mt-8">
              <img className="h-40 rounded-xl" 
              src={BackgroundImg} 
              alt="backgroundd image" 
              />
            </div>
            <div>
              <p className=" mt-4 text-lg lg:text-justify">
              👋🏻 Hi there, I am Alisson Bucchi. Dynamic IT professional holding a Computer Networking and Systems, 
              with expertise in Network Management and Programming (C, Python, Java). 
              I am currently QA Tester, and Data Integration Developer working with automated testing frameworks, data development to enhance software efficiency and scalability.
              I am in constant professional development to be a Full Stack Developer! 👨🏻‍💻🚀
              </p>
              <p className="mt-4 text-lg lg:text-justify">
              Fluent in English, French and Italian, I'm proactive, multitasking and work well in a team. 
              I am always up for new challenges that allow me to apply and ready to drive into tech sector forward with reliable, cutting-edge and innovative solutions.
              </p>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="text-center py-12">
        <h3 className="text-3xl font-bold">My Tech Stack</h3>
        <p className="text-lg">Tech I've been working recently</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 justify-items-center">
          {techIcons.map((technology, key) => ( 
             <img className="w-22 h-18 object-contain"
             key={`technology-${key}`} 
             src={technology} 
             alt={`img-${key}`} 
             />
          ))}
        </div>
        </section>

        <section id="projects">
        <h3 className="text-3xl font-bold text-center mb-4">Projects</h3>
        <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6">
        {[1,2,3,4,5,6].map((project) => (
          <Cards key={`project-${project}`} />
        ))}
        </div>
        </section>
      </Layout>
    </main>
  ); 
}

export default App; 
