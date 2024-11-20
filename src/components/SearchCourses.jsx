import React from 'react'

function SearchCourses() {
  return (
      <div className='h-[25vh] flex flex-col items-center justify-center'>
          <h2 className='text-3xl text-gray-700 font-semibold'>Search Courses</h2>
          <div className='mt-2 flex flex-row gap-2 items-center justify-center'>
              <input type="text" className='w-[80%] sm:w-[350px] px-3 py-2 bg-red-50 rounded-lg' placeholder='Search for over 50+ courses..' name="" id="" />
              <button className="px-6 py-2 border text-white font-semibold bg-gradient-to-br from-blue-300 to-purple-500 rounded-lg">Search</button>
          </div>
    </div>
  )
}

export default SearchCourses