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
import QAChallengeRX from "../assets/images/qa-challenge-rx.webp"
import QAChallengeRXVideo from "../assets/videos/interview-qa-rx-redefined.mp4"
//
import CostOfLivingPredictor from "../assets/images/cost-of-living-ai.webp"
//
import AIChefDeCuisine from "../assets/images/ai-chef-de-cuisine.webp"
import AIChefDeCuisineVideo from "../assets/videos/ai-chef-de-cuisine.mp4"
//
import DashboardPowerBI_1 from "../assets/images/DashboardPowerBI-1.png"
import DashboardPowerrBI_1Video from "../assets/videos/power-bi-dashboards.mp4"


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
import ReactIcon from "../assets/icons/react-icon.svg"
import NodeIcon from "../assets/icons/node-js-icon.svg"
import TailwindcssIcon from "../assets/icons/tailwindcss-icon.svg"
import MySQLIcon from "../assets/icons/mysql-original-wordmark.svg"
import FirebaseIcon from "../assets/icons/firebase-original-wordmark.svg"
import PrismaIcon from "../assets/icons/prisma-original-wordmark.svg"
import PowerBIIcon from "../assets/icons/power-bi-icon.svg"



const containerVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, //Delay entre os filhos
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
        description:    "The E2E test suite supports scalable workflows and critical navigation scenarios, enhancing overall reliability.\n" + 
                        "📌 Highlights: High test coverage, parallel execution, modular architecture.\n" + 
                        "📈 Results: Significant reduction in production bugs and improved shopping flow consistency. \n" +
                        "⚙️ Tools: ",
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
        description:    "The solution ensures clear and traceable test logic through Gherkin syntax and rich reporting. \n" + 
                        "📌 Highlights: Business-readable test cases, visual evidence, CI integration \n" +
                        "📈 Results: Early regression detection and faster test cycles. \n" +
                        "⚙️ Tools: ", 


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
        description:    "Scalable testing architecture covers key customer service flows.\n" +
                        "📌 Highlights: Reusable steps, CI/CD-ready, multiplatform testing. \n" +
                        "📈 Results: Increased system reliability and enhanced operator experience. \n" +
                        "⚙️ Tools: ",
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
        description:    "End-to-end testing suite following the Page Object Model, designed to validate page dynamics, responsiveness, and user journey. \n" +
                        "📌 Highlights: Clean reports, scalable structure, maintainable design. \n" +
                        "📈 Results: Reduced release rework and verified interface stability. \n" +
                        "⚙️ Tools: ",
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
        description:    "Scalable E2E automation, featuring load testing and detailed reports. \n" +  
                        "Optimized for modern front-end architectures and user flow analysis. \n" +
                        "📌 Highlights: Stress testing, behavioral insights, CI-ready automation. \n" + 
                        "📈 Results: Performance boost in critical scenarios and data-driven decisions. \n" +
                        "⚙️ Tools: ", 
        icons: [
            { icon: JavaScriptIcon, name: "JavaScript" },
            { icon: CypressIcon, name: "Cypress" },
            { icon: AllureIcon, name: "Allure Reports" },
            { icon: K6Icon, name: "K6" },

        ], 
        video: StickerfyCypressJSVideo,
        code: "https://github.com/alisson-t-bucchi/stickerfy-cypress-js"
    },
     {
        id: 6,
        image: QAChallengeRX,
        title: "Cypress test suite for QA Challenge RX Redefined Page.",
        description:    "Modern E2E test suite with efficient coverage of business-critical functionalities and candidate assessment criteria. \n" +
                        "📌 Highlights: Fast execution, structured test flows, readable codebase. \n" +
                        "📈 Results: High reliability for challenge validation and fast feedback cycles. \n" +
                        "⚙️ Tools: ",
        icons: [
            { icon: JavaScriptIcon, name: "JavaScript" },
            { icon: CypressIcon, name: "Cypress" },
        ], 
        video: QAChallengeRXVideo,
        code: "https://github.com/alisson-t-bucchi/interview-qa-test-resolution.git"
    },
];

const iaProjects = [
    {
      id: 1,
      image: CostOfLivingPredictor,
      title: "Global cost of living predictor using Machine Learning.",
      description:  "Interactive cost of living predictor for any country and city, built in Python.\n" +
                    "Applies data analysis and supervised learning with an intuitive controls and dynamic predictions for users.\n" +
                    "📌 Highlights: Clean UI, accurate ML model, data-driven insights.\n" +
                    "📈 Results: Enables geographic cost comparisons and predictive planning with practical accuracy.\n" +
                    "🤖 Technologies: ",
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
        description:    "AI-powered recipe generator built with dual measurement systems (metric and imperial) for global accessibility using Regex for accurate parsing of ingredients and quantities.\n" +
                        "📌 Highlights: Natural language generation, intuitive design, multi-unit output.\n" +
                        "📈 Results: Produces diverse and personalized recipes in seconds with readable formatting.\n" +
                        "🤖 Technologies: ",
        icons: [
            { icon: PythonIcon, name: "Python" },
            { icon: CohereIcon, name: "Cohere" },
            { icon: StreamlitIcon, name: "Streamlit" },
        ],  
        video: AIChefDeCuisineVideo,
        code: "https://github.com/alisson-t-bucchi/chef_de_cuisine_ai.git"
    },
    {      
        id: 3,
        image: DashboardPowerBI_1, 
        title: "Power BI Dashboards.",
        description:    "Interactive dashboard built with Power BI using Excel-based databases and an ETL framework for data transformation.\n" +
                        "📌 Highlights: Accurate visualizations, intuitive layout, actionable business insights.\n" +
                        "📈 Results: Beautiful and insightful graphics that enhance decision-making.\n" +
                        "🤖 Technologies: ",
        icons: [
            { icon: PowerBIIcon, name: "Power BI" },
        ],
        video: DashboardPowerrBI_1Video,
        code: "https://github.com/alisson-t-bucchi/power-bi-dashboards.git"
    }, 
];

const fullStackProjects = [
    {
      id: 1,
      image: ComingSoon,
      title: "Hotel Booking System.",
      description:  "Full-stack hotel booking platform built, includes user authentication, dynamic room management, and intuitive booking workflows.\n" +
                    "Powered by Prisma ORM over a MySQL database.\n" +
                    "📌 Highlights: Scalable architecture, clean UI, secure login, and optimized data handling.\n" +
                    "📈 Results: Streamlined booking operations and efficient room availability updates.",
      icons: [
        { icon: JavaScriptIcon, name: "JavaScript" },
        { icon: ReactIcon, name: "React" },
        { icon: TailwindcssIcon, name: "Tailwindcss" },
        { icon: NodeIcon, name: "Node.js" },
        { icon: PrismaIcon, name: "Prisma"},
        { icon: MySQLIcon, name: "MySQL" },
    ],  
      video: ComingSoon,
      code: "https://github.com/alisson-t-bucchi/hotel-booking-react-js.git"
    },
    {
      id: 2,
      image: ComingSoon,
      title: "Chatbot Application.",
      description:  "Real-time chatbot app with Firebase integration.\n" +
                    "Features user authentication, persistent chat history, and seamless live messaging.\n" +
                    "📌 Highlights: Scalable backend, session persistence, secure messaging flow.\n" +
                    "📈 Results: Real-time interaction with reliable communication and user state management.",
      icons: [
        { icon: JavaScriptIcon, name: "JavaScript" },
        { icon: ReactIcon, name: "React" },
        { icon: TailwindcssIcon, name: "Tailwindcss" },
        { icon: NodeIcon, name: "Node.js" },
        { icon: FirebaseIcon, name: "Firebase" },
    ],  
      video: ComingSoon,
      code: ""
    },
];

const CardsItems = ({image, title, description, icons, video, code}) => {
    return (
    <div className="shadow-lg rounded-lg p-6 bg-gray-100">
        <img src={image} alt="Project" className="rounded-md" />
        <h4 className="mt-4 text-xl font-bold">{title}</h4>
        {description.split("\n").map((line, index) => (
            <p className="text-l" key={index}>{line}</p>
        ))}
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
                {fullStackProjects.map((project) => (
                      <motion.div
                      key={project.id}
                      variants={cardVariants}
                    >
                    <CardsItems
                    image={project.image}
                    title={project.title}
                    description={project.description}
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

export {qaProjects, iaProjects, fullStackProjects}
