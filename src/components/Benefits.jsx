import React from "react";
import group from "../assets/group.png";

import gradutaion from "../assets/graduation.svg";
import book from "../assets/book.svg";
import contact from "../assets/contact.svg";

function Benefits() {
  return (
    <div className="w-screen my-5">
      <div className="px-14 w-full h-[80vh] py-2 flex flex-col md:flex-row">
        <div className="w-1/2 flex items-center justify-center">
          <img src={group} className="h-[420px]" alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-medium text-gray-700">
            <span className="text-grad">Benefits</span> From our online
            <br /> Learning
          </h2>
          <div className="grid gird-row-4 mt-2">
            {/* Online Degrees */}
            <div className="grid grid-cols-[1fr_7fr] items-center mt-2">
              <img src={gradutaion} className="h-14" alt="" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-2">Online Degrees</h3>
                <p className="leading-5">
                  Earn accredited degrees from the comfort of your home,
                  <br />
                  oppening doors to a world of possebilites.
                </p>
              </div>
            </div>
            {/* Short Courses */}
            <div className="grid grid-cols-[1fr_7fr] items-center mt-2">
              <img src={book} className="h-14" alt="" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-2">Short Courses</h3>
                <p className="leading-5">
                  Enhance your skills with our concise and focused short
                  <br />
                  Courses, designed for quick and effective Learning.
                </p>
              </div>
            </div>
            {/* Training from experts */}
            <div className="grid grid-cols-[1fr_7fr] items-center mt-2">
              <img src={contact} className="h-14" alt="" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-2">Training from Experts</h3>
                <p className="leading-5">
                  Immerse yourself in knowledge with industry experts
                  <br />
                  guiding you through hands-on experience.
                </p>
              </div>
            </div>
            {/* Video Courses */}
            <div className="grid grid-cols-[1fr_7fr] items-center mt-2">
              <img src={contact} className="h-14" alt="" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-2">1.5k+ Video Courses</h3>
                <p className="leading-5">
                  Dive into a vast library of over 1.5k video course covering
                  <br />
                  many subjects, offering a visual learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
