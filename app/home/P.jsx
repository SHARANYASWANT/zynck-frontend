"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import Empower from '../files/Empower';
import Donate from '../files/Donate';
import Impact from '../files/Impact';
import { useState, useEffect } from 'react';
import Test from '../files/Test'
// import Exam from '../components/Exam'

const P = () => {
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
          <section className='bg-[url("/mback2.png")] lg:bg-[url("/back2.png")] bg-no-repeat bg-cover h-screen'>
            <Navbar />
            <section className=''>
              <div className='text-white'>
                  <h3 className='lg:mt-60 mt-40 ml-6 lg:text-2xl text-lg'>SET THE CHANGE IN MOTION</h3>
                  <h1 className='lg:text-6xl text-2xl max-w-3xl ml-6 font-bold'>Secure her path to a brighter future...</h1>
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
          <section className=''>
            <Empower />
          </section>
          {isSmallScreen ? (
          <img
            src="/pwhat.png"
            alt="Small Screen Image"
            className="w-full h-auto"
          />
        ) : (
          <img
            src="/what.png"
            alt="Large Screen Image"
            className="w-full h-auto"
          />
        )}
        {isSmallScreen ? (
          <img
            src="/pmodel.png"
            alt="Small Screen Image"
            className="w-full h-auto"
          />
        ) : (
          <img
            src="/model.png"
            alt="Large Screen Image"
            className="w-full h-auto"
          />
        )}
          <section className=''>
            <Donate />
          </section>
          <img src="/joint.png" alt=""/>
          <section>
            <Impact />
          </section>
          <section>
            <Test />
          </section>
      </div>
    )
}

export default P