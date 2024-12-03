import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
  ار تباط با من
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/mohammadbaghani" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:mihirc0111@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/mohammad-baghani-7065ba242/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      
      </div>
  )
}

export default Media