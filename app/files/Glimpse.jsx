import React from 'react'

const Glimpse = () => {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-r from-amber-800 via-amber-700 to-green-800 p-4">
        <div className="container mx-auto">
          <div className='backdrop-blur-lg bg-white/30 h-32 align-middle justify-center rounded-lg mb-20'>
            <h1 className="lg:text-4xl text-lg font-bold text-white mb-8 p-4 w-2/5 align-middle">
              Let&apos;s take a glimpse into our Projects.
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-white p-4 rounded-lg shadow-lg border-2 border-white">
              <img 
                src="/i3.png" 
                alt="Project 1" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <h3 className="mt-4 text-lg font-bold">FERMONT NURSERY AND PRIMARY SCHOOL</h3>
              <p className="text-sm">For Children</p>
              <p className="mt-2 text-sm">The Education Project</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                Know More
              </button>
            </div>
            <div className="text-white p-4 rounded-lg shadow-lg border-2 border-white">
              <img 
                src="/i2.png" 
                alt="Project 2" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <h3 className="mt-4 text-lg font-bold">CARE</h3>
              <p className="text-sm">For Youth, Adults, and Families</p>
              <p className="mt-2 text-sm">The Mentoring Project</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                Know More
              </button>
            </div>
            <div className="p-4 rounded-lg shadow-lg text-white border-2 border-white">
              <img 
                src="/i1.png" 
                alt="Project 3" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <h3 className="mt-4 text-lg font-bold">WELLNESS</h3>
              <p className="text-sm">For All Age Groups</p>
              <p className="mt-2 text-sm">The Wellness Project</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                Know More
              </button>
            </div>
            <div className="p-4 rounded-lg shadow-lg text-white border-2 border-white">
              <img 
                src="/i.png" 
                alt="Project 4" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <h3 className="mt-4 text-lg font-bold">EMPOWERMENT & SUSTAINABILITY</h3>
              <p className="text-sm">People & Social Organizations</p>
              <p className="mt-2 text-sm">The Sustainability Project</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                Know More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Glimpse
