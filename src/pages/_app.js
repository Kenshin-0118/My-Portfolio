import '@/styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import 'devicon/devicon.min.css';

config.autoAddCss = false;

import { Inter } from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
