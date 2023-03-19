import { arrowUp, discount, robot } from "../assets"
import styles from "../style"
import GetStarted from "./GetStarted"
  

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col items-center w-full h-full sm:py-16 py-6`}>
      <div className="bg-primary w-full h-full flex flex-col justify-center items-start sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex  xs:flex-row flex-col justify-start items-center w-full">
          <h1 className="flex-1 xs:block flex flex-col items-center font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
            <div className="w-full h-full bg-primary rounded-full flex flex-col justify-center items-center">
              <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                  <span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
              </div>
              <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className="text-gradient">Started</span>
              </p>
            </div>
          </div>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className=" w-full h-full flex justify-center md:my-0 my-10 items-center relative">
        <img src={robot} alt="" className="w-[100%] h-[100%] z-50" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero

