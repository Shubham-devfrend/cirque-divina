'use client'

import React, { useRef } from 'react'
import Head from './Head'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const AboutVariants1 = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const AboutVariants2 = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const About = () => {
  const title = 'About Sobu Stretch'
  const subtitle = 'About Us'

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className='w-full px-6 lg:px-32 lg:pt-16 pt-16 pb-8 flex flex-col justify-center bg-[#1C1B2F]'>
      <Head title={title} subtitle={subtitle} />
      <div
        ref={ref}
        className='w-full flex flex-col-reverse lg:flex-row justify-between items-center pt-10 gap-10'
      >
        <motion.p
          variants={AboutVariants1}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-base sm:text-lg lg:text-xl text-neutral-400 max-w-[600px] text-justify'
        >
          Cirque Divina Studios is a movement and performance arts studio located in the heart of the city. Focusing on aerial fitness, acrobatics, and expressive movement, the studio provides a unique space for individuals to discover strength, grace, and freedom.  <br />
          With expert instructors and a supportive community, Cirque Divina welcomes all levels—from beginners exploring aerial silks to advanced artists refining their craft. Every class is designed to challenge, inspire, and connect you with your inner performer.

        </motion.p>
        <motion.div
          variants={AboutVariants2}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='w-full max-w-[500px]'
        >
          <Image
            src='/barber.jpg'
            alt='image'
            width={500}
            height={100}
            className='w-full rounded-xl border-2 border-[#F6C90E] object-cover'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About
