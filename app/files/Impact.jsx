import React from 'react'


const Impact = () => {
    const narratives = [
        {
          image: '/d2.png', 
          quote: `"This shop had everything I was looking for plus so much more. From the minute I walked in, everyone made me feel so incredibly welcome. I will definitely be back."`,
          author: 'Nadia L.'
        }
      ];
  return (
    <div className='bg-gray-700 min-h-screen'>
  <h1 className='text-lg lg:text-5xl font-bold text-center pt-20 text-white underline'>
    Impact Narratives
  </h1>

  <div className="relative py-12 flex justify-center items-center">
    <div className="relative max-w-6xl w-full h-auto flex justify-center items-center align-middle">
      <div className="absolute left-0 top-0 z-10 lg:w-60 lg:h-72 w-36 h-48 lg:mt-12 mt-16 lg:ml-44 ml-10">
        <img
          src={narratives[0].image}
          alt="Impact Story"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative bg-blue-500 text-white p-4 lg:p-8 z-20 lg:w-64 w-32 mt-20 lg:mr-36">
        <p className="text-xs lg:text-sm font-semibold">
          {narratives[0].quote}
        </p>
        <p className="text-right font-bold mt-4 text-xs lg:text-xs">
          - {narratives[0].author}
        </p>
      </div>
      <div className="absolute right-0 top-0 bg-white text-black p-4 lg:p-8 z-0 lg:w-4/6 lg:h-96 w-2/3 h-48 flex flex-col align-middle text-right lg:mr-44 mr-10">
        <h2 className="text-sm lg:text-3xl font-bold text-right uppercase mb-4 w-52 ml-auto">
          Join hands with us to make many more dreams come true.
        </h2>
      </div>

    </div>
  </div>
</div>

  )
}

export default Impact