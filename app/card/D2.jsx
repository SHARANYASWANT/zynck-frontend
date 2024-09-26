import React from 'react'

const D2 = () => {
  return (
    <div className="max-w-64 mx-auto bg-green-800 text-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">KnowLEDGE</h2>
      <p className="text-xl font-semibold mb-2">₹1,800<span className="text-sm font-normal">/month</span></p>
      <div className="w-full mb-1 relative">
        <img
          src="/d2.png"
          alt="Sponsor a child"
          layout="fill"
          width='500px'
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">Educate a Child</h3>
      <ul className="text-xs space-y-1 mb-11">
          <div className='flex flex-row space-x-4'>
          <li className='flex'>● Girl or Boy Child’s School Education</li>
          </div>
          <hr/>
          <div className='flex flex-row space-x-5'>
          <li>● Imparting Ethics and Values</li>
          <li>● Awareness Programs</li>
          </div>
          <hr />
          <div className='flex flex-row space-x-5'>
          <li>● Imparting Ethics and Values</li>
          <li>● Medical Camps and more...</li>
          </div>
      </ul>
      <button className="w-48 bg-white text-green-800 font-semibold py-2 rounded-full shadow hover:bg-gray-100 transition-colors ">
        Donate
      </button>
    </div>
  </div>
  )
}

export default D2