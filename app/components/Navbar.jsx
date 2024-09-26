"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="text-white bg-transparent max-w-full p-10">
    <div className="mx-auto flex justify-between items-center">
      <div className="hidden md:block">
        <h1 className="text-white text-3xl font-bold">The Social Project</h1>
      </div>

      <div className="hidden md:flex space-x-14">
        <Link href="/home" className="text-white text-xl hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-white text-xl hover:underline">
          About
        </Link>
        <Link href="/project" className="text-white text-xl hover:underline">
          Projects
        </Link>
        <Link href="#" className="text-white text-xl hover:underline">
          Blog
        </Link>
        <Link href="#" className="text-white text-xl hover:underline">
          Get Involved
        </Link>
        <Link href="#" className="text-white text-xl hover:underline">
          Contact
        </Link>
        <Link href="#" className="text-white text-xl hover:underline">
          Shop
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="#">
          <button className="bg-cyan-500 px-6 py-2 rounded-full text-xl font-extrabold text-black hover:bg-cyan-600">
            Donate
          </button>
        </Link>
        <div className="p-2 rounded-md">
          <img src="/logo.png" alt="Logo" className="h-20 w-20" />
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center w-full">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div className="p-2 rounded-md">
          <img src="/logo.png" alt="Logo" className="h-20 w-20" />
        </div>
      </div>
    </div>

    {isOpen && (
      <div className="md:hidden px-4 py-6 space-y-4">
        <Link href="/home" className="block text-white text-xl hover:underline">
          Home
        </Link>
        <Link href="/about" className="block text-white text-xl hover:underline">
          About
        </Link>
        <Link href="/project" className="block text-white text-xl hover:underline">
          Projects
        </Link>
        <Link href="#" className="block text-white text-xl hover:underline">
          Blog
        </Link>
        <Link href="#" className="block text-white text-xl hover:underline">
          Get Involved
        </Link>
        <Link href="#" className="block text-white text-xl hover:underline">
          Contact
        </Link>
        <Link href="#" className="block text-white text-xl hover:underline">
          Shop
        </Link>
        <Link href="#">
          <button className="w-full bg-cyan-500 text-white px-6 py-2 rounded-full text-xl font-semibold hover:bg-cyan-600">
            Donate
          </button>
        </Link>
      </div>
    )}
    <br />
    <hr />
  </nav>
  );
};

export default Navbar;
