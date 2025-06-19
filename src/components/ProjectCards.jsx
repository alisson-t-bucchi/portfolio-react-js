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
import CostOfLivingPredictor from "../assets/images/cost-of-living-ai.webp"
//
import AIChefDeCuisine from "../assets/images/ai-chef-de-cuisine.webp"
import AIChefDeCuisineVideo from "../assets/videos/ai-chef-de-cuisine.mp4"
//
//import icons//
import JavaScriptIcon from "../assets/icons/javascript-original.svg"
import PlaywrightIcon from "../assets/icons/playwright-original.svg"
import SeleniumIcon from "../assets/icons/selenium-original.svg"
import PythonIcon from "../assets/icons/python-original.svg"
import CucumberIcon from "../assets/icons/cucumber-plain.svg"
import JunitIcon from "../assets/icons/junit-original-wordmark.svg"
import AllureIcon from "../assets/icons/allure-framework.svg"
import JavaIcon from "../assets/icons/java-original.svg"
import PytestIcon from "../assets/icons/pytest-original-wordmark.svg"
import CypressIcon from "../assets/icons/cypressio-original.svg"
import K6Icon from "../assets/icons/k6-original.svg"
import ScikitlearnIcon from "../assets/icons/scikitlearn-original.svg"
import StreamlitIcon from "../assets/icons/streamlit-original-wordmark.svg"
import PandasIcon from "../assets/icons/pandas-original-wordmark.svg"
import CohereIcon from "../assets/icons/cohere-color.svg"


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
        icons: [
            { icon: JavaScriptIcon, name: "JavaScript" },
            { icon: PlaywrightIcon, name: "Playwright" },
        ], 
        video: ComingSoon,  //criar video
        code: "https://github.com/alisson-t-bucchi/magento-playwright-js.git", 
    },
    {
        id: 2,
        image: WebFormPage,
        title: "BDD test for Web form Page.",
        description: "BDD automation test for Web form Page in Python with test reports.",
        icons: [
            { icon: PythonIcon, name: "Python" },
            { icon: SeleniumIcon, name: "Selenium" },
            { icon: CucumberIcon, name: "Cucumber" },
            { icon: AllureIcon, name: "Allure" },
        ], 
        video: WebFormSeleniumPythonVideo,
        code:"https://github.com/alisson-t-bucchi/webform_selenium_behave_python.git"
    },
    {
        id: 3,
        image: CC360Page,
        title: "BDD test for Contact Center 360 Plataform.",
        description: "BDD automation test for CC360 plataform in Java.",
        icons: [
            { icon: JavaIcon, name: "Java" },
            { icon: SeleniumIcon, name: "Selenium" },
            { icon: CucumberIcon, name: "Cucumber" },
            { icon: JunitIcon, name: "Junit 5" }, 
        ],
        video: ComingSoon,
        code: "https://github.com/alisson-t-bucchi/CC360-selenium-cucumber-java.git"
    },
    {
        id: 4,
        image: StickerfyPage,
        title: "Selenium test suite for Stickerfy Page.",
        description: "E2E automation tests in POM pattern for Stickerfy Page in Python with Pytest HTML Reporter.",
        icons: [
            { icon: PythonIcon, name: "Python" },
            { icon: SeleniumIcon, name: "Selenium" },
            { icon: PytestIcon, name: "Pytest" }, 
        ],
        video: StickerfyAutomationSeleniumPythonVideo,
        code: "https://github.com/alisson-t-bucchi/stickerfy-selenium-python"
    },
    {
        id: 5,
        image: StickerfyPage,
        title: "Cypress test suite for Stickerfy Page.",
        description: "E2E automation tests for Stickerfy Page in JS with load tests and test reports.",
        icons: [
            { icon: JavaScriptIcon, name: "JavaScript" },
            { icon: CypressIcon, name: "Cypress" },
            { icon: AllureIcon, name: "Allure Reports" },
            { icon: K6Icon, name: "K6" },

        ], 
        video: StickerfyCypressJSVideo,
        code: "https://github.com/alisson-t-bucchi/stickerfy-cypress-js"
    },
];

const iaProjects = [
    {
      id: 1,
      image: CostOfLivingPredictor,
      title: "Global cost of living predictor using Machine Learning.",
      description: "Cost of living for country and city predictor in Python.",
      icons: [
        { icon: PythonIcon, name: "Python" },
        { icon: PandasIcon, name: "Pandas" },
        { icon: ScikitlearnIcon, name: "Scikilearn" },
        { icon: StreamlitIcon, name: "Streamlit" },
    ],  
      video: ComingSoon,
      code: "https://github.com/alisson-t-bucchi/cost-of-living-ai-ml.git"
    },
    {
        id: 2,
        image: AIChefDeCuisine,
        title: "Chef de cuisine with AI.",
        description: "Recipes generator with 2 measurements systems in Python using Regex.",
        technologies: "Cohere AI and Streamlit.",
        icons: [
            { icon: PythonIcon, name: "Python" },
            { icon: CohereIcon, name: "Cohere" },
            { icon: StreamlitIcon, name: "Streamlit" },
        ],  
        video: AIChefDeCuisineVideo,
        code: "https://github.com/alisson-t-bucchi/chef_de_cuisine_ai.git"
    },
];

const CardsItems = ({image, title, description, icons, video, code}) => {
    return (
    <div className="shadow-lg rounded-lg p-6 bg-gray-100">
        <img src={image} alt="Project" className="rounded-md" />
        <h4 className="mt-4 text-xl font-bold">{title}</h4>
        <p className="text-l">{description}</p>
        <p className="mt-1 text-l font-bold"> Tech Stack: </p>
        {icons && Array.isArray(icons) && (
            <div className="flex flex-wrap gap-2 mt-4 font-bold">
                {icons.map(({ icon, name }, idx) => (
                    <img
                        key={idx}
                        src={icon}
                        alt={name}
                        title={name}
                        className="w-12 h-12 p-1 m-1"
                    />
                ))}
            </div>
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
        <section id="project" className="shadow-lg rounded-lg bg-lime-300 mx-auto px-4 py-8">
        <h3 className="text-3xl font-black text-center mb-4 py-8">Projects</h3>
        <div className="mt-4 px-4 py-4 text-xl lg:text-justify space-y-2">
            <p>
                This portfolio showcases a selection of projects that reflect my passion for technology and problem-solving across three main areas:
            </p>
            <ul className="list-none space-y-1">
                <li>🧪 <strong>Quality Assurance (QA):</strong> automated testing and software reliability.</li>
                <li>🧠 <strong>Artificial Intelligence & Data Visualization:</strong> turning data into insights through intelligent models and visual storytelling.</li>
                <li>🧩 <strong>Full-Stack Development:</strong> end-to-end applications built with performance and user experience in mind.</li>
            </ul>
            <p>
                Each project is an opportunity to explore technology with creativity, purpose, and attention to detail.
            </p>
        </div>
        </section>

        <section id="qa" className="shadow-lg rounded-lg bg-lime-300 p-4">
            <h3 className="text-2xl font-black text-center mb-4 py-10">🧪 Quality Assurance</h3>
            <motion.div
            className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6 mb-4 sm:grid-cols-1 gap-6"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.1, once: true }}
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
   
        
        <section id="ai-dataviz" className="shadow-lg rounded-lg bg-lime-300 p-4">
            <h3 className="text-2xl font-black text-center mb-4 py-10">🧠 AI & Data Visual 📊</h3>
            <motion.div
            className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6 mb-4 sm:grid-cols-1 gap-6"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
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

        <section id="fullstack" className="shadow-lg rounded-lg bg-lime-300 p-4">
            <h3 className="text-2xl font-black text-center mb-4 py-10">🧩 Full-Stack Apps</h3>
            <motion.div
            className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6 mb-4 sm:grid-cols-1 gap-6"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            variants={containerVariants}
            >
                <motion.div
                variants={cardVariants}
                >
                    <CardsItems
                    image={ComingSoon}
                    title={"More projects coming soon..."}
                    description={"Stay tuned for more projects!"}
                    video={ComingSoon}
                    code={ComingSoon} />
                </motion.div>
            </motion.div>
        </section>

    </>
    )
}

export {qaProjects, iaProjects}
