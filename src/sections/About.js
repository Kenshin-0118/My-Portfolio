
import { Inter } from '@next/font/google'
import React, { useEffect, useState } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Optional responsive carousel
import Slider from "react-slick"; 
import 'aos/dist/aos.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

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

function About() {

  const [slidesToShow, setSlidesToShow] = useState(5); // Default value

  const [expanded, setExpanded] = useState('generalInfo');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : expanded);
  };
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: 'transparent', // Set the background to transparent
    ...theme.applyStyles('dark', {
      backgroundColor: 'transparent', // Transparent in dark mode too
    }),
  }));
  

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
          {/* <span className='w-full text-brand-cyan font-semibold text-2xl sm:text-3xl lg:text-4xl text-left'>
            Hello, I am Kenneth I. Candia
          </span>
          <span className='w-full text-slate-300 text-medium text-lg sm:text-lg lg:text-xl text-justify indent-8'>
          I am a recent IT graduate from Holy Cross of Davao College with a strong foundation in full-stack development, eager to apply my skills in building efficient web applications and contribute to innovative projects.
          </span> */}
          <span className='w-full'>
            <Accordion expanded={expanded === 'generalInfo'} onChange={handleChange('generalInfo')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="generalInfobh-content"
                id="generalInfobh-header"
              >
                <Typography className='text-brand-cyan text-xl md:text-2xl font-semibold' style={{ width: '90%', flexShrink: 0}}>
                General Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider style={{ marginBottom: '10px' }} />
                <Typography className='text-justify indent-8 text-lg md:text-xl'>
                Hello! I'm Kenneth I. Candia, a recent graduate from Holy Cross of Davao College with a passion for full-stack development. I love building efficient, intuitive web applications and am eager to contribute to exciting projects that make a positive impact.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'personalData'} onChange={handleChange('personalData')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="personalDatabh-content"
                id="personalDatabh-header"
              >
                <Typography className='text-brand-cyan text-xl md:text-2xl font-semibold' style={{ width: '90%', flexShrink: 0 }}>Personal data</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider style={{ marginBottom: '10px' }} />
                <Typography className='text-justify text-lg md:text-xl '>
                  <strong>Birthdate:</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>March 31 2002</li>
                  </ul>
                  <strong>Civil Status:</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>Single</li>
                  </ul>
                  <strong>Email:</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>Email: kenchicken0118@gmail.com</li>
                  </ul>
                  <strong>Phone:</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>Phone: 09633136492</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'EducationInfo'} onChange={handleChange('EducationInfo')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="EducationInfobh-content"
                id="EducationInfobh-header"
              >
                <Typography className='text-brand-cyan text-xl md:text-2xl font-semibold' style={{ width: '90%', flexShrink: 0 }}>Education and Certification</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider style={{ marginBottom: '10px' }} />
                {/* <Typography className='text-justify indent-8 text-lg md:text-xl'>
                I hold a Bachelor of Science in Information Technology from Holy Cross of Davao College. I've also completed various online courses in full-stack development and cloud computing.
                </Typography> */}
                <Typography className='text-justify text-lg md:text-xl'>
                  <strong>Batchelor's Degree:</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>Information Technology</li>
                  </ul>
                  <strong>Certifications:</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>SWEEP 2023</li>
                    <li>Food and Beverage Services NCII 2020</li>
                    <li>Front Office Services NCII 2020</li>
                    <li>House Keeping NCII 2020</li>
                  </ul>
                  <strong>National Certificates (TVL):</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>Cookery NCII 2018</li>
                    <li>Food and Beverage Services NCII 2020</li>
                    <li>Front Office Services NCII 2020</li>
                    <li>House Keeping NCII 2020</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'ExperienceInfo'} onChange={handleChange('ExperienceInfo')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="ExperienceInfobh-content"
                id="ExperienceInfobh-header"
              >
                <Typography className='text-brand-cyan text-xl md:text-2xl font-semibold' style={{ width: '90%', flexShrink: 0 }}>Work Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider style={{ marginBottom: '10px' }} />

                <Typography className='text-justify text-lg md:text-xl'>
                  <strong>Work Immersion</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>Magsige MPC</li>
                  </ul>
                </Typography>

                <Typography className='text-justify text-lg md:text-xl'>
                  <strong>486 Hours Internship</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>PageOne147 (Full Stack Developer)</li>
                    <li>February 15 – May 8, 2024</li>
                  </ul>
                </Typography>

                <Typography className='text-justify text-lg md:text-xl'>
                  <strong>Junior Developer</strong>
                  <ul className='list-disc list-inside pl-4'>
                    <li>PageOne247 (Full Stack Developer)</li>
                    <li>Present</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
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

export default About;