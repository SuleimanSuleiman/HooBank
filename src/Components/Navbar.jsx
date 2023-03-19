import { useState } from "react";
import { logo, menu, close} from "../assets";
import { navLinks } from "../constants/index";
import styles from "../style";


function Navbar() {
  const [navKnow, setNavKnow] = useState("home")
  const [open, setOpen] = useState(false)
  
  const HandleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav className={` w-full flex justify-between items-center navbar  py-6 text-white `}>
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
        <ul className="list-none hidden justify-end items-center sm:flex flex-1">
          {
            navLinks.map((nav, index) => {
              return (
                <li key={nav.id} onClick={()=> setNavKnow(nav.id)} className={`
                font-normal font-poppins cursor-pointer text-[16px] leading-[20.8px]
                ${navKnow === nav.id?'text-white':'text-dimWhite'}
                ${navLinks.length-1 === index?'mr-0':'mr-10'}
                `}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )
            })
          }
      </ul>
      <div className="flex sm:hidden cursor-pointer " onClick={HandleMenu}>
        {open ? <img src={close} alt="" className="w-[30px] h-[30px] object-contain" />:<img src={menu} alt="" className="w-[30px] h-[30px] object-contain" />}
      </div>
      {
        open &&
        <div className="bg-black-gradient absolute right-7 top-16 w-[120px] rounded-md px-6 py-4 sidebar">
          <ul className="list-none flex flex-col  items-center sm:hidden flex-1">
          {
            navLinks.map((nav, index) => {
              return (
                <li key={nav.id} onClick={()=> setNavKnow(nav.id)} className={`
                font-normal font-poppins cursor-pointer text-[16px] leading-[20.8px]
                ${navKnow === nav.id?'text-white':'text-dimWhite'}
                ${navLinks.length-1 === index?'mb-0':'mb-2'}
                `}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
      }
    </nav>
  )
}

export default Navbar
