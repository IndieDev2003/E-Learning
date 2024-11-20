import React from "react";

function Newsletter() {
  return (
    <div className="sm:h-[60vh] w-full overflow-hidden p-1 sm:bg-gray-300">
      <div className="h-full w-full rounded-tl-[140px] rounded-br-[140px] sm:bg-white flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center text-white bg-grad py-4 px-20 text-center rounded-xl">
          <h2 className="text-3xl font-">Get In Touch!</h2>
          <p>
            Subscribe Us to get in touch and enjoy discounts,
            <br />
            promos and much more!
          </p>
          <div className="flex gap-2 mt-2 mb-4">
            <input type="text" className="bg-white px-4 py-2 rounded-md" placeholder="Enter your email..." />
            <button className="text-purple-500 font-semibold bg-white px-4 py-2 rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
