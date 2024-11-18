import React from "react";

const Navbar = () => {
  return (
    <div className="font-['Chivo'] flex justify-between pt-16 ml-14 mr-14 max-sm:mx-0">
      <a href="/">
        <div className="logo  ml-10 text-2xl font-bold max-sm:text-[20px]">
          <span className="text-white max-sm:flex">Kaushal</span>{" "}
          <span className="text-[#A3E635]">Dhrangad </span>
        </div>
      </a>
      <div className="logo mr-7">
        {/* https://drive.google.com/file/d/1MTQiAecuAsBdac0ZUDQGHu7la0Q17R_U/view?usp=sharing */}
        <a
          target="_blank"
          href="https://drive.google.com/file/d/12Nk0z5ikJMtawjvlZM6iaqbb_K6DM_Y1/view?usp=sharing">
          <button className="bg-white hover:bg-[#A3E635]  text-black rounded-md p-2 font-bold">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
