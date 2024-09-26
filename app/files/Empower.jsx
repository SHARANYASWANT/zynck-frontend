    import React from 'react'
    import Link from 'next/link';
    
    const Empower = () => {
      return (
        <div className='bg-gray-200 min-h-screen'>
        <h1 className='text-center p-12 text-3xl font-extrabold py-20'>EMPOWERING COMMUNITIES: OVERCOMING THE CYCLE OF POVERTY AND INEQUALITY</h1>
        <div className='px-20 text-xl'>
          <p className=''>In a world where poverty and inequality continue to hinder progress for millions, countless individuals and families are left without the resources they need to thrive. At The Social Project, we are committed to changing this narrative by empowering the most vulnerable members of our society—including children, youth, women, and marginalized communities—through education, mentorship, health camps, and social initiatives.</p>
          <br />
          <p>Our mission is to provide essential support across various areas:</p>
          <br />
          <ul className='list-disc list-inside text-left mx-auto mb-6 pl-6'>
          <li>Education: Offering quality education and life skills to children and youth, ensuring they have the tools to build a brighter future.</li>
          <br />
          <li>Women Empowerment: Empowering women through skills training and support programs, helping them achieve financial independence and improved quality of life.</li>
          <br />
          <li>Health and Awareness: Conducting health camps, awareness programs, and environmental initiatives that promote well-being and sustainable living.</li>
          </ul>
          <p>Community Support: Collaborating with local organizations and social groups to foster growth and resilience within communities. <br /> <br />
Join us in our mission to uplift and empower communities across our reach. Your support is crucial in expanding our initiatives and ensuring that every individual has access to the opportunities they deserve.
Together, we can make a lasting impact—transforming lives and creating a world where everyone has the chance to succeed. Let’s work together to build a better, brighter future for all</p>
          <br />
          <br />
          <div className='text-center mb-3'>
            <Link href="#">
              <button className="bg-cyan-500 px-6 py-2 rounded-full text-xl font-extrabold text-black hover:bg-cyan-600">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
      )
    }
    
    export default Empower