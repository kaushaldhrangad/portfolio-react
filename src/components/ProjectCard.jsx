import React from "react";
import { projects } from "../constrant";
import { FaSquareGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Border from "./Border";

const ProjectCard = () => {
  return (
    <div>
      <h1 className=" uppercase mt-8 text-3xl font-bold justify-center item-center flex underline text-gray-800">
        Projects
      </h1>
      <div className="container  px-5 py-16 mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          return (
            <div
              className=" bg-gray-300 rounded-md py-3 px-4 transition-all delay-[0.1s] ease-in-out hover:-translate-y-4"
              key={index}>
              <img
                className="w-[100%] cursor-pointer flex justify-center items-center py-5 px-5"
                src={project.image}
                alt={project.title}
              />
              <div className="title px-5 font-bold text-xl">
                {project.title}
              </div>
              <div className="description px-5 py-5 text-gray-700">
                {project.description.length > 50
                  ? project.description.substring(0, 250) + "...."
                  : project.description}
              </div>
              <h3 className="font-semibold px-5 text-lg">Tech Stack:-</h3>
              <div className="tags w-full px-3 flex items-center flex-wrap gap-8px mt-2">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex px-2 py-1 font-normal items-center rounded-md mx-2 mt-3 text-sm color-gray text-white bg-gray-600">
                    • {tag}
                  </div>
                ))}
              </div>
              <div className="items-center flex gap-5">
                <a title="GitHub Repo" target="_blank" href={project.github}>
                  <button className="button my-5 pl-5 flex items-center pr- hover:">
                    <FaSquareGithub color="black" size="2.5em" />
                  </button>
                </a>
                <a title="Live Demo" target="_blank" href={project.live}>
                  <button className="button my-7  ">
                    <FaExternalLinkAlt size="2em" />
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Border />
    </div>
  );
};

export default ProjectCard;
