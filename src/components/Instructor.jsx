import React from "react";

import banner from "../assets/banner.png";

function Instructor() {
  return (
    <div className="w-full px-24">
      <div className="h-[80vh] flex items-center justify-between md:flex-row">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-semibold mb-3">
            If You Are A Certified Teacher <br />
            Then <span className="text-grad">Become An Instructor</span>
          </h2>
          <p className="text-gray-600">
            Unlock the opportunity to inspire and educate by joining <br /> out
            team of instructors. If you're a certified teacher, <br /> elevate
            your impact and share your expertise with <br /> learners worldwide.
          </p>
          <h3 className="text-3xl font-medium mt-2">Enjoy Many Perks</h3>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="flex flex-col ">
              <p>Global Impact</p>
              <p>Flexiable Schedule</p>
              <p>Innovative Teaching Tools</p>
              <p>Recognition And Reputation</p>
            </div>
            <div className="flex flex-col ">
              <p>Creative Freedom</p>
              <p>Monetize Your Expertise</p>
              <p>Professinal Devlopment</p>
              <p>Networking Opportunities</p>
            </div>
          </div>
          <button className="mt-3 px-8 py-2 btn-grad text-center text-white">
            Become A Instructor
          </button>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="h-[400px] w-fit flex rounded-b-full items-end justify-center overflow-hidden bg-purple-500">
            <img
              src={banner}
              className="object-cover h-[350px] w-[350px] object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
