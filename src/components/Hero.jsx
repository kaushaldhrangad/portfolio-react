import React from "react";
import profile from "../assets/profile_pic.png";
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Hero = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="img mt-36 w-72 h-72">
          <img
            className="flex justify top-1/2 left-1/2 -translate-x-[0%] -translate-y-[0%] rounded-full items-center"
            src={profile}
            alt=""
          />
        </div>
        <div>
        </div>
      </div>
          <div className="title">
            <div>
              <h1 className="flex justify-center mt-10 font-semibold font-sans text-md md:text-2xl text-gray-700 uppercase">Kaushal Dhrangad</h1>
              <h2 className="flex justify-center mt-6 font-semibold font-sans text-5xl  text-gray-800">Frontend Developer</h2>
              <p className="flex justify-center text-center pr-8 font-medium pl-8 mt-7  font-sans text-gray-600 text-xl">I have a passion for software. I enjoy creating tools that make life easier for people.</p>
            </div>
            <div className="flex gap-5 mt-8 justify-center">
              <a target="_blank" className="transition ease-in-out delay-50 hover:scale-150" title="LinkedIn" href="https://www.linkedin.com/in/kaushaldhrangad/"><FaLinkedin size="2em"/></a>
              <a target="_blank" className="transition ease-in-out delay-50 hover:scale-150" title="GitHub" href="https://github.com/kaushaldhrangad"><FaGithubSquare size="2em" /></a>
              <a target="_blank" className="transition ease-in-out delay-50 hover:scale-150" title="X" href="https://twitter.com/KaushalDhrangad"><FaSquareXTwitter size="2em" /></a>
            </div>
          </div>
          <div className="border mt-7 border-zinc-200"></div>
    </div>
  );
};

export default Hero;
