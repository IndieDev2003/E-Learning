import React from "react";
import TestimonialItem from "./TestimonialItem";

function Testimonials() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center bg-grad text-white">
      <h2 className="text-4xl mb-2  ">Student's Testimonials</h2>
      <p className="text-center">
        Here's what our students to say about their transformative learning{" "}
        <br /> experience. Real stories, real growth. Discover firsthand the
        impact our <br />
        courses have had on their lives.
          </p>
          
          <div className="flex gap-4 mt-4">
              <TestimonialItem/>
              <TestimonialItem/>
              <TestimonialItem/>
          </div>
    </div>
  );
}

export default Testimonials;
