import React from 'react'

const Opurtunity = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2">Want to Volunteer with?</h2>
          <h1 className="lg:text-6xl text-4xl font-extrabold text-orange-500 mb-4">
            FERMONT <br /> NURSERY AND <br /> PRIMARY SCHOOL
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="lg:text-4xl font-medium text-orange-500 mb-4">Opportunities</h3>
          <div className="grid grid-cols-2 gap-4 text-xl">
            <OpportunityButton title="Art & Craft" />
            <OpportunityButton title="English" />
            <OpportunityButton title="Dance" />
            <OpportunityButton title="Martial Arts" />
            <OpportunityButton title="A New Language" />
            <OpportunityButton title="Paint the Campus" />
            <OpportunityButton title="Start a Fundraiser" />
            <OpportunityButton title="Donate Books" />
            <OpportunityButton title="Educate a Child" />
            <OpportunityButton title="and many more" />
          </div>
          <div className="mt-6">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full">
              Connect Today to explore various opportunities!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  function OpportunityButton({ title }) {
    return (
      <button className="bg-orange-500 hover:bg-orange-400 text-white py-4 px-8 rounded-md">
        {title}
      </button>
    );
}
}

export default Opurtunity