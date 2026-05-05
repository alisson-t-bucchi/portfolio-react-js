import {useEffect} from "react"
import Layout from "./components/Layout" 
import HeroSection from "./components/HeroSection"
import ProjectCards from "./components/ProjectCards"
import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import AnimatedBackground from "./components/AnimatedBackground"
import Testimonials from "./components/Testimonials"
import TechStack from "./components/TechStack"
import { Analytics } from "@vercel/analytics/next"

const heroSection = {
  title: "Alisson T. Bucchi",
  roleLines: [
    "QA Automation Engineer",
    "Data-Driven Testing",
    "Exploring AI & Scalable Systems"
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
  <main className=" bg-slate-900 text-white p-4">
    <Layout>
      
      <HeroSection content={heroSection} />
      <TechStack></TechStack>
      <AboutMe></AboutMe>
      <Banner></Banner>
      <ProjectCards></ProjectCards>
      <Testimonials></Testimonials>

    </Layout>
    <Analytics />
  </main>
  ); 
}
export default App; 
