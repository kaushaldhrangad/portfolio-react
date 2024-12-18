import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="card w-[650px] bg-neutral-800 rounded-xl py-3 px-4 justify-between relative  border border-[#A3E635] shadow-[1px_1px_18px_0px_#A3E635] overflow-hidden flex flex-col gap-3 transition-all delay-[0.1s] ease-in-out hover:-translate-y-4  max-md:p-3 max-md:gap-2 max-md:w-[300px] max-lg:overflow-x-hidden max-xl:w-[500px] max-sm:w-[300px]">
      <div className="top flex gap-3 w-full">
        {/* <div className="logo h-12 text-white rounded-lg w-1/2 mt-1 max-max-md:max-w-18 max-lg:max-w-18"> */}
        <img
          className="logo h-12 text-white rounded-lg w-1/2 mt-1 max-md:max-w-16 max-max-md:max-h-16 md:max-w-16"
          src={experience.img}
        />
        {/* </div> */}
        <div className="text-[#A3E635] body font-['Libre_Franklin'] flex flex-col w-full">
          <div className="text-md font-bold max-md:text-sm">
            {experience.role}
          </div>
          <div className="text-sm mt-2 text-gray-300 font-bold max-md:text-sm">
            {experience.company}
          </div>
          <div className="text-sm mt-2 font-[550] max-md:text-sm text-gray-300">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="text-gray-300 font-['Chivo'] description w-full text-[16px] font-normal mb-2 max-md:text-[15px]">
        {experience?.desc && (
          <span className=" hover:overflow-visible overflow-hidden max-w-full text-ellipsis">
            {experience?.desc}
          </span>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className="skills flex flex-wrap gap-2 pt-4">
              <b>Skills:</b>
              <div className="item-wrapper flex flex-wrap gap-2 ">
                {experience?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="skill text-md font-normal bg-[#A3E635] rounded-md px-2 py-1 text-black max-lg:text-sm">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <div
            className="document hover:flex hidden h-[70px] w-fit rounded-xl hover:cursor-pointer opacity-[0.5] "
            src={experience.doc}
          />
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
