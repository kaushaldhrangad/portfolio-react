import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-16 ml-14 mr-14">
      <a href="/">
        <div className="logo ml-10 text-2xl font-bold">
          <span className="text-gray-600">Kaushal</span> Dhrangad{" "}
        </div>
      </a>
      <div className="logo mr-7">
        <a href="">
          <button className="bg-gray-700 hover:bg-gray-600  text-white rounded-md p-2 font-bold ">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
