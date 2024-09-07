
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faApper, faCss3, faFacebook, faHtml5, faInstagram, faJava, faJs, faLaravel, faPhp, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons"


import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Modal from '../components/modal';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

function Profile() {
  const [section, setSection] = useState('placeholder');
  const [showModal, setShowModal] = useState(false);
  const [certData, setCertData] = useState([]);

  const openModal = (data) => {
    setCertData(data)
    setShowModal(true)
  };
  const closeModal = () => {
    setShowModal(false)
    setCertData([])
  };

   useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
          })
    }, [])

    const certificates = [
      { id: 1, type: 'school', img: 'school-1.jpg', date: 'June 21st, 2023', title: 'Capstone Project Writing 1'},
      { id: 2, type: 'school', img: 'school-2.jpg', date: 'August 5th, 2023', title: "Machine Learning Overview and it's Application"},
      { id: 3, type: 'smart', img: 'smart-3.jpg', date: 'August 18th, 2023', title: 'Network On Cloud'},
      { id: 4, type: 'smart', img: 'smart-2.jpg', date: 'August 23rd, 2023', title: 'Data Visualization'},
      { id: 5, type: 'smart', img: 'smart-1.jpg', date: 'August 24th-25th, 2023', title: 'The Agile Mindset'},
      { id: 6, type: 'udemy', img: 'udemy-2.jpg', date: 'February 24th, 2024', title: 'JavaScript & jQuery - Certification Course for Beginners'},
      { id: 7, type: 'udemy', img: 'udemy-1.jpg', date: 'February 24th, 2024', title: 'HTML, CSS, & JavaScript - Certification Course for Beginners'},
      { id: 8, type: 'school', img: 'psycho-result.jpg', date: 'March 4th, 2024', title: 'Psychological Test Results'},
      { id: 9, type: 'school', img: 'psycho-test.jpg', date: 'March 16th, 2024', title: 'Psychological Test Interpretation'},
    ]
    const infosoft = [
      { img: 'infosoft/7.jpg' },
      { img: 'infosoft/8.jpg' },
      { img: 'infosoft/9.png' },
      { img: 'infosoft/10.jpg' },
      { img: 'infosoft/11.jpg' },
      { img: 'infosoft/1.jpg' },
      { img: 'infosoft/2.jpg' },
      { img: 'infosoft/3.jpg' },
      { img: 'infosoft/4.jpg' },
      { img: 'infosoft/5.jpg' },
    ]
    
    

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
    <div>
    <div className="w-full sticky top-0 bg-[#0A1622] bg-opacity-50 z-40 shadow-2xl">
      <Navbar setSection={setSection}/>
    </div>
    <div className='flex flex-col w-full gap-4 relative'>
      <HeroSection setSection={setSection}/>
      <About/>

      {/* Certificates Section */}
      <span className='certificates'/>
      <section className='w-full h-full relative' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-[#000c18]">Certificates</div>
        <article
        class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:px-8 lg:px-16"
        >
        {certificates.map(item => (
          <div key={item.id} className='col-span-1 group backdrop-blur border border-[#0ea5e9] border-2 bg-opacity-50 rounded-xl overflow-hidden hover:bg-opacity-100 transition shadow-2xl p-4'
          onClick={()=>openModal(item)} data-aos="fade-up">
            <div className='w-full overflow-hidden rounded-lg'>
             <img src={item.img} alt='cert-image' className='transition group-hover:scale-110 object-cover aspect-video'/>
            </div>
            <div className='w-full flex flex-row px-4 pt-2'>
              <div className='flex w-5/6 flex-col'>
                <span className='w-full text-white text-xl font-bold whitespace-nowrap truncate'>{item.title}</span>
                <span className='text-gray-400 text-sm font-medium'>{item.date}</span>
              </div>
              <div className='text-white flex w-1/6 items-center justify-center text-4xl'>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        ))}
        </article>
      </section>

      {/* Education Section */}
      {/* <span className='education'/>
      <section className='education w-full h-full relative' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-[#000c18]">Education</div>
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
      </section> */}

      {/* Journal Section */}
      <span className='journal'/>
      <section className='w-full h-full relative' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-[#000c18]">Journal</div>
        <div className='w-full h-full flex justify-center flex-col items-center backdrop-blur bg-opacity-75 p-4 rounded-xl overflow-hidden'>
        <article
        class="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className='col-span-1' data-aos="fade-right">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={3000}>
          {getImages(infosoft).map((img, index) => (
          <div className="cursor-pointer" key={index}>
            <img className='w-full aspect-video object-contain rounded-xl' src={img} alt={`Item Image ${index + 1}`} />
          </div>
          ))}
        </Carousel>
        </div>
        <div className='col-span-1 flex items-center' data-aos="fade-left">
        <span className='w-full text-slate-300 font-medium text-center text-lg sm:text-xl lg:text-xl text-center lg:text-left md:indent-8'>
        Even though my teammates and I were separated to handle individual projects, it became our motivation to explore and discover new areas to improve our skills. The experience at Infosoft MCBS has been instrumental in enhancing our programming expertise. Creating webpages using various APIs and frameworks has equipped us with the skills needed to compete in today's rapidly evolving technological landscape. Furthermore, working on real-world projects and collaborating with a diverse team has offered invaluable insights, enriching our learning journey. We eagerly anticipate applying our enhanced skills and knowledge to future projects, thereby contributing to our ongoing growth and success.
          </span>
        </div>
        </article>
        </div>
      </section>

      <footer className='w-full bg-[#0A1622] p-4 flex flex-col items-center justify-center'>
        <section className='w-full flex flex-row p-2 text-4xl gap-4 justify-center'>
        <FontAwesomeIcon icon={faFacebook} className='text-gray-400 hover:text-white transition' title='Facebook Profile' onClick={() => window.open('https://www.facebook.com/kenneth.candia.16', '_blank')}/>
        <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 hover:text-white transition'  onClick={() => window.open('mailto:someone@example.com', '_blank')}/>
        </section>
        <span className='w-full text-gray-400 p-2 text-center'>
        © Kenneth Candia 2024. All Rights Reserved.
        </span>
      </footer>

    </div>
    <Modal show={showModal} onClose={closeModal}>
      <div className='flex flex-col'>
        <span className='flex items-center justify-center mb-4'>
          <img src={certData.img} alt='cert-image' className='w-full  max-h-[85vh] object-contain'/>
        </span>
        <span className='w-full text-white text-xl md:text-3xl font-bold'>{certData.title}</span>
        <span className='text-gray-400 text-sm md:text-lg font-medium'>{certData.date}</span>
      </div>
    </Modal>
    </div>
  )
}

export default Profile;