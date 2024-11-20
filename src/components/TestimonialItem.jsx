import React from "react";

function TestimonialItem() {
  return (
      <div className="h-[200px] w-[300px] flex flex-col px-3 gap-2 py-3 bg-white rounded-lg">
          {/* Profile Photo */}
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="h-20 w-20 border-4 border-purple-500 rounded-full overflow-hidden">
          <img
            src="https://i.pinimg.com/enabled_lo_mid/736x/43/33/ac/4333ac40d4c54893e5c152932aa6a3b8.jpg"
            className="object-cover object-center h-full w-full"
            alt=""
          />
        </div>
        <p className="text-grad font-bold">Emily Willis</p>
          </div>
          <p className="text-[13px] font-medium text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quibusdam corporis, eaque facilis, iste ipsum commodi eveniet optio ad qui excepturi quam aspernatur quod mollitia modi!</p>
    </div>
  );
}

export default TestimonialItem;
