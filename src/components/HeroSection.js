
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

function HeroSection({setSection}) {
  return (
    <>
      <span className='home w-full'/>
      <section className='landing w-full h-screen relative p-4 p-2 md:p-20' data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
        <div className='w-full h-full flex justify-center flex-col items-center'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 pb-40'>
          <div className='col-span-1 p-4 flex flex-col items-center justify-center' data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
              <div className='overflow-hidden rounded-full aspect-square bg-[#0d96d5] border-4 z-10 glow-effect'>
              <img src='ako_grad2.jpg' alt='my-photo' className='h-full w-full transition object-cover'/>
              </div>
            </div>
            <div className='col-span-1 lg:col-span-2 flex flex-col justify-center p-4 max-w-[800px]'>
              <span className='w-full text-[#0d96d5] font-bold text-xl sm:text-2xl lg:text-3xl text-center md:text-left'
              data-aos="fade-right" data-aos-once="true" data-aos-delay="500" >
                Hello!
              </span>
              <span className='w-full text-white font-bold text-2xl sm:text-4xl lg:text-6xl text-center md:text-left md:indent-4'
              data-aos="fade-right" data-aos-once="true" data-aos-delay="650">
                I'm Kenneth Candia
              </span>
              <span className='w-full text-gray-500 font-semibold text-lg sm:text-2xl lg:text-3xl text-center md:text-left md:indent-8'
              data-aos="fade-right" data-aos-once="true" data-aos-delay="800">
                Full-Stack Developer
              </span>
              <span className='w-full text-white font-semibold text-lg md:text-xl text-center md:text-right pt-10'
              data-aos="fade-up" data-aos-once="true" data-aos-delay="1000">
                <button className='px-6 py-2 bg-[#0ea5e9] rounded-xl mr-2 mb-2'onClick={() => window.open('https://docs.google.com/document/d/1SXXXnNHS_BbdXi-wLbUZffXLIJjP-_GCPVI-0XZbCWI/edit?usp=sharing', '_blank')}>
                  Show CV
                </button>
                <button className='px-6 py-2 border-2 border-[#0ea5e9] rounded-xl' onClick={() => setSection('about')}>
                  See More<FontAwesomeIcon icon={faAngleRight} className='pl-2'/>
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection;