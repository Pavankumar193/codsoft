import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { IoMdMail } from "react-icons/io";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">KP Pavan Kumar</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        As a MERN stack developer, I build dynamic web applications using MongoDB, Express.js, React, and Node.js. 
        My expertise lies in crafting seamless, full-stack solutions that integrate both front-end and back-end development.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6362121227</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">pavankumar369w@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft