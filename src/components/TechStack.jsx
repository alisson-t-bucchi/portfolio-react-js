import { motion } from "motion/react"
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

const containerVariants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
      delay: 1
    },
  },
}

const itemVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.6,
    },
  },
}

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
     <h3 className="text-3xl font-bold">My Tech Stack</h3>
     <div className="grid lg:grid-cols-2 items-stretch gap-6">
      <section className="flex flex-col h-ful text-left py-4">
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
        variants={containerVariants}
        >
          < motion.p className="text-lg py-4" variants={itemVariants}>
          I'm currently working with: 
          </motion.p>
          <div className="flex gap-4 justify-start items-center flex-wrap">
            {techIcons1.map((technology, key) => (
              <motion.div
              key={key}
              variants={itemVariants}
              initial="offscreen"
              whileInView="onscreen"
              >
                <img className="w-14 h-12 object-contain"
                src={technology}
                alt={`img-${key}`}
                />
              </motion.div>
              ))}
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col h-ful text-left py-4">
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
        variants={containerVariants}
        >
          < motion.p className="text-lg py-4" variants={itemVariants}>
          I'm learning and interested in: 
          </motion.p>
          <div className="flex gap-4 justify-start items-center flex-wrap">
            {techIcons2.map((technology, key) => (
              <motion.div
              key={key}
              variants={itemVariants}
              initial="offscreen"
              whileInView="onscreen"
              >
                <img className="w-14 h-12 object-contain"
                src={technology}
                alt={`img-${key}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
    </>
  )
}
