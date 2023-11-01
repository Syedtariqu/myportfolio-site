import React from 'react'
import "./Skill.css"
import { motion } from "framer-motion"
const jsvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "70%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const njsvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "60%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const mdbvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "60%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const reactvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "55%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const htmlvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "80%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}

const Skill = () => {
  return (
    <>
      <section className="skill skills_section" id="skill">
        <div className="skills_head">
          <h1>My<span>Skills</span></h1>

        </div>
        <div className="skills_main">
          <div className="skill_bar">
            <div className="info">
              <h4>Javascript</h4>
              <h4>70%</h4>
            </div>
            <div className="bar">
              <motion.span variants={jsvariants} initial="hidden" whileInView="visible" className="js"></motion.span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <h4>Node js</h4>
              <h4>60%</h4>
            </div>
            <div className="bar">
              <motion.span variants={njsvariants} initial="hidden" whileInView="visible" className="njs"></motion.span>
            </div>
          </div>

          <div className="skill_bar">
            <div className="info">
              <h4>Mongodb</h4>
              <h4>60%</h4>
            </div>
            <div className="bar">
              <motion.span variants={mdbvariants} initial="hidden" whileInView="visible" className="mdb"></motion.span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <h4>React Js</h4>
              <h4>55%</h4>
            </div>
            <div className="bar">
              <motion.span variants={reactvariants} initial="hidden" whileInView="visible" className="react"></motion.span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <h4>Html</h4>
              <h4>80%</h4>
            </div>
            <div className="bar">
              <motion.span variants={htmlvariants} initial="hidden" whileInView="visible" className="fm"></motion.span>
            </div>
          </div>


        </div>

      </section>
    </>
  )
}

export default Skill ;