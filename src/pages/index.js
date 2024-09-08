
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";


import Navbar from '../components/navbar';
import HeroSection from '../sections/HeroSection';
import About from '../sections/About';
import Certificates from '@/sections/Certificates';
import Journal from '@/sections/Journal';
import Education from '../sections/Education'
import Modal from '../components/modal';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

function Profile() {
  const [section, setSection] = useState('placeholder');
   useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
          })
    }, [])    

    useEffect(() => {
      const target = document.querySelector(`.${section}`);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const offset = targetPosition + startPosition - 50;
        window.scrollTo({ top: offset, behavior: 'smooth' });
        setSection('Dummy')
      }
    }, [section]);

    const getImages = (items) => {
      if (!items) {
        return [];
      }
      return items.map(item => item.img);
    };
    

  return (
    <div className='w-full h-full flex flex-col relative'>
    <div className="w-full sticky top-0 bg-[#0A1622] bg-opacity-50 z-40 shadow-2xl">
      <Navbar setSection={setSection}/>
    </div>
      <div className='w-full'/>
      <HeroSection setSection={setSection}/>
      <About/>
    </div>
  )
}

export default Profile;