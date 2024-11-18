import React, { useEffect } from "react";
import { projects } from "../constrant";
import { FaSquareGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Border from "./Border";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <h1 className="title uppercase font-['Libre_Franklin'] mt-8 text-3xl font-bold justify-center item-center flex underline text-white">
        Projects
      </h1>
      <div className="container  px-5 py-16 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          return (
            <div
              className=" bg-neutral-800 rounded-md py-3 px-4 transition-all delay-[0.1s] ease-in-out hover:-translate-y-4 border-[#A3E635] shadow-[1px_1px_18px_0px_#A3E635]"
              key={index} data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img
                className="w-[100%] cursor-pointer flex justify-center items-center py-5 px-5"
                src={project.image}
                alt={project.title}
              />
              <div className="text-[#A3E635] font-['Libre_Franklin'] px-5 font-bold text-xl">
                {project.title}
              </div>
              <div className="description tracking-wide font-['Chivo'] px-5 py-5 text-[17px] text-gray-300">
                {project.description.length > 50
                  ? project.description.substring(0, 250) + "...."
                  : project.description}
              </div>
              <h3 className="text-white font-semibold px-5 text-lg">Tech Stack:-</h3>
              <div className="tags font-['Chivo'] w-full px-3 flex items-center flex-wrap gap-8px mt-2">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex px-2 py-1 font-normal items-center rounded-md mx-2 mt-3 text-sm color-gray text-black bg-[#A3E635]">
                    • {tag}
                  </div>
                ))}
              </div>
              <div className="items-center flex gap-5">
                <a title="GitHub Repo" target="_blank" className="transition ease-in-out delay-50 hover:scale-150" href={project.github}>
                  <button className="button my-5 pl-5 flex items-center">
                    <FaSquareGithub  size="2.5em" className="text-zinc-400"/>
                  </button>
                </a>
                <a title="Live Demo" target="_blank" href={project.live}>
                  <button className="button my-7  transition ease-in-out delay-50 hover:scale-150">
                    <FaExternalLinkAlt size="2em" className="text-zinc-400" />
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" mr-7 flex font-['Chivo'] justify-center">
        <a target="_blank" href="https://github.com/kaushaldhrangad">
          <button className="bg-[#ffff] hover:bg-[#A3E635]  text-black rounded-md p-2 font-bold">
            View all
          </button>
        </a>
      </div>
      <Border />
    </div>
  );
};

export default ProjectCard;
