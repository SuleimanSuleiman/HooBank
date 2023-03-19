import React from 'react'
import {quotes} from "../assets"

export default function FeadBack({ content, name, title, img }) {
  return (
      <div className='basis-1/4 flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feature-card cursor-pointer'>
          <img src={quotes} alt="" className='w-[42px] h-[42px]' />
          <p className='font-poppins font-medium text-white leading-8 my-12'>{content}</p>
          <div className="image flex flex-row items-center justify-start ">
              <img src={img} alt="" className='w-[32px] h-[32px] object-cover mr-4' />
              <div className="flex flex-col items-start justify-start">
                  <h4 className='font-poppins font-semibold text-white mb-2'>{name}</h4>
                  <p className='font-poppins font-normal text-dimWhite'>{title}</p>
              </div>
          </div>
    </div>
  )
}
