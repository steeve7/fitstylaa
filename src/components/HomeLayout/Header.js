'use client'
import React from 'react'
import Button from '../ui/Button';
import { motion } from "framer-motion";
import Image from 'next/image';
import logo from '@/components/assests/images/logo.svg'
import hero from '@/components/assests/images/hero.svg'

export default function Header() {
  return (
    <motion.header
      className="w-full flex flex-col justify-center items-center gap-10 py-6 md:px-0 overflow-hidden bg-[#fefbf4]"
      initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow & smooth
      viewport={{ once: true, amount: 0.2 }} // Runs only once per session
      style={{ willChange: "opacity, transform" }}
    >
      <div className="w-[142px]">
        <Image src={logo} alt="logo" />
      </div>
      <div className="md:w-[713px] w-full flex flex-col justify-center items-center px-2">
        <Image src={hero} alt="hero_image" className="" />
        <div className='flex flex-col justify-center items-center md:gap-[12px] gap-[20px] mt-5'>
         <h2 className="font-medium text-[36px] font-Euclid mt-5 text-center leading-[44px] text-[#101010] lg:w-[713px]">
          Your personal AI stylist & digital wardrobe
        </h2>
        <p className="font-normal text-[18px] font-Poppins text-center leading-[28px] custom-brown">
          No more ‘I don’t know what to wear’ moments! With Fitstyla, you can
          organise your closet, get AI-powered outfit ideas, plan looks, and
          refine your personal style.
        </p>
        </div>

        <Button />
      </div>
    </motion.header>
  );
}
