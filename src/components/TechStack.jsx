// TechStackByCores.jsx

import JavaIcon from "../assets/icons/java-original.svg"
import PythonIcon from "../assets/icons/python-original.svg"
import JavaScriptIcon from "../assets/icons/javascript-original.svg"
import SeleniumIcon from "../assets/icons/selenium-original.svg"
import CypressIcon from "../assets/icons/cypressio-original.svg"
import MySQLIcon from "../assets/icons/mysql-original-wordmark.svg"
import PostmanIcon from "../assets/icons/postman-original.svg"
import PowerBIIcon from "../assets/icons/power-bi-icon.svg"
import PostgreSQLIcon from "../assets/icons/postgresql-original-wordmark.svg"
import AWSIcon from "../assets/icons/amazonwebservices-original-wordmark.svg"
import PandasIcon from "../assets/icons/pandas-original-wordmark.svg"
import PrismaIcon from "../assets/icons/prisma-original-wordmark.svg"
import PlaywrightIcon from "../assets/icons/playwright-original.svg"
import ScikitlearnIcon from "../assets/icons/scikitlearn-original.svg"
import TensorflowIcon from "../assets/icons/tensorflow-original.svg"
import RIcon from "../assets/icons/r-original.svg"
import ApacheSparkIcon from "../assets/icons/apachespark-original-wordmark.svg"

const techStack = [
  {
    title: "Core Skills",
    description: "Technologies I use to test reliable systems",
    items: [
      { name: "Playwright", icon: PlaywrightIcon },
      { name: "Cypress", icon: CypressIcon },
      { name: "Selenium", icon: SeleniumIcon },
      { name: "APIs / REST", icon: PostmanIcon },
    ],
  },
  {
    title: "Data & Analytics",
    description: "Tools for data analysis and insights",
    items: [
      { name: "Power BI", icon: PowerBIIcon },
      { name: "Pandas", icon: PandasIcon },
      { name: "PostgreSQL", icon: PostgreSQLIcon },
      { name: "R", icon: RIcon },
    ],
  },
  {
    title: "Supporting Technologies",
    description: "Additional tools for development",
    items: [
      { name: "Python", icon: PythonIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "Java", icon: JavaIcon },
      { name: "Prisma", icon: PrismaIcon },
      { name: "SQL", icon: MySQLIcon },
    ],
  },
  {
    title: "Currently Exploring",
    description: "Technologies I'm actively learning",
    items: [
      { name: "AWS", icon: AWSIcon },
      { name: "Spark", icon: ApacheSparkIcon },
      { name: "Scikit-learn", icon: ScikitlearnIcon },
      { name: "TensorFlow", icon: TensorflowIcon },
    ],
  },
]

function TechItem({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition"
      />
      <span className="text-xs text-gray-300">{name}</span>
    </div>
  )
}

function TechSection({ title, description, items }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:scale-105">
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-6">
        {items.map((item, index) => (
          <TechItem key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="px-4 lg:px-12 py-12">
      {/* Title */}
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-white">
          Technologies I Work With...
        </h3>
        {/* <p className="text-gray-400 mt-2">
          A curated set of tools I use to build, test and analyze systems
        </p> */}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {techStack.map((section, index) => (
          <TechSection key={index} {...section} />
        ))}
      </div>
    </section>
  )
}
