
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faApper, faCss3, faFacebook, faHtml5, faInstagram, faJava, faJs, faLaravel, faPhp, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Optional responsive carousel
import Slider from "react-slick"; 

import AOS from 'aos';
import 'aos/dist/aos.css';

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function Profile() {

  const [slidesToShow, setSlidesToShow] = useState(5); // Default value

  // Function to dynamically calculate the number of slides
  const calculateSlidesToShow = () => {
    const containerWidth = window.innerWidth; // You can also get specific container size
    const itemWidth = 150; // Set your desired item width here

    const visibleItems = Math.floor(containerWidth / itemWidth); // Calculate number of visible items
    setSlidesToShow(visibleItems);
  };

  useEffect(() => {
    // Calculate the number of slides when the component mounts
    calculateSlidesToShow();

    // Recalculate on window resize
    window.addEventListener('resize', calculateSlidesToShow);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', calculateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,  // Show 10 items starting at 1536px width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

    const techs = [
      { id: 1, name: 'Figma', iconClass: 'devicon-figma-plain' },
      { id: 2, name: 'HTML', iconClass: 'devicon-html5-plain' },
      { id: 3, name: 'CSS', iconClass: 'devicon-css3-plain' },
      { id: 4, name: 'PHP', iconClass: 'devicon-php-plain' },
      { id: 5, name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain' },
      { id: 6, name: 'Java', iconClass: 'devicon-java-plain' },
      { id: 7, name: 'MySQL', iconClass: 'devicon-mysql-plain' },
      { id: 8, name: 'C#', iconClass: 'devicon-csharp-plain' },
      { id: 9, name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain' },
      { id: 10, name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
      { id: 11, name: 'React', iconClass: 'devicon-react-original' },
      { id: 12, name: 'Next.js', iconClass: 'devicon-nextjs-plain' },
      { id: 13, name: 'Tailwind', iconClass: 'devicon-tailwindcss-plain' },
      { id: 14, name: 'Vue', iconClass: 'devicon-vuejs-plain' },
      { id: 15, name: 'Laravel', iconClass: 'devicon-laravel-plain' },
      { id: 16, name: 'Firebase', iconClass: 'devicon-firebase-plain' },
      { id: 17, name: 'Android Java', iconClass: 'devicon-android-plain' },
      { id: 18, name: 'Github', iconClass: 'devicon-github-original' },
    ]
  return (
    <>
      <span className='about w-full'/>
      <section className='w-full h-full relative' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-[#000c18]">About</div>
      <div className='grid grid-cols-1 lg:grid-cols-3  md:px-8 lg:px-16'>
      <div className='col-span-1 lg:col-span-2 h-full flex justify-center flex-col items-center p-4 rounded-xl overflow-hidden gap-4'
       data-aos="fade-right">
          <span className='w-full text-[#0ea5e9] font-semibold text-2xl sm:text-3xl lg:text-4xl text-left'>
            Hello, I am Kenneth I. Candia
          </span>
          <span className='w-full text-slate-300 text-medium text-xl sm:text-xl lg:text-2xl text-center lg:text-left md:indent-8'>
          A Graduating BSIT Student from the Holy Cross of Davao College, aspiring to be a proficient Full-Stack Developer. I have a strong foundation in front-end and back-end technologies, with hands-on experience in various programming languages and frameworks. Passionate about creating seamless web applications, I am eager to apply my skills to real-world projects, continuously learn new technologies, and contribute to innovative solutions that make a positive impact.
          </span>
      </div>
      <div className='col-span-1 flex items-center p-2' data-aos="fade-left">
      <img src='programmer.gif' alt='my-photo' className='w-full transition squible glow-effect'/>
      </div>
          {/* Slick Carousel Section */}
          <div className="col-span-1 lg:col-span-3 text-white font-bold text-3xl px-4 md:px-8 md:text-4xl py-4 bg-[#000c18]"
          data-aos="fade-up">
            <span className='w-full'>Tech Stack</span>

            {/* Slick Carousel */}
            <article className='w-full p-2'>
              <Slider {...settings}>
                {techs.map(item => (
                  <div key={item.id} className="flex flex-col items-center px-4 py-2 text-center">
                    <i className={`${item.iconClass} text-6xl`}></i>
                    <br/>
                    <span className="text-lg w-full whitespace-nowrap line-clamp-1">{item.name}</span>
                  </div>
                ))}
              </Slider>
            </article>
          </div>
      </div>
      </section>
    </>
  )
}

export default Profile;