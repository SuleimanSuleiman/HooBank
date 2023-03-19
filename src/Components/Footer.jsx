import { logo } from "../assets"
import {footerLinks} from "../constants/index"

function Footer() {
  return (
    <section className='flex sm:flex-row flex-col flex-wrap justify-between items-center  my-10'>
      <div className="basis-2/5 w-full h-full flex flex-col justify-center items-start sm:mb-0 mb-8 ">
        <img src={logo} alt="" className="mb-2 md:w-[270px] w-[170px] md:h-[75px] h-[45px]"/>
        <p className="text-dimWhite leading-9 font-poppins font-medium  sm:w-[60%] w-full">A new way to make the payments easy, reliable and secure.</p>
      </div>
        {
        footerLinks.map((group, index) => {
          return (
              <div key={index} className="sm:basis-1/5 basis-1/2  flex flex-col justify-center w-full h-full ">
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-5">{group.title}</h4>
                <ul className="list-none flex flex-col justify-center sm:mb-0 mb-2">
                  {
                    group.links.map((nav, _index) => {
                      return (
                        <li key={nav.name} className="font-poppins font-normal text-dimWhite my-2">
                          <a  href={``}>
                            {nav.name}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> 
            )
          })
      }
      
    </section>
  )
}

export default Footer
