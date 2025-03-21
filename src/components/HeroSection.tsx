
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12">
      <div className="max-w-6xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className='text-blue-600 text-xl font-semibold'>Grow up your driving skill</h4>
          <h1 className='text-6xl text-white font-bold'>Learn to <span className=' text-blue-400 '>drive with</span><br></br> confidence</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-4"
        >
          <div className='flex flex-row gap-4'>
          <button 
            className="shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] text-white text-lg group  p-3 rounded-lg"
          >
            Explore courses   &nbsp; 
            <i className="fa-solid fa-arrow-right group-hover:animate-bounce"></i>

          </button>
          <button  className='flex flex-row items-center justify-center gap-2'>
            <div className=' shadow-[inset_0_2px_4px_2px_rgba(255,255,255,0.4)] rounded-full p-4 px-6'><i className="fa-solid fa-play text-white text-lg"></i></div>
            <h4>Watch our story</h4>
          </button>

          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
