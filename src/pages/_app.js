import '@/styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import 'devicon/devicon.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from "react";
import Head from 'next/head'

config.autoAddCss = false;

import { Inter } from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {

    //   useEffect(() => {
    //   // Disable right-click
    //   document.addEventListener('contextmenu', (e) => e.preventDefault());
  
    //   // Disable certain keyboard shortcuts
    //   document.addEventListener('keydown', (e) => {
    //     if (
    //       e.key === 'F12' || // Open DevTools
    //       (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I
    //       (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J
    //       (e.ctrlKey && e.key === 'U') || // Ctrl+U (view source)
    //       (e.ctrlKey && e.key === 'S') || // Ctrl+S (save page)
    //       (e.ctrlKey && e.key === 'C') || // Ctrl+C (copy)
    //       (e.ctrlKey && e.key === 'A') || // Ctrl+A (select all)
    //       (e.ctrlKey && e.key === 'E') || // Ctrl+E (find)
    //       (e.ctrlKey && e.key === 'H') || // Ctrl+H (find and replace)
    //       (e.ctrlKey && e.key === 'F') || // Ctrl+F (find)
    //       (e.ctrlKey && e.key === 'G') // Ctrl+G (find again)
    //     ) {
    //       e.preventDefault();
    //     }
    //   });
    // }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
