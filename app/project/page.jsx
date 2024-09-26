"use-client"
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import Donate from '../files/Donate';
import Test from '../files/Test';
import Glimpse from '../files/Glimpse';
import Young from '../files/Young';
import Opurtunity from '../files/Opurtunity';

const page = () => {
  return (
    <div className=''>
        <section className='bg-[url("/mback.png")] lg:bg-[url("/back.png")] bg-no-repeat bg-cover h-screen'>
            <Navbar />
            <section className=''>
                <div className='text-white h-screen'>
                    <div className='flex justify-between items-center lg:flex-row flex-col'>
                    <h1 className='lg:text-6xl text-2xl max-w-3xl ml-10 font-bold w-96 mt-36'>
                        Making a difference a day at a time
                    </h1>
                    <h1 className='lg:text-7xl text-3xl font-extrabold lg:mr-40 w-72 mr-20'>
                        WHAT WE DO
                    </h1>
                    </div>
                    <br />
                    <Link href="#">
                    <button className="bg-cyan-500 px-6 py-2 rounded-md text-xl ml-10 font-extrabold text-black hover:bg-cyan-600">
                        Donate
                    </button>
                    </Link>
                </div>
            </section>
        </section>
        <section>
            <Glimpse />
        </section>
        <img src="/img4.png" alt="" />
        <section>
            <Young />
        </section>
        <img src="/img5.png" alt="" />
        <Opurtunity />
        <img src="/joint.png" alt=""/>
        <section>
            <Donate />
        </section>
        <section>
            <Test />
        </section>
    </div>
  )
}

export default page