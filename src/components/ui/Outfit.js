import React from 'react'
import iphone16 from "@/components/assests/images/iphone16.png";
import trousers from "@/components/assests/images/tousers.png";
import shirt from "@/components/assests/images/shirt.png";
import drink from "@/components/assests/images/drink.svg";
import love from "@/components/assests/images/love.svg";
import Image from 'next/image';

export default function Outfit() {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between items-center gap-20 lg:gap-60 md:py-[96px] py-[64px]">
      <div className="flex flex-col justify-start items-start md:order-2 order-1 md:w-1/2 w-full md:gap-[38px] gap-[35px]">
        <h2 className="font-Euclid text-[#101010] -mb-7 font-medium md:text-[35px] lg:text-[48px] text-[24px] md:leading-[56px] leading-[32px] md:w-[544px] w-full">
          Outfit Planning
        </h2>
        <p className="font-Poppins font-normal md:text-[14px] lg:text-[18px] text-[#303030] text-[16px] md:leading-[28px] leading-[24px] md:w-[300px] lg:w-[544px] w-full">
          Stay stylish without stress. Plan and schedule your outfits in advance
          with Fitstyla, so you always know what to wear and save time getting
          dressed.
        </p>
        <div className=" md:w-[230px] lg:w-[343px] w-[238px] flex flex-col justify-start items-start md:gap-[16px] gap-[11px]">
          <div className="flex flex-row items-center gap-4 border border-[#E4DBD0] md:rounded-lg rounded-[11px] md:w-[230px] lg:w-[343px] w-[238px] md:h-[96px] h-[70.46px]">
            <span className="bg-gray-200 md:w-[70px] lg:w-[96px] md:py-1 py-2 w-[66px] md:h-[96px] h-[70.46px] rounded-bl-lg rounded-l-lg -ml-[1px]">
              <Image
                src={trousers}
                alt="trouser-image"
                className="md:w-[40px] lg:w-[50px] w-[34px] flex justify-center items-center m-auto"
              />
            </span>
            <div className="flex flex-col items-start justify-start md:gap-1">
              <div className="flex flex-row items-center gap-1">
                <h4 className="font-Poppins font-medium text-[9px] lg:text-[14px] leading-[20px]">
                  Date
                </h4>
                <Image
                  src={love}
                  alt="love-image"
                  className="md:w-[20px] w-[13.85px]"
                />
              </div>
              <p className="font-Poppins font-normal text-[9px] lg:text-[12px] leading-[18px]">
                Elegant
              </p>
              <p className="font-Poppins font-medium text-[7px] md:text-[9px] leading-[14px] custom-gray">
                March 20, 2025
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 border border-[#E4DBD0] md:rounded-lg rounded-[11px] md:w-[230px] lg:w-[343px] w-[238px] md:h-[96px] h-[70.46px]">
            <span className="bg-gray-200 rounded-bl-lg rounded-l-lg -ml-[1px] md:h-[96px] h-[70.46px] md:py-5 py-4 md:w-[70px] lg:w-[96px] w-[66px]">
              <Image
                src={shirt}
                alt="shirt-image"
                className="md:w-[40px] lg:w-[50px] w-[34px] flex justify-center items-center m-auto"
              />
            </span>
            <div className="flex flex-col items-start justify-start md:gap-1">
              <div className="flex flex-row items-center md:gap-4 lg:gap-1">
                <h4 className="font-Poppins font-medium text-[9px] lg:text-[14px] leading-[20px]">
                  Brunch
                </h4>
                <Image
                  src={drink}
                  alt="drink-image"
                  className="md:w-[20px] w-[13.85px]"
                />
              </div>
              <p className="font-Poppins font-normal text-[9px] lg:text-[12px] leading-[18px]">
                Chic
              </p>
              <p className="font-Poppins font-medium text-[7px] md:text-[9px] leading-[14px] custom-gray">
                Apr 25, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full py-[36px] md:order-1 order-2 animate-bounce-slow">
        <Image src={iphone16} alt="iphone_image" className="" />
      </div>
    </div>
  );
}
