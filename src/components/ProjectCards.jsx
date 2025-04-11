import { motion } from "motion/react"

import ComingSoon from "../assets/images/coming-soon.webp"
//
import MagentoPage from "../assets/images/magento-page.webp"
//
import WebFormPage from "../assets/images/web-form-page.webp"
import WebFormSeleniumPythonVideo from "../assets/videos/web-form-selenium-python.mp4"
//
import CC360Page from "../assets/images/CC360.webp"
//
import StickerfyAutomationSeleniumPythonVideo from "../assets/videos/sitckerfy-automation-selenium-python.mp4"
import StickerfyPage from "../assets/images/stickerfy-page.webp"
//
import StickerfyCypressJSVideo from "../assets/videos/stickerfy-cypress-js.mp4"
//
import PizzaPricePredictorApp from "../assets/images/pizza-price-predictor-app.webp"
import PizzaPricePredictorAppVideo from "../assets/videos/pizza-price-predictor-app.mp4"
//
import AIChefDeCuisine from "../assets/images/ai-chef-de-cuisine.webp"
import AIChefDeCuisineVideo from "../assets/videos/ai-chef-de-cuisine.mp4"

const containerVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delay entre os filhos
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

const cardVariants = {
    offscreen: {
        opacity: 0,   
        y: 200, 
    },
    onscreen: {
        opacity: 1, 
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const qaProjects = [
    {
        id: 1,
        image: MagentoPage,
        title: "Playwright test suite for Magento Page.",
        description: "E2E automation tests for Magento Page in JS",
        video: ComingSoon,  //criar video
        code: "https://github.com/alisson-t-bucchi/magento-playwright-js.git", 
    },
    {
        id: 2,
        image: WebFormPage,
        title: "BDD test for Web form Page.",
        description: "BDD automation test for Web form Page in Python with test reports.",
        technologies: "Selenium Webdriver, Behave and Allure Reports.",
        video: WebFormSeleniumPythonVideo,
        code:"https://github.com/alisson-t-bucchi/webform_selenium_behave_python.git"
    },
    {
        id: 3,
        image: CC360Page,
        title: "BDD test for Contact Center 360 Plataform.",
        description: "BDD automation test for CC360 plataform in Java.",
        technologies: "Selenium Webdriver, Maven, Cucumber and JUnit5.", 
        video: ComingSoon,
        code: "https://github.com/alisson-t-bucchi/CC360-selenium-cucumber-java.git"
    },
    {
        id: 4,
        image: StickerfyPage,
        title: "Selenium test suite for Stickerfy Page.",
        description: "E2E automation tests in POM pattern for Stickerfy Page in Python with test reports.",
        technologies: "Selenium Webdriver, Pytest and HTML Reports.", 
        video: StickerfyAutomationSeleniumPythonVideo,
        code: "https://github.com/alisson-t-bucchi/stickerfy-selenium-python"
    },
    {
        id: 5,
        image: StickerfyPage,
        title: "Cypress test suite for Stickerfy Page.",
        description: "E2E automation tests for Stickerfy Page in Python with load tests and test reports.",
        technologies: "Cypress, k6 and Allure Reports.", 
        video: StickerfyCypressJSVideo,
        code: "https://github.com/alisson-t-bucchi/stickerfy-cypress-js"
    },
];

const iaProjects = [
    {
      id: 1,
      image: PizzaPricePredictorApp,
      title: "Price predictor using Machine Learning.",
      description: "Pizza price predictor in Python.",
      technologies: "Pandas, Sklearn and Streamlit libraries.", 
      video: PizzaPricePredictorAppVideo ,
      code: "https://github.com/alisson-t-bucchi/predict-pizza-values-ml.git"
    },
    {
        id: 2,
        image: AIChefDeCuisine,
        title: "Chef de cuisine with AI.",
        description: "Recipes generator with 2 measurements systems in Python using Regex.",
        technologies: "Cohere AI and Streamlit.",
        video: AIChefDeCuisineVideo,
        code: "https://github.com/alisson-t-bucchi/chef_de_cuisine_ai.git"
    },
];

const CardsItems = ({image, title, description, technologies, video, code}) => {
    return (
    <div className="shadow-lg rounded-lg p-4 bg-gray-100">
        <img src={image} alt="Project" className="rounded-md" />
        <h4 className="mt-4 text-xl font-bold">{title}</h4>
        <p className="text-l">{description}</p>
        {technologies && (
            <p className="text-l hover:text-red-600 transition-colors transform hover:scale-100">
                Tech stack: {technologies}
            </p>
        )}
        <div className="flex space-x-4 mt-4">
            <a href={video} target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-1 rounded-lg border-2">
                Live Preview
            </a>
            <a href={code} target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-1 rounded-lg border-2">
                View code
            </a>
        </div>
    </div>
    )
}

export default function Cards() {      
    return(
    <>
        <section id="QAprojects" /* </>className="shadow-lg rounded-lg p-4" */>
            <h3 className="text-3xl font-bold text-center mb-4 py-4">✅ QA Projects</h3>
            <motion.div
            className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6 mb-4"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5, once: true }}
            variants={containerVariants}
            >
                {qaProjects.map((project) => (
                    <motion.div
                    key={project.id}
                    variants={cardVariants}
                    >
                    <CardsItems
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    video={project.video}
                    code={project.code}
                    icons={project.icons} />
                    </motion.div>
                    ))} 
            </motion.div>
        </section>
   
        
        <section id="AIprojects">
            <h3 className="text-3xl font-bold text-center mb-4 py-4">🤖 IA Projects</h3>
            <motion.div
            className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6 mb-4"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5, once: true }}
            variants={containerVariants}
            >
                {iaProjects.map((project) => (
                      <motion.div
                      key={project.id}
                      variants={cardVariants}
                      >
                      <CardsItems
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      video={project.video}
                      code={project.code}
                      icons={project.icons} />
                      </motion.div>
                    ))}
            </motion.div>
        </section>
    </>
    )
}

export {qaProjects, iaProjects}
