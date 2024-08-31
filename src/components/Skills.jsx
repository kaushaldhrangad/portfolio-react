import React, { useEffect } from "react";
import { skills } from "../constrant";
import Border from "./Border";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center relative z-[1]" >
      <div className="wrapper relative flex justify-between items-center flex-col w-full max-[1100px] gap-3: ">
        <h1 className="flex font-['Libre_Franklin'] justify-center mt-8 text-3xl text-gray-800 font-bold uppercase underline" >
          Skills
        </h1>
        <div
          key={skills.id}
          className="  skills-container font-['Chivo'] w-full flex flex-wrap mt-7 gap-7 justify-center max-sm:w-5/6"  data-aos="flip-up" data-aos-anchor-placement="top-center" >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill bg-gray-200 w-full max-w-lg border  rounded-2xl px-9 py-4 " data-aos="flip-up"  data-aos-anchor-placement="top-center" >
              <div className="skill-title text-2xl text-gray-800 font-semibold mb-5 items-center " >
                {skill.title}
              </div>
              <div className="skill-list flex justify-center flex-wrap gap-3 mb-5">
                {skill.skills.map((item, index) => (
                  <div
                    key={index}
                    className="skills-item text-xs font-normal border-black border rounded-md px-4 py-3 flex items-center justify-center gap-2 ">
                    <div className="skill-img w-6 h-6 ">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="skills-name font-semibold text-[1.05rem]">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Border />
    </div>
  );
};

export default Skills;
