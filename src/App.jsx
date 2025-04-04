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
  role: "QA tester & Data Dev | Analyst Specialist", 
  complement: "AI & ML enthusiast"
} 

function App() {
  return (
    <main className="px-4 text-gray-900 bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 lg:px-30">
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
