import {useEffect} from "react"
import Layout from "./components/Layout" 
import HeroSection from "./components/HeroSection"
import ProjectCards from "./components/ProjectCards"
import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import AnimatedBackground from "./components/AnimatedBackground"
import Testimonials from "./components/Testimonials"
import TechStack from "./components/TechStack"

const heroSection = {
  title: "Alisson T. Bucchi",
  roleLines: [
    "QA Engineer & Data Specialist",
    "Full Stack Dev in progress...", 
    "AI & ML enthusiast"
  ]
} 

function App() {

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, 
  []);

  return (
    <main className=" bg-lime-200 text-gray-900 p-4 rounded-full">
      <Layout>

        <HeroSection content={heroSection} />

        <TechStack></TechStack>

        <AboutMe></AboutMe>

        <Banner></Banner>

        <ProjectCards></ProjectCards>

        <Testimonials></Testimonials>

      </Layout>
    </main>
  ); 
}
export default App; 
