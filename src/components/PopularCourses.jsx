import React from "react";
import CourseItem from "./CourseItem";

function PopularCourses() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
      <div className="w-full sm:h-[90vh] py-10">
        <div className="w-full text-center">
          <h2 className="text-4xl text-white">Our Popular Courses</h2>
          <p className="text-white text-[16px] sm:text-md">
            Dicover our most sought-after courses, carefully curated to meet the
            <br />
            demands of most today's learners. Dive into engaging content crafted
            <br />
            for
            success in every step of your eduactional journey.
          </p>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
