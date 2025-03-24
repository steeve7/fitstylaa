import React from 'react'
import collections from "@/components/assests/images/collections.svg";
import iphone14 from "@/components/assests/images/iphone14.svg";
import Image from 'next/image';

export default function StyleChallenges() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center lg:gap-48 gap-14 w-full">
      <div className="flex flex-col justify-start items-start md:w-1/2 w-full gap-[44px]">
        <h2 className="font-Euclid font-medium text-[24px] text-[#101010] md:text-[35px] -mb-7 lg:text-[48px] leading-[32px] md:leading-[56px] md:w-[544px] w-full">
          Style Challenges
        </h2>
        <p className="font-Poppins font-medium text-[#303030] text-[16px] md:text-[14px] lg:text-[18px] leading-[24px] md:leading-[28px] md:w-[300px] lg:w-[544px] w-full">
          Try fun and engaging style challenges to refine your personal style.
          Experiment with new looks, step out of your comfort zone, and get
          creative with confidence.
        </p>
        <Image
          src={collections}
          alt="image_collections"
          className="md:w-[220px] lg:w-[340px] w-[238px]"
        />
      </div>
      <div className=" w-full md:w-1/2 mt-[36px] animate-bounce-slow">
        <Image src={iphone14} alt="iphone-image" className="" />
      </div>
    </div>
  );
}
