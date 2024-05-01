import React from "react";

const Navbar = () => {
  return <div className="flex justify-between pt-16 ml-14 mr-14">
    <div className="logo ml-10 text-xl ">Logo</div>
    <div className="logo mr-7">
      <button className="bg-gray-500 text-white rounded-md p-2 font-bold ">Download CV</button>
    </div>
  </div>
};

export default Navbar;
