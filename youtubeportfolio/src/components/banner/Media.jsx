import React from 'react';
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/Pavankumar193" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="mailto:pavankumar369w@gmail.com" className="bannerIcon">
            <IoMdMail />
          </a>
          <a href="https://www.linkedin.com/in/pavan-kumar-8055-/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <DiMongodb />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media;
