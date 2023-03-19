import React from 'react'

export default function CTA_tow() {
  return (
    <section className='flex sm:flex-row flex-col justify-between items-center bg-black-gradient-2 rounded-3xl sm:px-16 px-6 sm:py-12 py-4'>
      <div className=" grow flex flex-col w-full">
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Let’s try our service now!</h1>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="bg basis-1/4 flex  h-full justify-center items-center w-full">
        <div className="  mt-2 sm:mt-0  mb-5 text-primary bg-blue-gradient rounded-xl cursor-pointer flex justify-center items-center w-[160px] h-14 font-poppins font-semibold ">
          Get Started
        </div>
      </div>
    </section>
  )
}
