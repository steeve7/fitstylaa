import React from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import iphone15 from "@/components/assests/images/iPhone15.svg";
import spring from "@/components/assests/images/spring.svg";
import fall from "@/components/assests/images/fall.svg";
import summer from "@/components/assests/images/summer.svg";
import winter from "@/components/assests/images/winter.svg";
import Image from 'next/image';

export default function Wardrobe() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center w-full gap-20 md:gap-14 lg:gap-48">
      <div className="flex flex-col justify-start items-start md:w-1/2 w-full gap-[44px]">
        <h2 className="font-Euclid font-medium md:text-[35px] -mb-7 text-[#101010] lg:text-[48px] text-[24px] w-full md:leading-[56px] leading-[32px] md:w-[544px]">
          Wardrobe Management
        </h2>
        <p className="font-Poppins font-medium text-[16px] md:text-[14px] lg:text-[18px] md:w-[330px] lg:w-[544px] w-full md:leading-[28px] leading-[24px] text-[#303030]">
          Digitally organize your closet, so you never forget what you own. Add
          new items, categorize them, and access your wardrobe anytime,
          anywhere.
        </p>
        <div className="flex flex-col items-start justify-start md:gap-[16px] gap-[9.12px] md:w-[418px] w-[238px]">
          <div className="border border-gray-400 md:w-[280px] lg:w-[418px] w-[238px] md:rounded-[16px] rounded-[9px] md:py-6 py-2">
            <div className="flex flex-row justify-between items-center md:px-3 px-2 md:-mt-2">
              <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[6px]">
                Condition
              </p>
              <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[6px] custom-red-color flex flex-row items-center gap-1">
                New
                <MdOutlineKeyboardArrowUp className="md:text-[15px] lg:text-[20px] text-[10px]" />
              </p>
            </div>
            <div className="flex flex-row items-center justify-start md:gap-[10.63px] gap-[4px] md:mt-5 mt-2 md:px-3 px-2">
              <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] custom-red-color custom-red-border md:h-[30.18px] h-[18.08px] text-center md:rounded-[14.26px] rounded-[8.13px] md:w-[30px] lg:w-[45px] w-[26.12px] flex items-center justify-center">
                New
              </span>
              <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] md:w-[50px] lg:w-[67px] w-[39px] md:rounded-[14.26px] rounded-[8.13px] md:h-[30.18px] h-[18.08px] border text-center border-gray-200 flex items-center justify-center">
                Like New
              </span>
              <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] md:w-[40px] lg:w-[50px] w-[29px] md:rounded-[14.26px] rounded-[8.13px] md:h-[30.18px] h-[18.08px] border text-center border-gray-200 flex items-center justify-center">
                Good
              </span>
              <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] md:w-[30px] lg:w-[41px] w-[24px] md:rounded-[14.26px] rounded-[8.13px] md:h-[30.18px] h-[18.08px] border text-center border-gray-200 flex items-center justify-center">
                Fair
              </span>
            </div>
          </div>
          <div className="border border-gray-400 md:w-[280px] lg:w-[418px] w-[238px] md:rounded-[16px] rounded-[9.12px] md:py-6 py-2">
            <div className="flex flex-row justify-between items-center md:px-3 px-2">
              <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[7px]">
                Season
              </p>
              <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[6px] custom-red-color flex flex-row items-center gap-2">
                Summer, Fall
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px] md:mt-5 mt-2 md:px-3 px-2">
              <div className="flex flex-row items-center gap-[2px] justify-center border md:h-[31.87px] h-[18.17px] border-gray-200 md:rounded-[14.25px] rounded-[8.12px] md:w-[50px] lg:w-[70px] w-[40.19px]">
                <Image
                  src={spring}
                  alt="spring-image"
                  className="lg:w-[17px] w-[10.1px]"
                />
                <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] md:leading-[] leading-[9.09px]">
                  Spring
                </p>
              </div>
              <div className="flex flex-row items-center gap-[2px] justify-center border md:h-[31.87px] h-[18.17px] custom-green-border md:rounded-[14.25px] rounded-[8.12px] md:w-[50px] lg:w-[82px] w-[50px]">
                <Image
                  src={fall}
                  alt="summer-image"
                  className="md:text-[13px] lg:w-[17px] w-[10.1px]"
                />
                <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px]">
                  Summer
                </p>
              </div>
              <div className="flex flex-row items-center gap-[2px] justify-center border md:h-[31.87px] h-[18.17px] custom-green-border md:rounded-[14.25px] rounded-[8.12px] md:w-[35px] lg:w-[54px] w-[32.50px]">
                <Image
                  src={summer}
                  alt="fall-image"
                  className="md:text-[13px] lg:w-[17px] w-[10px]"
                />
                <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px]">
                  Fall
                </p>
              </div>
              <div className="border border-gray-200 md:rounded-[14.25px] rounded-[8.12px] md:w-[55px] lg:w-[70.43px] w-[41.50px] md:h-[31.87px] h-[18.17px] flex flex-row items-center gap-[2px] justify-center">
                <Image
                  src={winter}
                  alt="winter-image"
                  className="md:text-[13px] lg:w-[17px] w-[10px]"
                />
                <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px]">
                  Winter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-[70%] mt-[36px] w-full animate-bounce-slow">
        <Image src={iphone15} alt="iphone-image" />
      </div>
    </div>
  );
}
