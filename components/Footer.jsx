import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full relative bottom-0 flex items-center">
      <div className="rounded-full border-white border-2 h-10 w-10 flex justify-center items-center mr-2 cursor-pointer hover:scale-105 duration-300">
        <FaLinkedinIn color="white" />
      </div>
      <div className="rounded-full border-white border-2 h-10 w-10 flex justify-center items-center mr-2 cursor-pointer hover:scale-105 duration-300">
        <FaInstagram />
      </div>
      <div className="rounded-full border-white border-2 h-10 w-10 flex justify-center items-center mr-2 cursor-pointer hover:scale-105 duration-300">
        <FaGithub />
      </div>
    </div>
  );
};

export default Footer;
