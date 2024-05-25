
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Navbar from '../components/navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function Profile() {
  const [section, setSection] = useState('placeholder');

   useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
          })
    }, [])

    const certificates = [
      {type:'school', img:'school-1.jpg', title:'Test text', description:'test description'},
      {type:'school', img:'school-2.jpg', title:'Test text', description:'test description'},
      {type:'udemy', img:'udemy-1.jpg', title:'Test text', description:'test description'},
      {type:'udemy', img:'udemy-2.jpg', title:'Test text', description:'test description'},
    ]

    useEffect(() => {
      const target = document.querySelector(`.${section}`);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const offset = targetPosition + startPosition - 20;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, [section]);
    

  return (
    <div className='relative'>
    <Head>
      <title>My Portfolio</title>
    </Head>
    <span className='home'/>
    <nav className="w-full sticky top-0 bg-[#0A1622] bg-opacity-50 z-50">
      <Navbar setSection={setSection}/>
    </nav>


    <div className='flex flex-col w-screen gap-4 relative'>
      {/* Landing Page Section */}
      <section className='w-full min-h-screen relative p-[5vh] md:p-[10vh]' data-aos="fade-up" data-aos-duration="500">
        <div className='w-full h-[90vh] md:h-[80vh] glow-effect flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-2 p-4 rounded-xl overflow-hidden'>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3'>
            <div className='col-span-1 lg:col-span-2 flex flex-col items-center justify-center p-4'>
              <span className='w-full py-8 text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center'
              data-aos="fade-left" data-aos-delay="700">
                My Portfolio
              </span>
              <span className='w-full text-slate-400 font-semibold text-xl md:text-2xl text-center pt-8'
              data-aos="fade-down" data-aos-delay="900">
                <button>Learn More<FontAwesomeIcon icon={faAngleRight} className='pl-2'/></button>
              </span>
            </div>
            <div className='col-span-1 p-4 flex flex-col items-center justify-center' data-aos="fade-left" data-aos-delay="500">
              <div className='overflow-hidden rounded-full aspect-square bg-[#0d96d5] border-4 z-10'>
              <img src='ako.png' alt='my-photo' className='h-full w-full transition object-cover'/>
              </div>
              <span className='w-full text-white font-bold text-2xl md:text-4xl text-center pt-4'>
                Kenneth Candia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <span className='about'/>
      <section className='w-full h-full relative p-4 md:p-8' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-4xl py-4 bg-[#000c18]">About</div>
        <div className='w-full h-full flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-2 p-4 rounded-xl overflow-hidden'>
        <div className='w-full h-full grid grid-cols-1'>
            <div className='col-span-1 lg:col-span-2 flex flex-col items-center justify-center p-4'>
              <span className='w-full py-8 text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center'
              data-aos="zoom-in">
                About Me Section
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <span className='certificates'/>
      <section className='w-full h-full relative p-4 md:p-8' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-4xl py-4 bg-[#000c18]">Certificates</div>
        <div className='w-full h-full flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-2 p-4 rounded-xl overflow-hidden'>
        <article
        class="relative flex flex-row w-full snap-x gap-6
        overflow-y-hidden overflow-x-scroll pt-2"
        >
          <div
          v-for="(item, index) in filteredWeekly" key="item.id"
          class="relative h-[282px] w-[500px] shrink-0 snap-center
          overflow-hidden rounded bg-[#212121] backdrop-blur border-double
          border-[#4cbe5c] border-2  group"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="`${index}00`"/>
        </article>
        </div>
      </section>

      {/* Education Section */}
      <span className='education'/>
      <section className='education w-full h-full relative p-4 md:p-8' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-4xl py-4 bg-[#000c18]">Education</div>
        <div className='w-full h-full flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-2 p-4 rounded-xl overflow-hidden'>
          <div className='w-full h-full grid grid-cols-1'>
            <div className='col-span-1 lg:col-span-2 flex flex-col items-center justify-center p-4'>
              <span className='w-full py-8 text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center'
              data-aos="zoom-in">
                Education Section
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <span className='journal'/>
      <section className='w-full h-full relative p-4 md:p-8' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-4xl py-4 bg-[#000c18]">Journal</div>
        <div className='w-full h-full flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-2 p-4 rounded-xl overflow-hidden'>
        <article
        class="relative flex flex-row w-full snap-x gap-6
        overflow-y-hidden overflow-x-scroll pt-2"
        >
          <div
          v-for="(item, index) in filteredWeekly" key="item.id"
          class="relative h-[282px] w-[500px] shrink-0 snap-center
          overflow-hidden rounded bg-[#212121] backdrop-blur border-double
          border-[#4cbe5c] border-2  group"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="`${index}00`"/>
        </article>
        </div>
      </section>

      <footer className='w-full bg-[#0A1622] p-4 flex flex-col items-center justify-center'>
        <section className='w-full flex flex-row p-2 text-4xl gap-4 justify-center'>
        <FontAwesomeIcon icon={faFacebook} className='text-gray-400 hover:text-white transition'/>
        <FontAwesomeIcon icon={faInstagram} className='text-gray-400 hover:text-white transition'/>
        </section>
        <span className='w-full text-gray-400 p-2 text-center'>
        © Kenneth Candia. All Rights Reserved.
        </span>
      </footer>

    </div>
    </div>
    
  )
}

export default Profile;