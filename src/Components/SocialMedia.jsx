import {socialMedia} from "../constants/index"

function SocialMedia() {
  return (
      <section className="flex sm:flex-row flex-col justify-between items-center mb-12 border-t-[1px] border-t-[#3F3E45] pt-4">
         <p className="text-white leading-9 text-center sm:text-start font-poppins text-[18px] font-medium sm:w-[60%] w-full ">
           Copyright &#x24B8; 2022 HooBank. All Rights Reserved.
          </p>
          <ul className='list-none flex flex-row sm:mt-0 mt-4'>
              {
                  socialMedia.map((element, _index) => {
                      return ( 
                          <li key={element.id} className="px-3">
                              <img src={element.icon} className="cursor-pointer" alt="" />
                          </li>
                      )
                  })
              }
          </ul>
    </section>
  )
}

export default SocialMedia
