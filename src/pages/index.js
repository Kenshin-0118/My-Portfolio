
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function Profile() {

   useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
          })
    }, [])

  return (
    <>
    <Head>
      <title>My Profile</title>
    </Head>
      {/* Landing Page Section */}
    <div className='flex flex-col w-screen bg-[#000c18] gap-4'>
      <section className='w-full min-h-screen relative p-[5vh] md:p-[10vh]' data-aos="fade-up" data-aos-duration="500">
        <div className='w-full h-[90vh] md:h-[80vh] flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-2 p-4 rounded-xl overflow-hidden'>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3'>
            <div className='col-span-1 lg:col-span-2 flex flex-col items-center justify-center p-4'>
              <span className='w-full py-8 text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center'
              data-aos="fade-left" data-aos-delay="700">
                My Portfolio
              </span>
              <span className='w-full text-slate-400 font-semibold text-xl md:text-2xl text-center'
              data-aos="fade-down" data-aos-delay="900">
                By: Kenneth I. Candia
              </span>
            </div>
            <div className='col-span-1 p-4 flex items-center justify-center' data-aos="fade-left" data-aos-delay="500">
              <div className='overflow-hidden rounded-full glow-effect'>
              <img src='ako.png' alt='my-photo' className='transition hover:scale-110 aspect-square'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section className='w-full h-full relative p-4 md:p-8' data-aos="fade-up" data-aos-duration="500">
      <div class="sticky top-0 text-white font-bold text-5xl py-4">About me</div>
        <div className='w-full h-full flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-2 p-4 rounded-xl overflow-hidden'>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3'>
            <div className='col-span-1 lg:col-span-2 flex flex-col items-center justify-center p-4'>
              <span className='w-full py-8 text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center'
              data-aos="fade-left" data-aos-delay="700">
                My Portfolio
              </span>
              <span className='w-full text-slate-400 font-semibold text-xl md:text-2xl text-center'
              data-aos="fade-down" data-aos-delay="900">
                By: Kenneth I. Candia
              </span>
            </div>
            <div className='col-span-1 p-4' data-aos="fade-left" data-aos-delay="500">
              <div className='overflow-hidden rounded-full glow-effect'>
              <img src='ako.png' alt='my-photo' className='transition hover:scale-110 aspect-square'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
    
  )
}

export default Profile;