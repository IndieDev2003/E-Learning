import React from "react";

import student from "../assets/student.png";

function Hero() {
  return (
    <div>
      <div className="w-full h-[80vh] px-14 flex flex-col md:flex-row">
        <div className="w-1/2 flex flex-col h-full justify-center items-start">
          <h1 className="text-6xl font-semibold text-gray-800">
            Devlop Your
            <br />
            Skills in a new <br /> and Unique way.
          </h1>
          <p className="text-gray-600 w-[90%]">
            Explore a transformative approach to devlopment on our online
            learning platform. Uncover a new realm of learning experinces and
            elevate your expertise in a unique way.
          </p>
          <button className="px-6 py-2 mt-2 border text-white font-semibold bg-gradient-to-br from-blue-300 to-purple-500 rounded-lg">
            Enroll Now
          </button>
        </div>
        <div className="h-full">
          <img src={student} className="h-full" alt="" />
        </div>
      </div>
      <div className="h-[10vh] w-full bg-purple-400 flex flex-row items-center justify-center gap-12 text-white text-3xl">
        <p>duolingo</p>
        <p>magicleap</p>
        <p>Microsoft</p>
        <p>Codecov</p>
        <p>Uesr Testing</p>
      </div>
    </div>
  );
}

export default Hero;
