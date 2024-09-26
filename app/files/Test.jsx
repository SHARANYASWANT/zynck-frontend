import React from 'react'

const Test = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-gray-200 py-4 px-8 rounded-md shadow-md">
        <div className="text-lg font-semibold text-blackText">
          Subscribe to our newsletter
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <form className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <input type="email" placeholder="Email" className="pl-4 py-2 w-48 bg-transparent outline-none" />
            <button type="submit" className="bg-gray-400 font-semibold px-6 py-2 rounded-full transition-all">
              GO
            </button>
          </form>
          </div>
          <button className="bg-tealButton text-white px-6 py-3 rounded-lg font-bold">
            Donate
          </button>
        </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="p-6 shadow-md">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-md">
              <div className="">
                <img src="/blacklogo.png" alt="" className="w-32"/>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-blackText">
            A Positive IMPACT can transform lives forever
          </h2>
          <img src="/Group 2.png" alt="" />
        </div>

        <div className="p-6 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Know a Child in Need?</h2>
          <a
            href="tel:+919710001010"
            className="bg-tealButton text-white py-3 px-2 rounded-lg inline-block mb-6 font-semibold"
          >
            Call - +91 971 000 1010 Today!
          </a>
          <div className="text-sm bg-[url('/pin.png')] min-h-72 bg-no-repeat">
            <p className="text-blackText">
              <strong>Phone:</strong><br /> +91 971 000 1010
            </p>
            <p className="text-blackText">
              <strong>Email:</strong><br /> contact@thesocialprojects.org
            </p>
            <p className="text-blackText">
              <strong>Website:</strong><br /> www.thesocialprojects.org
            </p>
            <p className="text-blackText">
              <strong>Address:</strong><br /> 393, Keezandurai Road, Nagavedu, Nemili tk, Ranipet Dt, PIN - 631002, Tamil Nadu, India.
            </p>
          </div>
        </div>

        <div className="p-6 shadow-md">
          <p className="text-gray-700 text-sm font-bold">JOINT SPONSORSHIP PROGRAM</p>
          <br />
        <p className="mb-6 text-sm">
            In a world where challenges can often seem insurmountable, our Joint Sponsorship Program empowers you to make a difference. By teaming up with friends, family, or colleagues, you can collectively sponsor a child, providing them with the hope and security that someone truly cares.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-gray-700">
            Want to Get involved with us?
          </h3>
          <form className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <input type="email" placeholder="Email" className="pl-4 py-2 w-48 bg-transparent text-white outline-none bg-tealButton placeholder-white" />
            <button type="submit" className="bg-white text-tealButton font-semibold px-6 py-2 rounded-full transition-all">
              GO
            </button>
          </form>
        </div>

        <div className="p-6 shadow-md">
        <h3 className="text-lg font-bold mb-4 text-blackText underline">Navigate</h3>
          <ul className="space-y-2 mb-6 text-blackText list-disc text-xs font-bold ml-6">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>PROJECTS</li>
            <li>BLOG</li>
            <li>GET INVOLVED</li>
            <li>DONATE</li>
            <li>CONTACT</li>
          </ul>
        <h3 className="text-lg font-bold mb-4 text-blackText underline">Donate Now</h3>
          <ul className="space-y-2 mb-6 text-blackText list-disc text-xs font-bold ml-6">
            <li>SPONSOR A GIRL CHILD</li>
            <li>EDUCATE A CHILD</li>
            <li>SUPPORT A FAMILY</li>
            <li>SUPPORT A PROJECT</li>
            <li>ONE TIME DONATION</li>
          </ul>
        <h3 className="text-lg font-bold mb-4 text-blackText underline">Resources</h3>
          <ul className="space-y-2 text-blackText list-disc text-xs font-bold ml-6">
            <li>NEWSLETTER</li>
            <li>ANNUAL REPORT</li>
            <li>TERMS & CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>REFUND POLICY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Test
