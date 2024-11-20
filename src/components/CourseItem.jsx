import React from "react";

function CourseItem() {
  return (
    <div className="h-[350px] w-[250px] flex-col flex justify-between rounded-xl px-2 py-2 bg-white">
      <div className="h-1/2 w-full bg-red-300 rounded-lg overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/71/41/57/7141570faf4ce4ee5fcf2277ab024dd3.jpg"
          className="h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between text-center mt-1">
        <p className="px-4 bg-purple-300  rounded-[4px] text-gray-700">Web Design</p>
        <p className="px-1 text-white rounded-[4px] bg-purple-500">4.9</p>
      </div>
      <h2 className="font-semibold px-2 text-2xl">
        Web Design & <br />
        Devlopment
      </h2>
      <div className="flex gap-3 px-1">
        <p>25 Classes</p>
        <p>185 Students</p>
      </div>
      <hr />
      <div className="flex justify-between px-1">
        <p>$560.00</p>
        <p className="text-sm text-purple-700 font-semibold">J.Morgan</p>
      </div>
    </div>
  );
}

export default CourseItem;
