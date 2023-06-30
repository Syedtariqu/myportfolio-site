import React from "react";
// import im5 from "../assets/Home/weather.png";
function Projects(porps) {
// const link = {
  
//   link1 : 
// }

  return (
    <>
      <div className=" card_project group relative overflow-hidden border-2 border-black/50 rounded-xl">
        {/* overlay  */}
        <div className=" group-hover:bg-black/70 w-full h-full  absolute z-40 transition-all duration-300"></div>
        {/* img  */}

        <img
          src={porps.img}
          className="group-hover:scale-125 transition-all duration-500"
          alt=""
        />
        {/* pretitle  */}
        <div className="pretitle absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className=" text-bg-dark text-white ">
            <a href={`https://github.com/Syedtariqu/${porps.github}`} target="_blank" rel=" noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </span>
          <span className=" text-bg-dark text-white ">
            <a href={porps.site} target="_blank" rel=" noreferrer">
            <i class="bi bi-link-45deg"></i>
            </a>
          </span>
        </div>
        {/* title  */}
        <div className=" title absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
          <span className="text-white  text-3xl font-bold">{porps.github}</span>
        </div>
      </div>
    </>
  );
}

export default Projects;
