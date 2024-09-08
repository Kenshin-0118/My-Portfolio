
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Modal from '../components/modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

function Certificates() {
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
  return (
    <>
      {/* Certificates Section */}
    <span className='certificates'/>
    <section className='w-full h-full relative mx-auto max-w-screen-xl' data-aos="fade-up" data-aos-duration="500">
    <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-brand-dark">Certificates</div>
      <article
      class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:px-8 lg:px-16"
      >
      {certificates.map(item => (
        <div key={item.id} className='col-span-1 group backdrop-blur border border-brand-cyan border-2 bg-opacity-50 rounded-xl overflow-hidden hover:bg-opacity-100 transition shadow-2xl p-4'
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
    <Modal show={showModal} onClose={closeModal}>
      <div className='flex flex-col'>
        <span className='flex items-center justify-center mb-4'>
          <img src={certData.img} alt='cert-image' className='w-full  max-h-[85vh] object-contain'/>
        </span>
        <span className='w-full text-white text-xl md:text-3xl font-bold'>{certData.title}</span>
        <span className='text-gray-400 text-sm md:text-lg font-medium'>{certData.date}</span>
      </div>
    </Modal>
    </>
  )
}

export default Certificates;