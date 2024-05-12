import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-800 font-['Libre_Franklin'] text-white py-4 sm:flex sm:justify-between sm:items-center">
      <div className="text-center sm:text-left px-4 sm:px-8 py-2 sm:py-0 font-semibold">
        {" "}
        Made by Kaushal Dhrangad 🚀{" "}
      </div>
      <div className="flex justify-center sm:justify-start gap-4 px-4 sm:px-8 py-2 sm:py-0">
        <a href="https://github.com/kaushaldhrangad/" target="_blank" rel="noopener noreferrer"><div>
          <FaGithub size="2em" />
        </div></a>
        <a href="https://www.linkedin.com/in/kaushaldhrangad/" target="_blank" rel="noopener noreferrer"><div>
          <FaLinkedin size="2em" />
        </div></a>
        <a href="https://twitter.com/KaushalDhrangad" target="_blank" rel="noopener noreferrer"><div>
          <FaXTwitter size="2em" />
        </div></a>
      </div>
      <div className="text-center sm:text-right px-4 sm:px-8 py-2 sm:py-0 font-semibold">
        © 2024 Kaushal Dhrangad. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
