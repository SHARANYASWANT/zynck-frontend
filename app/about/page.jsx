"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import Hope from '../files/Hope';
import { useState, useEffect } from 'react';
import Donate from '../files/Donate';
import Promise from '../files/Promise'
import Test from '../files/Test';


const page = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <div className=''>
        <section className='bg-[url("/mback.png")] lg:bg-[url("/back.png")] bg-no-repeat bg-cover h-screen'>
            <Navbar />
            <section className=''>
            <div className='text-white'>
                <h3 className='lg:mt-60 mt-40 ml-6 lg:text-2xl text-lg'>SET THE CHANGE IN MOTION</h3>
                <h1 className='text-right float-right mr-56 lg:text-6xl text-3xl font-extrabold'>About Us</h1>
                <h1 className='lg:text-6xl text-2xl max-w-3xl ml-6 font-bold'>Let us make this world a better place</h1>
                <br />
                <input type="text" className='h-11 rounded-md ml-6 w-1/4'/>
                <Link href="#">
                <button className="bg-cyan-500 px-6 py-2 rounded-md text-xl font-extrabold text-black hover:bg-cyan-600">
                  Donate
                </button>
              </Link>
            </div>
          </section>
        </section>
        <section>
            <Hope />
        </section>
        {isSmallScreen ? (
        <img
          src="/mtimeline.png"
          alt="Small Screen Image"
          className="w-full h-auto"
        />
      ) : (
        <img
          src="/timeline.png"
          alt="Large Screen Image"
          className="w-full h-auto"
        />
      )}
      <img src="/sus.png" alt="sustainability" />
      {isSmallScreen ? (
        <div></div>
      ):(<Promise />)}
      <section>
        <Donate />
      </section>
      <img src="/joint.png" alt=""/>
      <section>
        <Test />
      </section>
    </div>
  )
}

export default page