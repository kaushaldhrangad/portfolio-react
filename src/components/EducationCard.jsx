import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationCard = ({ education }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // shadow-[1px_1px_34px_0px_#A3E635]

  return (
    <div className="card w-[650px] bg-neutral-800 rounded-xl py-3 px-4 justify-between relative  border border-[#A3E635] shadow-[1px_1px_18px_0px_#A3E635]  overflow-hidden flex flex-col gap-3 transition-all delay-[0.1s] ease-in-out hover:-translate-y-4  max-md:p-3 max-md:gap-2 max-md:w-[300px] max-lg:overflow-x-hidden max-xl:w-[500px] max-sm:w-[300px] ">
      <div className="top flex gap-3 w-full">
        <img
          className="logo h-12 text-white rounded-lg w-1/2 mt-1 max-md:max-w-16 max-max-md:max-h-16 md:max-w-16"
          src={education.img}
        />
        <div className="text-[#ffff] body font-['Libre_Franklin'] flex flex-col w-full">
          <div className="text-md font-bold max-md:text-sm">
            {education.school}
          </div>
          <div className="text-sm mt-2 text-zinc-300 font-bold max-md:text-sm">
            {education.degree}
          </div>
          <div className="text-sm mt-2 font-[550] max-md:text-sm text-zinc-300">
            {education.date}
          </div>
          <div className="text-[#A3E635] text-sm mt-2 flex font-[550] max-md:text-sm">
            <span className="font-bold pr-1">Grade:</span>
            {education.grade}
          </div>
        </div>
      </div>
      <div className="font-['Chivo'] text-zinc-300 description w-full text-[16px] tracking-wide font-normal mb-2 max-md:text-[14.8px]">
        {education?.desc && (
          <span className=" hover:overflow-visible overflow-hidden max-w-full text-ellipsis">
            {education?.desc}
          </span>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
