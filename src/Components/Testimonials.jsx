import React from 'react'
import styles from '../style'

function Testimonials() {
  return (
    <section className='flex sm:flex-row flex-col justify-between items-center py-[120px]'>
        <h1 className='font-poppins font-semibold xs:text-[52px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] '>
            What People are
            saying about us
      </h1>
        <p  className={` ${styles.paragraph}  text-[18px] leading-[30.8px]  `}> 
            Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
    </section>
  )
}

export default Testimonials
