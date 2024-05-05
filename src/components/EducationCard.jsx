import React from "react";

const EducationCard = ({ education }) => {
  return (
    <div className="card w-[650px] bg-gray-300 rounded-xl py-3 px-4 justify-between relative  border overflow-hidden flex flex-col gap-3 transition-all delay-[0.1s] ease-in-out hover:-translate-y-4  max-md:p-3 max-md:gap-2 max-md:w-[300px] max-lg:overflow-x-hidden max-xl:w-[500px] max-sm:w-[350px] ">
      <div className="top flex gap-3 w-full">
        {/* <div className="logo h-12 text-white rounded-lg w-1/2 mt-1 max-max-md:max-w-18 max-lg:max-w-18"> */}
        <img
          className="logo h-12 text-white rounded-lg w-1/2 mt-1 max-md:max-w-16 max-max-md:max-h-16 md:max-w-16"
          src={education.img}
        />
        {/* </div> */}
        <div className="body flex flex-col w-full">
          <div className="text-md font-semibold max-md:text-sm">
            {education.school}
          </div>
          <div className="text-sm mt-1 text-zinc-700 font-semibold max-md:text-sm">
            {education.degree}
          </div>
          <div className="text-sm mt-1 font-[500] max-md:text-sm text-zinc-700">
            {education.date}
          </div>
          <div className="text-sm mt-2 flex font-[500] max-md:text-sm text-zinc-700">
            {/* <div className="font-bold mt-1"></div> */}
            <span className="font-bold pr-1">Grade:</span>{education.grade}
          </div>
        </div>
      </div>
      <div className="description w-full text-[14px] font-normal mb-2 max-md:text-sm">
        {education?.desc && (
          <span className=" hover:overflow-visible overflow-hidden max-w-full text-ellipsis">
            {education?.desc}
          </span>
        )}
        {/* {education?.skills && (
          <>
            <br />
            <div className="skills flex flex-wrap gap-2 pt-4">
              <b>Skills:</b>
              <div className="item-wrapper flex flex-wrap gap-2 ">
                {experience?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="skill text-sm font-normal text-gray-900 max-lg:text-sm">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )} */}
      </div>
      {/* {experience.doc && (
        <a href={experience.doc} target="new">
          <div
            className="document hover:flex hidden h-[70px] w-fit rounded-xl hover:cursor-pointer opacity-[0.5] "
            src={experience.doc}
          />
        </a>
      )} */}
    </div>
  );
};

export default EducationCard;
