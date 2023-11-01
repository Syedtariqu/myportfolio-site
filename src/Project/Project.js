import React from "react";
// import { motion } from "framer-motion";
import './Project.css'
import im5 from "../assets/Home/deliciousss.png";
import im4 from "../assets/Home/Resturent_1.png";
import im3 from "../assets/Home/multimart.png";
import im6 from "../assets/Home/memory.png";
import Projects from "./Projects";
const Project = () => {
  const github ={
    name1: "Deliciousss",
    name1_site : "https://deliciousssfood.netlify.app/",
    name2: "Resturant",
    name2_site : "https://resturantfav.netlify.app/",
    name3: "Multimart-website",
    name3_site : "https://multimart-website.netlify.app/",
    name4: "Memory-MernApp",
    name4_site : "https://memorycreator.netlify.app/",
    
  }
  return (
    <>
      <section id="project" className="section">
        <div className="container mx-auto">
          <div className="section_title leading-tight ">
            <h1>
              My <span>PRO</span>jects
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row  gap-x-10">
            <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              <Projects img={im5} github={github.name1} site={github.name1_site}/>
              <Projects img={im4} github={github.name2} site={github.name2_site}/>
            </div>
            <div className="flex-1  flex flex-col gap-y-12">
              <Projects img={im3} github={github.name3} site={github.name3_site}/>
              <Projects img={im6} github={github.name4} site={github.name4_site}/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
