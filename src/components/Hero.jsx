import React from "react";
import profile from "../assets/profile_pic.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Border from "./Border";
import Tilt from "react-parallax-tilt"

const Hero = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="img mt-36 w-72 h-72">
          <Tilt tiltReverse={true}>
          <img
            className="flex  top-1/2 left-1/2 -translate-x-[0%] -translate-y-[0%] rounded-full items-center"
            src={profile}
            alt=""
          />
          </Tilt>
        </div>
        <div></div>
      </div>
      <div className="title">
        <div className="">
          <h1 className=" font-['Chivo'] flex text-2xl justify-center mt-10 font-semibold text-md max-sm:text-xl max-md:text-xl text-gray-700 uppercase">
            Kaushal Dhrangad
          </h1>
          <h2 className="flex text-center font-['Libre_Franklin'] justify-center mt-6 font-semibold font-sans text-5xl  text-gray-800">
            Frontend Developer
          </h2>
          <p className=" font-['Chivo'] flex justify-center text-center pr-8 font-medium pl-8 mt-7 text-gray-600 text-xl"> 
            I have a passion for software. I enjoy creating tools that make life
            easier for people.
          </p>
        </div>
        <div className="flex gap-5 mt-8 justify-center">
          <a
            target="_blank"
            className="transition ease-in-out delay-50 hover:scale-150"
            title="LinkedIn"
            href="https://www.linkedin.com/in/kaushaldhrangad/">
            <FaLinkedin size="2.5em" />
          </a>
          <a
            target="_blank"
            className="transition ease-in-out delay-50 hover:scale-150"
            title="GitHub"
            href="https://github.com/kaushaldhrangad">
            <FaGithubSquare size="2.5em" />
          </a>
          <a
            target="_blank"
            className="transition ease-in-out delay-50 hover:scale-150"
            title="X"
            href="https://twitter.com/KaushalDhrangad">
            <FaSquareXTwitter size="2.5em" />
          </a>
        </div>
      </div>
      <Border />
    </div>
  );
};

export default Hero;
