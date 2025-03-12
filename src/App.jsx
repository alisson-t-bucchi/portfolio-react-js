import Layout from "./components/Layout" 
import HeroSection from "./components/HeroSection"
import Cards from "./components/Cards"
import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import AnimatedBackground from "./components/AnimatedBackground"
import Testimonials from "./components/Testimonials"
import TechStack from "./components/TechStack"

const heroSection = {
  title: "Alisson T. Bucchi",
  role: "QA Tester & Data Developer + Automation Specialist"
} 

function App() {
  return (
    <main className="px-4 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-300 to-lime-400 lg:px-30">
      <Layout>

        <HeroSection content={heroSection} />

        <TechStack></TechStack>

        <AboutMe></AboutMe>

        <Banner></Banner>

        <Cards></Cards>

        <Testimonials></Testimonials>

      </Layout>
    </main>
  ); 
}
export default App; 
