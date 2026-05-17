import { motion } from "motion/react"

import ComingSoon from "../assets/images/coming-soon.webp"
//
import SaucedemoPage from "../assets/images/saucedemo-page.webp"
//
import CostOfLivingPredictor from "../assets/images/cost-of-living-ai.webp"
//
import AIChefDeCuisine from "../assets/images/ai-chef-de-cuisine.webp"
import AIChefDeCuisineVideo from "../assets/videos/ai-chef-de-cuisine.mp4"
//
import DashboardPowerBI_1 from "../assets/images/DashboardPowerBI-1.png"
import DashboardPowerrBI_1Video from "../assets/videos/power-bi-dashboards.mp4"
//
import OrangeHRM from "../assets/images/orange-hrm.webp"    
import BugBank from "../assets/images/bug-bank.webp"
import BrowserStackDemo from "../assets/images/browser-stack-demo.webp"
import AutomationPractice from "../assets/images/automation-practice.webp"

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
import GitHubActionsIcon from "../assets/icons/githubactions-original.svg"
import MochaReportIcon from "../assets/icons/mocha-original.svg"
import RobotFrameworkIcon from "../assets/icons/robotframework-original.svg"
import JenkinsIcon from "../assets/icons/jenkins-original.svg"
import JMeterIcon from "../assets/icons/jmeter-original.svg"


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
        image: SaucedemoPage,
        title: "Playwright test suite for Saucedemo Store by Swag Labs.",
        description:    "The E2E test suite supports scalable workflows and critical navigation scenarios, enhancing overall reliability.\n" + 
                        "📌 Highlights: High test coverage, parallel execution, modular architecture.\n" + 
                        "📈 Results: Significant reduction in production bugs and improved shopping flow consistency. \n" +
                        "⚙️ Tools: ",
        icons: [
            { icon: JavaScriptIcon, name: "JavaScript" },
            { icon: PlaywrightIcon, name: "Playwright" },
            { icon: MochaReportIcon, name: "Mocha Awesome Report" },
            { icon: GitHubActionsIcon, name: "Github Actions" },
        ], 
        video: ComingSoon,  //criar video
        code: "https://github.com/alisson-t-bucchi/saucedemo-playwright-js.git", 
    },
    {
        id: 2,
        image: BugBank,
        title: "Robot Framework test suite for Bug Bank.",
        description:    "The solution ensures clear and traceable test logic through Gherkin syntax and rich reporting. \n" + 
                        "📌 Highlights: Business-readable test cases, visual evidence, CI integration \n" +
                        "📈 Results: Early regression detection and faster test cycles. \n" +
                        "⚙️ Tools: ", 
        icons: [
            { icon: PythonIcon, name: "Python" },
            { icon: RobotFrameworkIcon, name: "Robot Framework" },
            { icon: AllureIcon, name: "Allure" },
            { icon: GitHubActionsIcon, name: "Github Actions" },
        ], 
        video: ComingSoon, //criar video
        code:"https://github.com/alisson-t-bucchi/bug_bank_robot_python.git"
    },
/*     {
        id: 3,
        image: OrangeHRM,
        title: "Selenium with BDD test suite for Orange HRM Demo.",
        description:    "Scalable testing architecture covers key customer service flows.\n" +
                        "📌 Highlights: Reusable steps, CI/CD-ready, multiplatform testing. \n" +
                        "📈 Results: Increased system reliability and enhanced operator experience. \n" +
                        "⚙️ Tools: ",
        icons: [
            { icon: JavaIcon, name: "Java" },
            { icon: SeleniumIcon, name: "Selenium" },
            { icon: CucumberIcon, name: "Cucumber" },
            { icon: JunitIcon, name: "Junit 5" }, 
            { icon: AllureIcon, name: "Allure" },
            { icon: JMeterIcon, name: "JMeter" },
            { icon: JenkinsIcon, name: "Jenkins" },
        ],
        video: ComingSoon,
        code: "https://github.com/alisson-t-bucchi"
    },
    {
        id: 4,
        image: AutomationPractice,
        title: "Selenium test suite for Automation Practice page.", //http://www.automationpractice.pl/index.php
        description:    "End-to-end testing suite following the Page Object Model, designed to validate page dynamics, responsiveness, and user journey. \n" +
                        "📌 Highlights: Clean reports, scalable structure, maintainable design. \n" +
                        "📈 Results: Reduced release rework and verified interface stability. \n" +
                        "⚙️ Tools: ",
        icons: [
            { icon: PythonIcon, name: "Python" },
            { icon: SeleniumIcon, name: "Selenium" },
            { icon: PytestIcon, name: "Pytest" }, 
            { icon: AllureIcon, name: "Allure" },
            { icon: JenkinsIcon, name: "Jenkins" },
        ],
        video: ComingSoon,
        code: "https://github.com/alisson-t-bucchi"
    }, */
    {
        id: 5,
        image: BrowserStackDemo,
        title: "Cypress test suite for BrowserStack Demo.", //https://bstackdemo.com/
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
            { icon: GitHubActionsIcon, name: "Github Actions" },
        ], 
        video: ComingSoon, //criar video
        code: "https://github.com/alisson-t-bucchi"
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

const CardsItems = ({ image, title, description, icons, video, code }) => {
  if (!description) return null;

  const { summary, highlights, results } = description;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-mdhover:scale-[1.02] transition duration-300">
      <img
        src={image} 
        alt={title} 
        className="rounded-md w-full h-48 object-cover"
      />
      <h4 className="mt-4 text-lg font-semibold text-white leading-snug">
        {title}
      </h4>
      <p className="text-gray-300 text-sm mt-2">
        {description}
      </p>
      {highlights && (
        <ul className="text-gray-400 text-xs mt-3 space-y-1">
          {highlights.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      )}
      {results && (
        <p className="text-gray-500 text-xs mt-3">
          {results}
        </p>
      )}
      {icons?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {icons.map(({ icon, name }, idx) => (
            <img
              key={idx}
              src={icon}
              alt={name}
              title={name}
              className="w-8 h-8 opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      )}

      {/* ACTIONS */}
      <div className="flex gap-3 mt-5">
        {video && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
            Live
          </a>
        )}
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-white/40  text-gray-300 text-sm px-4 py-2 rounded-lg transition">
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export default function Cards() {      
    return(
    <>
        <section id="project" className="relative max-w-6xl mx-auto px-4 py-12  bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-white">Projects</h3>
        <div className="mt-4 px-4 py-4 text-xl lg:text-justify space-y-2">
            <p>
                This portfolio presents selected projects across three core areas, focused on delivering reliable systems and data-driven solutions.
            </p>
            <ul className="list-none space-y-3 text-gray-300 leading-relaxed">
                <li>
                    🧪 <strong>QA Automation:</strong> Designing and implementing automated tests to ensure software quality, reliability, and performance.
                </li>
                <li>
                    🧠 <strong>AI & Data Visualization:</strong> Building machine learning solutions and visual interfaces to transform data into actionable insights.
                </li>
                <li>
                    🧩 <strong>Full-Stack Development:</strong> Developing scalable end-to-end applications with a focus on performance and user experience.
                </li>
            </ul>
            <p>
                Each project reflects a practical approach to solving real-world problems through technology, with a strong focus on quality, scalability, and continuous improvement.
            </p>    
        </div>
        </section>

        <section id="qa" className="shadow-lg rounded-lg p-4">
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
   
        
        <section id="ai-dataviz" className="shadow-lg rounded-lg p-4">
            <h3 className="text-2xl font-black text-center mb-4 py-10">🧠 AI & Data Visual 📊</h3>
            <motion.div
            className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6 mb-4 sm:grid-cols-1 gap-6"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.1, once: true }}
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

        <section id="fullstack" className="shadow-lg rounded-lg p-4">
            <h3 className="text-2xl font-black text-center mb-4 py-10">🧩 Full-Stack Apps</h3>
            <motion.div
            className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6 mb-4 sm:grid-cols-1 gap-6"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.1, once: true }}
            variants={containerVariants}
            >
                {fullStackProjects.map((project) => (
                    <motion.div
                    key={project.id}
                    variants={cardVariants} >
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
