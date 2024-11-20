import React from "react";

function Navbar() {
  return (
    <div className="h-[10vh] flex flex-row justify-between px-14 py-4">
      <h2 className="text-2xl font-semibold">Etech.</h2>
      <div className="flex flex-row gap-4">
        <p className="text-xl text-gray-600">Courses</p>
        <p className="text-xl text-gray-600">Teachers</p>
        <p className="text-xl text-gray-600">Offers</p>
        <p className="text-xl text-gray-600">Contact</p>
      </div>

      <div className="flex flex-row gap-4 items-center font-medium">
        <button className="border border-purple-500 px-5 py-1 text-center rounded-lg">
          Sign In
        </button>
        <button className=" text-white border border-purple-500 px-4 py-1 text-center rounded-lg bg-gradient-to-br to-purple-600 from-blue-400">
          Free Trial
        </button>
      </div>
    </div>
  );
}

export default Navbar;
