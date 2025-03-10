import JavaIcon from "./assets/icons/java.svg"
import PythonIcon from "./assets/icons/python.svg"
import JavaScriptIcon from "./assets/icons/javascript.svg"
import SeleniumIcon from "./assets/icons/selenium.svg"
import CypressIcon from "./assets/icons/cypress.svg"
import MySQLIcon from "./assets/icons/mysql.svg"
import PostmanIcon from "./assets/icons/postman.svg"
import PowerBIIcon from "./assets/icons/power-bi.svg"
import PostgreSQLIcon from "./assets/icons/postgresql.svg"
import AWSIcon from "./assets/icons/amazonwebservices.svg"
import ScikitlearnIcon from "./assets/icons/scikitlearn.svg"
import TensorflowIcon from "./assets/icons/tensorflow.svg"
import RIcon from "./assets/icons/r.svg"
import ApachehadoopIcon from "./assets/icons/apachehadoop.svg"
import Layout from "./components/Layout" 
import HeroSection from "./components/HeroSection"
import Cards from "./components/Cards"
import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import AnimatedBackground from "./components/AnimatedBackground"
import Testimonials from "./components/Testimonials"

const techIcons1 = [
  JavaIcon,
  PythonIcon, 
  JavaScriptIcon,
  SeleniumIcon,
  CypressIcon,
  MySQLIcon,
  PostmanIcon,
  PowerBIIcon
]

const techIcons2 = [
  RIcon,
  PostgreSQLIcon,
  ApachehadoopIcon,
  AWSIcon,
  ScikitlearnIcon,
  TensorflowIcon
]

const heroSection = {
  title: "Alisson T. Bucchi",
  role: "QA Tester & Data Developer + Automation Specialist"
} 

function App() {
  return (
    <main className="px-4 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-300 to-lime-400 lg:px-30">
      <Layout>
        <HeroSection content={heroSection} />
        
        <section className="text-left py-6">
          <h3 className="text-3xl font-bold">My Tech Stack</h3>
          <p className="text-lg py-4">I'm currently working with: </p>
          <div className="flex gap-4 justify-start items-center flex-wrap overflow-x-auto">
            {techIcons1.map((technology, key) => ( 
              <img className="w-14 h-12 object-contain"
              key={`technology-${key}`} 
              src={technology} 
              alt={`img-${key}`} 
              />
              ))}
          </div>
        </section>

        <section id="tech-stack" className="text-left py-6">
          <p className="text-lg py-4">I'm learning and interest in:</p>
          <div className="flex gap-4 justify-start items-center flex-wrap overflow-x-auto">
            {techIcons2.map((technology, key) => ( 
              <img className="w-14 h-12 object-contain"
              key={`technology-${key}`} 
              src={technology} 
              alt={`img-${key}`} 
              />
            ))}
          </div>
        </section>

        <AboutMe></AboutMe>

        <Banner></Banner>

        <section id="projects">
          <h3 className="text-3xl font-bold text-center mb-4 py-4">Projects</h3>
          <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6">
            {[1,2,3,4,5,6].map((project) => (
              <Cards key={`project-${project}`} />
              ))}
          </div>
        </section>

        <Testimonials></Testimonials>

      </Layout>
    </main>
  ); 
}

export default App; 
