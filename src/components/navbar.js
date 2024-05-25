import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"

const NavBar = ({setSection}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('home');
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    const handleButtonClick = (message,value) => {
      console.log(message);
      setSection(value);
      setSelected(value)
      setIsOpen(false)
    };
  
    return (
      <nav className="bg-[#0A1622] p-4" onMouseLeave={()=>setIsOpen(false)}>
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-bold text-2xl tracking-tight"><FontAwesomeIcon icon={faBriefcase} className='pr-2'/> My Portfolio</span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleNavbar}
              className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <div className="text-md font-semibold lg:flex-grow">
              <button
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white transition mr-4"
                onClick={() => handleButtonClick('Home button pressed','home')}
              >
                Home
              </button>
              <button
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white transition mr-4"
                onClick={() => handleButtonClick('About button pressed', 'about')}
              >
                About
              </button>
              <button
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white transition mr-4"
                onClick={() => handleButtonClick('Certificates button pressed','certificates')}
              >
                Certificates
              </button>
              <button
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white transition mr-4"
                onClick={() => handleButtonClick('Education button pressed', 'education')}
              >
                Education
              </button>
              <button
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white transition mr-4"
                onClick={() => handleButtonClick('Journal button pressed', 'journal')}
              >
                Journal
              </button>
            </div>
            <div>
              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
                onClick={() => window.open('https://github.com/Kenshin-0118', '_blank')}
              >
                GitHub<FontAwesomeIcon icon={faGithub} className='pl-2'/>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default NavBar;