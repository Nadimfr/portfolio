import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="bg-[rgb(0,0,0,0.3)] p-[4rem] pb-[2rem] min-h-[100vh] min-w-[100wh]">
        {children}
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
      </div>
    </main>
  );
};

export default Layout;
