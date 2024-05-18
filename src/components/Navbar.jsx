import React from "react";

const Navbar = () => {
  return (
    <div className="font-['Chivo'] flex justify-between pt-16 ml-14 mr-14 max-sm:mx-0">
      <a href="/">
        <div className="logo ml-10 text-2xl font-bold max-sm:text-[20px]">
          <span className="text-gray-600 max-sm:flex">Kaushal</span> Dhrangad{" "}
        </div>
      </a>
      <div className="logo mr-7">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1MTQiAecuAsBdac0ZUDQGHu7la0Q17R_U/view?usp=sharing"
          download="resume.pdf">
          <button className="bg-gray-700 hover:bg-gray-600  text-white rounded-md p-2 font-bold">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
