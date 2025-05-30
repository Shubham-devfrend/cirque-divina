'use client'

import React, { useRef } from 'react'
import Head from './Head'
import { Info } from '../data'
import Footer from './Footer'
import {motion, useInView} from 'framer-motion'

const InfoVariants = {
  hidden:{
    opacity:0, x:50
  },
  visible:{
    opacity:1,x:0,
    transition:{delay:0.4,duration:0.4}
  }
}
const MapVariants = {
  hidden:{
    opacity:0, x:-50
  },
  visible:{
    opacity:1,x:0,
    transition:{delay:0.4,duration:0.4}
  } 
}

const Contact = () => {

  const title = 'Visit Our Shop'
  const subtitle = 'Our Location'

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
    <div className='w-full lg:px-32 px-6 py-16 flex flex-col justify-center bg-[#1C1B2F]'>
        <Head title={title} subtitle={subtitle}/>
        <div className='w-full flex flex-col items-center pt-10 gap-4'>
            <p ref={ref} className='text-lg text-neutral-400'>Conveniently located in Savannah, GA:</p>
             <div className='w-full flex flex-col lg:flex-row relative gap-12 justify-center'>
                <motion.div 
                variants={MapVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
                className='bg-[#282828] w-full lg:w-[48%] h-96 rounded-xl border border-neutral-700 overflow-hidden'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.1911500466867!2d-81.17374968681453!3d31.984361396627854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb0b218deff27d%3A0x85e6a528339f38de!2sCirque%20Divina%20Studios!5e0!3m2!1sen!2sin!4v1748589855878!5m2!1sen!2sin" width="650" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </motion.div>
                <motion.div 
                 variants={InfoVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
                className='bg-[#29274c] w-full lg:w-[48%] lg:h-96 rounded-xl border border-[#F6C90E] px-6 py-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-xl'>Contact Information</p>
                        <span className='w-28 h-1 rounded-full bg-[#c176ff]'></span>
                    </div>
                    <div className='flex flex-col gap-4'>
                      {Info.map((item,index)=>(
                        <div key={index} className='flex items-center gap-3 w-full py-2 hover:bg-[#16133e] px-2 rounded-xl hover:duration-500'>
                            <div className='w-9 h-9 bg-[#c176ff] rounded-full flex justify-center items-center'>
                               {item.icon}
                            </div>
                            <div className='flex flex-col gap-2'>
                               <p className='font-semibold'>{item.name}</p>
                               <p className='text-sm text-neutral-500'>{item.content}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    <button className='font-semibold w-48 py-2 flex items-center justify-center rounded-xl bg-[#c176ff] '>
                       <a href="https://maps.app.goo.gl/aS11SRtxQw16yKdFA">Get Direction {`->`}</a>
                    </button>
                </motion.div>
             </div>
        </div>
    </div>
     <Footer/>
    </>
  )
}

export default Contact