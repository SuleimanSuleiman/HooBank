import React from 'react'
import { features } from '../constants'
import styles from '../style'

function Business() {
  return (
    <section id='features' className='mt-20 flex sm:flex-row flex-col justify-between items-center w-full'>
      <div className="flex-[42%] ">
        <h1 className='font-poppins font-semibold font-ss:text-[72px] text-[40px] text-white ss:leading-[75px] leading-[60px] mb-8'>
          You do the business,
          we’ll handle the money. 
        </h1>
        <p  className={`${styles.paragraph} mb-8  leading-[30.8px] max-w-[470px]`}>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <div className=" mb-5 text-primary bg-blue-gradient rounded-xl cursor-pointer flex justify-center items-center w-[160px] h-14 font-poppins font-semibold ">
          Get Started
        </div>
      </div>
      <div className="flex-[42%] bl-45 right flex flex-col justify-between">
        {
          features.map((feature, _index) => {
            return (
              <div key={feature.id} className="flex justify-center items-center  rounded-2xl my-8 p-5 cursor-pointer feature-card">
                <div className=" left bg-dimBlue flex justify-center items-center rounded-full sm:w-[70px] sm:h-[70px] w-[45px] h-[45px]">
                  <img src={feature.icon} alt="" />
                </div>
                <div className="flex-1 right ml-3">
                  <h4 className='text-white font-poppins font-semibold'>{feature.title}</h4>
                  <p className='text-dimWhite  font-poppins font-normal ss:leading-[24px] leading-[19px] '>{ feature.content}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Business
