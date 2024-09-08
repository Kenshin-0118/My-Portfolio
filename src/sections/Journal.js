
import { Inter } from '@next/font/google'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

function Journal() {

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

    const getImages = (items) => {
      if (!items) {
        return [];
      }
      return items.map(item => item.img);
    };
    

  return (
    <>
      {/* Journal Section */}
      <span className='journal'/>
      <section className='w-full h-full relative mx-auto max-w-screen-xl' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-brand-dark">Journal</div>
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
    </>
  )
}

export default Journal;