import JavaIcon from "../assets/icons/java.svg"
import PythonIcon from "../assets/icons/python.svg"
import JavaScriptIcon from "../assets/icons/javascript.svg"
import SeleniumIcon from "../assets/icons/selenium.svg"
import CypressIcon from "../assets/icons/cypress.svg"
import MySQLIcon from "../assets/icons/mysql.svg"
import PostmanIcon from "../assets/icons/postman.svg"
import PowerBIIcon from "../assets/icons/power-bi.svg"
import PostgreSQLIcon from "../assets/icons/postgresql.svg"
import AWSIcon from "../assets/icons/amazonwebservices.svg"
import ScikitlearnIcon from "../assets/icons/scikitlearn.svg"
import TensorflowIcon from "../assets/icons/tensorflow.svg"
import RIcon from "../assets/icons/r.svg"
import ApachehadoopIcon from "../assets/icons/apachehadoop.svg"

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

export default function TechStack({ children }) {
  return (
    <>
        <section className="text-left py-6">
            <h3 className="text-3xl font-bold">My Tech Stack</h3>
            <p className="text-lg py-4">I'm currently working with: </p>
            <div className="flex gap-4 justify-start items-center flex-wrap overflow-x-auto">
                {techIcons1.map((technology, key) => (
                    <img className="w-14 h-12 object-contain"
                    key={`technology-${key}`}
                    src={technology}
                    alt={`img-${key}`} />
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
                    alt={`img-${key}`} />
                    ))}
            </div>
        </section>
    </>
  )
}
