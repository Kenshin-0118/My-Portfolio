// Import global styles and other dependencies
import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import 'devicon/devicon.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import Head from 'next/head'

// Import MUI components and theming utilities
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

config.autoAddCss = false;

import { Inter } from '@next/font/google';

// Initialize font
const inter = Inter({ subsets: ['latin'] });

// Create a theme instance
const theme = createTheme({
  // Customize the theme here
  palette: {
    mode: 'dark', // Or 'dark'
    background: {
      default: '#000c18', // Set the default background color
      paper: '#000c18', // Optional: set the background color for paper components
    },
  },
});

export default function App({ Component, pageProps }) {

  // Example useEffect for disabling right-click and keyboard shortcuts (uncomment if needed)
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U') || 
        (e.ctrlKey && e.key === 'S') || 
        (e.ctrlKey && e.key === 'C') || 
        (e.ctrlKey && e.key === 'A') || 
        (e.ctrlKey && e.key === 'E') || 
        (e.ctrlKey && e.key === 'H') || 
        (e.ctrlKey && e.key === 'F') || 
        (e.ctrlKey && e.key === 'G')
      ) {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      {/* Wrap the application in the ThemeProvider */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <footer className='w-full bg-[#0A1622] p-4 flex flex-col items-center justify-center'>
        <section className='w-full flex flex-row p-2 text-4xl gap-4 justify-center'>
        <FontAwesomeIcon icon={faFacebook} className='text-gray-400 hover:text-white transition' title='Facebook Profile' onClick={() => window.open('https://www.facebook.com/kenneth.candia.16', '_blank')}/>
        <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 hover:text-white transition'  onClick={() => window.open('mailto:someone@example.com', '_blank')}/>
        </section>
        <span className='w-full text-gray-400 p-2 text-center'>
        © Kenneth Candia 2024. All Rights Reserved.
        </span>
      </footer>
      </ThemeProvider>
    </>
  )
}
