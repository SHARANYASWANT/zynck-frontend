import React from 'react'

const D3 = () => {
  return (
    <div className="max-w-64 mx-auto bg-pink-700 text-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">HouseHOLD</h2>
      <p className="text-xl font-semibold mb-2">₹2,200<span className="text-sm font-normal">/month</span></p>
      <div className="w-full mb-1 relative">
        <img
          src="/d3.png"
          alt="Sponsor a child"
          layout="fill"
          width='500px'
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">Support a Family</h3>
      <ul className="text-xs space-y-1 mb-11">
          <div className='flex flex-row space-x-4'>
          <li className='flex'>● Basic Necessities</li>
          <li className='flex'>● Child Education</li>
          </div>
          <hr/>
          <div className='flex flex-row space-x-5'>
          <li>● Health and Wellbeing</li>
          <li>● Emergency Support</li>
          </div>
          <hr />
          <div className='flex flex-row space-x-10'>
          <li>● Skill Development</li>
          <li>● Medical Camps and more...</li>
          </div>
      </ul>
      <button className="w-48 bg-white text-pink-700 font-semibold py-2 rounded-full shadow hover:bg-gray-100 transition-colors ">
        Donate
      </button>
    </div>
  </div>
  )
}

export default D3