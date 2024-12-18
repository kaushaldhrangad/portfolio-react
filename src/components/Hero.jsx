import React from "react";
import profile from "../assets/profile_pic.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Border from "./Border";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <div className="container">
      <div className=" flex justify-center">
        <div className="img mt-36 w-72 h-72">
          <Tilt tiltReverse={true}>
            <img
              className="flex border border-[#A3E635] shadow-[1px_1px_40px_9px_#A3E635]  top-1/2 left-1/2 -translate-x-[0%] -translate-y-[0%] rounded-full items-center"
              src={profile}
              alt="profile_img"
            />
          </Tilt>
        </div>
        <div></div>
      </div>
      <div className="title">
        <div className="font-[Bricolage Grotesque]">
          <h1 className=" font-['Chivo'] flex text-2xl justify-center mt-10 font-semibold text-md max-sm:text-xl max-md:text-xl text-[#ffff] uppercase">
            Kaushal Dhrangad
          </h1>
          <h2 className="flex text-center  justify-center mt-6 font-semibold text-5xl text-[#A3E635]">
            Full Stack Developer
          </h2>
          <p className=" font-['Chivo'] flex justify-center  text-center pr-8 font-medium pl-8 mt-7 text-gray-300 text-lg xl:m-auto xl:mt-7 xl:w-[70%] lg:m-auto lg:mt-7 lg:w-[70%] md:m-auto md:mt-7 md:w-[70%] ">
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.

          </p>
        </div>
        <div className="flex gap-5 mt-8 justify-center">
          <a
            target="_blank"
            className="transition ease-in-out delay-50 hover:scale-150"
            title="LinkedIn"
            href="https://www.linkedin.com/in/kaushaldhrangad/">
            <FaLinkedin size="2.5em" className="text-zinc-400"/>
          </a>
          <a
            target="_blank"
            className="transition ease-in-out delay-50 hover:scale-150"
            title="GitHub"
            href="https://github.com/kaushaldhrangad">
            <FaGithubSquare size="2.5em" className="text-zinc-400" />
          </a>
          <a
            target="_blank"
            className="transition ease-in-out delay-50 hover:scale-150"
            title="X"
            href="https://twitter.com/KaushalDhrangad">
            <FaSquareXTwitter size="2.5em" className="text-zinc-400" />
          </a>
        </div>
      </div>
      <Border />
    </div>
  );
};

export default Hero;
