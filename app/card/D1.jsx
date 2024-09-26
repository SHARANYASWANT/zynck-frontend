import React from 'react'

const D1 = () => {
  return (
    <div className="max-w-64 mx-auto bg-blue-600 text-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">EmpowerHER</h2>
        <p className="text-xl font-semibold mb-2">₹2,000<span className="text-sm font-normal">/month</span></p>
        <div className="w-full mb-1 relative">
          <img
            src="/d1.png"
            alt="Sponsor a child"
            layout="fill"
            width='500px'
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Sponsor a Girl Child</h3>
        <ul className="text-xs space-y-1 mb-4">
            <div className='flex flex-row space-x-4'>
            <li className='flex'>● Educational Support</li>
            <li className='flex'>● Health and Nutrition</li>
            </div>
            <hr/>
            <div className='flex flex-row space-x-12'>
            <li>● Medical Care</li>
            <li>● Personal Mentorship</li>
            </div>
            <hr />
            <div className='flex flex-row space-x-12'>
            <li>● Hygiene and Sanitation</li>
            <li>● Imparting Ethics and Values and more..</li>
            </div>
        </ul>
        <button className="w-48 bg-white text-blue-600 font-semibold py-2 rounded-full shadow hover:bg-gray-100 transition-colors">
          Donate
        </button>
      </div>
    </div>
  )
}

export default D1