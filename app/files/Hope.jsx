import React from 'react'
import Link from 'next/link';

const Hope = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <h1 className='text-center p-12 text-3xl font-extrabold py-20 uppercase'>every child deserves a future full of hope and opportunity</h1>
        <div className='px-20 text-lg'>
          <p className=''><span className='text-cyan-400'>&quot;The Social Project&quot;</span> was initiated with a vision to serve society by creating an environment that makes the world a better place to live in.
          <br />
          <br />
          It is our responsibility to contribute to the growth and betterment of society. When the question arises, <span className='text-cyan-400'>what are we really doing?</span> The general answer is often <span className='text-cyan-400'>nothing!</span> We are all so caught up with our own lives, busy providing for our own needs, that we generally overlook society and the needy. But as we look around, we see that resources are everywhere, waiting to be harnessed for the greater good.
          <br />
          <br />
          Our mission at The Social Project is to tap into these abundant resources, creating pathways for individuals and communities to thrive. We strive to remind each person that by uniting our efforts and extending our hands to those in need, we can overcome the apathy that sometimes clouds our compassion.
          <br />
          <br />
          Through the power of collective action and shared responsibility, we believe that positive change is not just a possibility—it is a promise. Together, we can rise above our individual challenges and focus on uplifting those who need it most, fostering a world where no one is left behind.
          <br />
          <br />
          Let us all come together, inspired by love and a sense of duty, to create communities where everyone can live with dignity, hope, and equality. Join us in this vital mission to illuminate the lives of others and make the world a more compassionate and equitable place for all.
          </p>

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

export default Hope