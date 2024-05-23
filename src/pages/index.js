
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function Profile() {
  return (
    <>
    <Head>
      <title>My Profile</title>
    </Head>
    <div className='min-h-screen w-full bg-[#000c18] p-4 md:p-8'>
      <section className='w-full h-full'>
        <div className='w-full h-full flex justify-center flex-col items-center backdrop-blur bg-opacity-75 border border-[#0ea5e9] border-[10px] p-4 rounded-3xl'>
          <span>Conent here for landing page</span>
        </div>
      </section>
    </div>
    </>
    
  )
}

export default Profile;