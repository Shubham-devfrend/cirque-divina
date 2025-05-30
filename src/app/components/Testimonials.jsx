'use client';

import { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {motion, useInView} from 'framer-motion'
import Image from 'next/image';

const TestiVariants = {
  hidden:{
    opacity:0, y:50
  },
  visible:{
    opacity:1,y:0,
    transition:{delay:0.2,duration:0.4}
  }
}

const testimonials = [
  {
    text: "Cirque Divina Studios unlocked a side of me I didn’t know existed. The silks classes are magical, empowering, and so much fun!",
    name: "Talia M.",
  },
  {
    text: "The instructors are incredibly skilled and encouraging. I’ve grown stronger and more confident with every session.",
    name: "Jordan K.",
  },
  {
    text: "There’s no place like this—where artistry, athleticism, and soul all come together. I’ve never felt more alive in my body.",
    name: "Reina S.",
  },
  {
    text: "I was nervous to try aerial work, but the community here made me feel instantly at home. Every class is a breakthrough.",
    name: "Chris D.",
  },
  {
    text: "From acrobatics to performance coaching, Cirque Divina offers it all. I’m constantly growing and can’t wait for more!",
    name: "Nicolette P.",
  },
];



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div className="w-full px-4 md:px-28 py-16 flex flex-col items-center text-center relative bg-[#29274c]">
      {/* <Image src='/images/back.webp' alt='back' fill className='object-cover -z-10 brightness-55'/> */}
      <h2 ref={ref} className="text-3xl md:text-4xl font-bold text-white mb-12">What Our Customer Says</h2>

       <motion.div variants={TestiVariants} initial='hidden' animate={isInView ? 'visible': 'hidden'} className='flex flex-col items-center'>
      <div className="w-full max-w-2xl">
        <p className="text-lg text-white leading-relaxed italic mb-4">
          “{testimonials[currentIndex].text}”
        </p>

        <div className="flex justify-center mb-2 text-yellow-500">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </div>

        <p className="font-semibold text-lg text-[#FBAB55 ]">{testimonials[currentIndex].name}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-6 md:left-20 top-4/5 lg:top-1/2 transform -translate-y-1/2">
        <button onClick={handlePrev} className="p-2 bg-[#17162d] rounded-full shadow">
          <ChevronLeft />
        </button>
      </div>

      <div className="absolute right-6 md:right-20 top-4/5 lg:top-1/2 transform -translate-y-1/2">
        <button onClick={handleNext} className="p-2 bg-[#17162d] rounded-full shadow">
          <ChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-[#3f39b0]' : 'bg-[#17162d]'
            } transition-all duration-300`}
          ></button>
        ))}
       </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
