import React from 'react'
import apple from "@/components/assests/images/apple.png";
import andriod from "@/components/assests/images/android.png";
import Image from 'next/image';

export default function Button() {
  return (
    <div className="flex flex-row items-center justify-center gap-5 md:mt-[36px] mt-[40px] mb-32">
      <div className="flex flex-row items-center gap-2 custom-green rounded-[16px] px-3 py-3">
        <Image src={apple} alt="apple_icon" className="w-[21px]"/>
        <p className="text-white font-Poppins font-medium md:text-[16px] text-[14px]">
          Get on iphone
        </p>
      </div>
      <div className="flex flex-row items-center gap-2 custom-green rounded-[16px] px-3 py-3">
        <Image src={andriod} alt="android_icon" className='w-[21px]'/>
        <p className="text-white font-Poppins font-medium md:text-[16px] text-[14px]">
          Get on Android
        </p>
      </div>
    </div>
  );
}
