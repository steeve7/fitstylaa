'use client'
import React from 'react'
import { motion } from 'framer-motion';
import largeScreen from "@/components/assests/images/largescreen.svg";
import mobile from "@/components/assests/images/mobile.svg";
import smart from "@/components/assests/images/smart.png";
import Image from 'next/image';

export default function Download() {
  return (
    <motion.div
      className="relative flex flex-col justify-center items-center w-full md:py-24 py-[64px] overflow-hidden"
      initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
      viewport={{ once: true, amount: 0.2 }} // Runs only once per session
      style={{ willChange: "opacity, transform" }}
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large screens */}
        <div className="hidden lg:flex justify-center items-center md:block absolute inset-0">
          <Image
            src={largeScreen}
            alt="bg_image"
            className="lg:w-[1200px] xl:w-full lg:h-[504px] md:h-[400px] 2xl:h-[700px]"
          />
        </div>
        {/* Small screens */}
        <div className="lg:hidden md:hidden absolute inset-0 flex justify-center items-center">
          <Image
            src={mobile}
            alt="gross2_image"
            className="w-full h-[450px] px-3"
          />
        </div>
      </div>
      {/* Main content container */}
      <div className="relative flex flex-col md:flex-row 2xl:px-20 items-center justify-center mt-10 md:w-1/2 lg:w-3/4 w-full gap-6">
        <div className="flex-1 lg:w-1/2 w-full 2xl:px-20 xl:px-3 md:px-2 px-[55px] lg:-mt-32 md:-mt-40">
          <h2 className="font-Euclid font-medium text-[24px] md:text-[40px] lg:text-[60px] 2xl:text-[80px] leading-[32px] md:leading-[60px] lg:leading-[72px] 2xl:leading-[80px] md:w-[300px] lg:w-[490px] 2xl:w-[600px] w-full text-white">
            Smart styling with AI
          </h2>
          <p className="font-Poppins text-[16px] md:text-[14px] lg:text-[18px] 2xl:text-[20px] font-medium mt-[12px] leading-[24px] md:leading-[20px] lg:leading-[28px] 2xl:leading-[35px] md:w-[300px] lg:w-[490px] 2xl:w-[600px] w-full text-[#fffffe]">
            Get outfit suggestions curated for your style. Fitstyla’s AI learns
            your preferences, wardrobe, and fashion goals to recommend looks
            that fit every occasion and vibe.
          </p>
        </div>
        <div className="flex-shrink-0 xl:mt-[65px] lg:mt-[39px] 2xl:mt-[115px] md:mt-0 mt-[5px]">
          <Image
            src={smart}
            alt="grocery_image"
            className="w-full max-w-[280px] md:max-w-[300px] xl:max-w-[512px] image dobby 2xl:max-w-[700px] lg:max-w-[445px] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
