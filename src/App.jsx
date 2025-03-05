import AllureIcon from "./assets/icons/allure_icon.webp"
import CohereIcon from "./assets/icons/Cohere-logo.webp"
import JavaIcon from "./assets/icons/java.png"
import K6Icon from "./assets/icons/k6-icon.webp"
import PythonIcon from "./assets/icons/python.png"
import SeleniumIcon from "./assets/icons/selenium.jpeg"
import Layout from "./components/Layout" 
import HeroSection from "./components/HeroSection"
import Cards from "./components/Cards"
import AboutMe from "./components/AboutMe"
import AboutMeImage from "./components/AboutMeImage"
import AnimatedBackground from "./components/AnimatedBackground"

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
    <main className="px-4 text-gray-900 bg-gradient-to-r from-lime-100 via-lime-300 to-lime-500 lg:px-30">
      <Layout>
        <HeroSection content={heroSection} />

        <section id="tech-stack" className="text-left py-6">
        <h3 className="text-3xl font-bold">My Tech Stack</h3>
        <p className="text-lg py-4">I'm currently working with: </p>
        <div className="flex gap-4 justify-start items-center flex-wrap overflow-x-auto">
          {techIcons.map((technology, key) => ( 
             <img className="w-18 h-14 object-contain"
             key={`technology-${key}`} 
             src={technology} 
             alt={`img-${key}`} 
             />
          ))}
        </div>
        </section>

        <section id="tech-stack" className="text-left py-6">
        <p className="text-lg py-4">I'm interest in learning:</p>
        <div className="flex gap-4 justify-start items-center flex-wrap overflow-x-auto">
          {techIcons.map((technology, key) => ( 
             <img className="w-18 h-14 object-contain"
             key={`technology-${key}`} 
             src={technology} 
             alt={`img-${key}`} 
             />
          ))}
        </div>
        </section>

        <AboutMe>
          <AboutMeImage></AboutMeImage>
        </AboutMe>

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
