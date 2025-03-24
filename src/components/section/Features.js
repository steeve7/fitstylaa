'use client'
import React from 'react'
import Wardrobe from '../ui/Wardrobe';
import Outfit from '../ui/Outfit';
import StyleChallenges from '../ui/StyleChallenges';
import { motion } from 'framer-motion';


export default function Features() {
  return (
    <div className="w-full py-[96px] flex flex-col justify-center items-center lg:px-12 xl:px-[120px] px-5 md:px-12 overflow-hidden">
      <motion.h2
        className="font-medium md:text-[40px] text-[#101010] lg:text-[60px] text-center text-[24px] font-Euclid md:leading-[72px] leading-[32px]"
        initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
        viewport={{ once: true, amount: 0.2 }} // Runs only once per session
        style={{ willChange: "opacity, transform" }}
      >
        Never stress about what to wear again
      </motion.h2>
      <motion.div
        className="flex flex-col justify-center items-center mt-[64px]"
        initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
        viewport={{ once: true, amount: 0.2 }} // Runs only once per session
        style={{ willChange: "opacity, transform" }}
      >
        <Wardrobe />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
        viewport={{ once: true, amount: 0.2 }} // Runs only once per session
        style={{ willChange: "opacity, transform" }}
      >
        <Outfit />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
        viewport={{ once: true, amount: 0.2 }} // Runs only once per session
        style={{ willChange: "opacity, transform" }}
      >
        <StyleChallenges />
      </motion.div>
    </div>
  );
}
