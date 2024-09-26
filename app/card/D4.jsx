import React from 'react'

const D4 = () => {
  return (
    <div className="max-w-64 mx-auto bg-fuchsia-700 text-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">ProVISION</h2>
      <p className="text-xl font-semibold mb-2">₹2,000<span className="text-sm font-normal">/month</span></p>
      <div className="w-full mb-1 relative">
        <img
          src="/d4.png"
          alt="Sponsor a child"
          layout="fill"
          width='500px'
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">Support a Projecty</h3>
      <ul className="text-xs space-y-1 mb-11">
          <div className='flex flex-row space-x-10'>
          <li className='flex'>● Education</li>
          <li className='flex'>● Self-Sustainability Initiative</li>
          </div>
          <hr/>
          <div className='flex flex-row space-x-8'>
          <li>● Mentorship</li>
          <li>● Women Empowerment</li>
          </div>
          <hr />
          <div className='flex flex-row space-x-10'>
          <li>● Health & Wellness</li>
          <li>● Community Development and more...</li>
          </div>
      </ul>
      <button className="w-48 bg-white text-fuchsia-700 font-semibold py-2 rounded-full shadow hover:bg-gray-100 transition-colors ">
        Donate
      </button>
    </div>
  </div>
  )
}

export default D4