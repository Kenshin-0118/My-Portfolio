
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Optional responsive carousel
import Slider from "react-slick"; 
import 'aos/dist/aos.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';


const inter = Inter({ subsets: ['latin'] })

function Profile() {

  const [slidesToShow, setSlidesToShow] = useState(5); // Default value

  // Function to dynamically calculate the number of slides
  const calculateSlidesToShow = () => {
    const containerWidth = window.innerWidth; // You can also get specific container size
    const itemWidth = 130; // Set your desired item width here

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
      { id: 17, name: 'Android', iconClass: 'devicon-android-plain' },
      { id: 18, name: 'Github', iconClass: 'devicon-github-original' },
    ]
  return (
    <>
      <span className='about w-full'/>
      <section className='w-full h-full relative mx-auto max-w-screen-xl' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-brand-dark">About</div>
      <div className='grid grid-cols-1 lg:grid-cols-3  md:px-8 lg:px-16'>
      <div className='col-span-1 lg:col-span-2 h-full flex justify-center flex-col items-center p-4 rounded-xl overflow-hidden gap-4'
       data-aos="fade-right">
          <span className='w-full text-brand-cyan font-semibold text-2xl sm:text-3xl lg:text-4xl text-left'>
            Hello, I am Kenneth I. Candia
          </span>
          <span className='w-full text-slate-300 text-medium text-xl sm:text-xl lg:text-2xl text-center lg:text-left md:indent-8'>
          As a recent graduate with a Bachelor of Science in Information Technology from the Holy Cross of Davao College, I am eager to begin my career as a Full-Stack Developer. I have a solid understanding of both front-end and back-end technologies, with practical experience in multiple programming languages and frameworks. I am passionate about building intuitive and efficient web applications, and I am excited to apply my skills in real-world settings. Motivated to learn and grow, I look forward to contributing to innovative projects that drive positive change.
          </span>
      </div>
      <div className='hidden col-span-1 flex items-center p-2 lg:block' data-aos="fade-left">
      {/* <img src='programmer.gif' alt='my-photo' className='w-full transition squible glow-effect'/> */}
      <iframe src="https://lottie.host/embed/55aa7506-fa5a-4577-b3ba-5b279cba80b7/DRGgjQyC5p.json" className='h-full w-full'></iframe>
      </div>
      <div className="col-span-1 lg:col-span-3 text-white font-bold text-2xl px-4 md:px-8 md:text-4xl py-4 bg-brand-dark" data-aos="fade-up">
        <span className='w-full'>Education</span>
        <span className='flex mt-4 flex-col md:flex-row'>
        <iframe src="https://lottie.host/embed/a5d5a2f4-2429-43af-ae82-ceb4bd7873dd/jkivNJbRi0.json" className="hidden w-full lg:w-1/3 lg:block"/>
        <Timeline position="alternate" className='w-full lg:w-2/3'>
          <TimelineItem>
              <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
              >
              Primary Education
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                  <SportsEsportsIcon />
              </TimelineDot>
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                  Upper Tamugan Elementary School
              </Typography>
              <Typography>SY: 2008 - 2014</Typography>
              </TimelineContent>
          </TimelineItem>
          <TimelineItem>
              <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
              >
              Secondary Education
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                  <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                  Lower Tamugan National Highschool
              </Typography>
              <Typography>SY: 2014 - 2020</Typography>
              </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
              >
              Higher Education
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                  <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                  Holy Cross of Davao College
              </Typography>
              <Typography>SY: 2020 - 2024</Typography>
              </TimelineContent>
          </TimelineItem>
        </Timeline>
        </span>
        </div>
        {/* Slick Carousel Section */}
        <div className="col-span-1 lg:col-span-3 text-white font-bold text-2xl px-4 md:px-8 md:text-4xl py-4 bg-brand-dark" data-aos="fade-up">
          <span className='w-full'>Tech Stack</span>

          {/* Slick Carousel */}
          <article className='w-full p-2'>
            <Slider {...settings}>
              {techs.map(item => (
                <div key={item.id} className="flex flex-col items-center px-4 py-2 text-center
                hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-white to-brand-cyan
                transition duration-150 ease-in-out">
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