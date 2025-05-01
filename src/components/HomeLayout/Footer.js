import React from "react";
import Image from "next/image";
import logo from "@/components/assests/images/white-logo.svg";
import facebook from "@/components/assests/images/facebook.svg";
import twitter from "@/components/assests/images/twitter.svg";
import instagram from "@/components/assests/images/instagram.svg";
import { MdLocationPin } from "react-icons/md";
import { MdOutlinePhoneCallback } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="dark-green w-full py-16 md:px-20 flex flex-col gap-[28px]">
      <div className="flex lg:flex-row flex-col justify-betweeen items-center w-full lg:gap-40 gap-10 md:px-0 px-10">
        <div className="flex flex-col justify-center md:items-start items-center gap-[48px] w-full">
          <Image src={logo} alt="logo" className="w-[142px] -mb-7" />
          <p className="font-Euclid font-normal md:text-[16px] leading-[24px] text-white md:text-start text-center w-[320px]">
            Your personal AI stylist and digital wardrobe.
          </p>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-row gap-2 items-center md:text-start text-center">
            <MdLocationPin className="text-white text-[30px]" />
            <a
              href="https://www.google.com/maps?q=1111B+S+Governors+Ave+STE+26792+Dover,+DE+19904"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal font-Poppins text-white hover:underline md:text-[16px] leading-[24px]"
            >
              1111B S Governors Ave STE 26792 Dover, DE 19904 United States
            </a>
          </div>

          <div className="flex flex-row gap-2 items-center md:text-start text-center">
            <MdOutlinePhoneCallback className="text-white text-[20px]" />
            <a
              href="tel:+13466667905"
              className="font-normal font-Poppins text-white hover:underline md:text-[16px] leading-[24px]"
            >
              +1 (346) 666-7905
            </a>
          </div>
        </div>
      </div>

      <div className="custom-border md:w-full w-full mt-5" />
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-4">
        <div className="flex flex-row items-center gap-3">
          <p className="font-Poppins font-medium text-[16px] text-white cursor-pointer leading-[24px]">
            Terms of Use
          </p>
          <p className="font-Poppins font-medium text-[16px] text-white cursor-pointer leading-[24px]">
            Privacy Policy
          </p>
        </div>
        <div className="flex flex-row items-center gap-[24px]">
          <Image
            src={facebook}
            alt="facebook-icon"
            className="w-[32px] cursor-pointer"
          />
          <Image
            src={twitter}
            alt="twitter-icon"
            className="w-[32px] cursor-pointer"
          />
          <Image
            src={instagram}
            alt="instagram-icon"
            className="w-[32px] cursor-pointer"
          />
        </div>
      </div>
      <p className="font-Euclid font-normal text-[16px] text-white flex justify-center items-center leading-[24px]">
        © 2025 Fitstyla, Inc. All rights reserved.
      </p>
    </footer>
  );
}