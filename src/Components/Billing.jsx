import React from 'react'
import { apple, bill, google } from '../assets'

function Billing() {
  return (
    <section id='product' className='w-full mt-20 flex sm:flex-row flex-col justify-between items-center'>
      <div className="flex-1 h-full left  flex justify-center items-center relative">
        <img src={bill} alt="" className=' relative z-30' />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className="flex-1 h-full flex flex-col sm:pl-10 pl-0 justify-center items-start">
        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your
          billing & invoicing
        </h1>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
          Elit enim sed massa etiam.
          Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="buttons flex justify-start items-center sm:mt-10 mt-6">
          <img src={apple} alt="" className='mr-6' />
          <img src={google} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Billing
