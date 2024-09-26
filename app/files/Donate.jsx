import React from 'react'
import D1 from '../card/D1'
import D2 from '../card/D2'
import D3 from '../card/D3'
import D4 from '../card/D4'
import D5 from '../card/D5'

const Donate = () => {
  return (
    <div className='bg-[url("/blurbg.png")] min-h-screen bg-no-repeat bg-cover'>
      <h1 className='text-3xl font-bold text-center mb-24 pt-20 text-white'>Donate Now</h1>
      <div className='lg:flex lg:flex-row lg:space-y-0 flex flex-col space-y-4'>
        <D1 />
        <D2 />
        <D3 />
        <D4 />
        <D5 />
      </div>
    </div>
  )
}

export default Donate