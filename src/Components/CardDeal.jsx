import React from 'react'
import { card } from '../assets'
import styles from '../style'

function CardDeal() {
  return (
    <section className='mt-20 flex sm:flex-row flex-col justify-between items-center w-full'>
      <div className="flex-1 ">
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
            Find a better card deal
            in few easy steps. 
        </h1>
        <p  className={`${styles.paragraph}  text-[18px] leading-[30.8px] max-w-[470px] mt-5`}> 
               Arcu tortor, purus in mattis at sed integer faucibus.
               Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.  
        </p>
        <div className=" mb-5 mt-10 text-primary bg-blue-gradient rounded-xl cursor-pointer flex justify-center items-center w-[160px] h-14 font-poppins font-semibold ">
          Get Started
        </div>
      </div>
      <div className="flex-1 sm:ml-10 ml-0 mt-20 sm:mt-0  bl-45 right flex flex-col justify-center items-center">
        <img src={card} alt="" />
      </div>
    </section>
  )
}

export default CardDeal
