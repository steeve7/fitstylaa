'use client'
import React from 'react'
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import app from "@/components/assests/images/app.png";
import Image from 'next/image';

export default function App() {
  return (
    <motion.div
      className="w-full overflow-hidden bg-[#fefbf4]"
      initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
      viewport={{ once: true, amount: 0.2 }} // Runs only once per session
      style={{ willChange: "opacity, transform" }}
    >
      <div className="flex flex-col mt-[96px] justify-center items-center gap-[64px] px-3 md:px-0 -mb-8">
        <h2 className="font-Euclid font-medium text-[#101010] -mb-7 md:text-[40px] lg:text-[60px] md:leading-[72px] leading-[32px] text-[24px] text-center w-full">
          And there’s so much more waiting for You!
        </h2>
        <p className="font-Poppins font-normal text-[#303030] md:text-[18px] text-[16px] text-center w-full md:leading-[28px] leading-[24px]">
          Get the Fitstyla app today and make getting dressed the easiest part
          of your day.
        </p>
        <Image
          src={app}
          alt="app_image"
          className=" md:w-[400px] w-[300px] lg:w-[510px]"
        />
        <Button />
      </div>
    </motion.div>
  );
}
