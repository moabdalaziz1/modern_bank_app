import { useState } from "react";

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/index'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      {/* The Logo Of The Website */}
      <img 
        src={logo}
        alt='hoobank'
        className="w-[124px] h-[32px]"
      />

      {/* The Navbar For The Medium and Large Screens */}
      <ul 
        className="list-none sm:flex hidden justify-end items-center flex-1"
      >
        {
          navLinks.map((navItem, index) => (
            <li
              key={navItem.id}
              className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                text-white
                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              <a href={`#${navItem.id}`}>
                {navItem.title}
              </a>
            </li>
          ))
        }
      </ul>
      
      {/* The Sidebar For The Small Screens */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu}
          alt='menu'
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prevState) => !prevState)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0 
            mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20`}
        >
        <ul 
          className="list-none flex flex-col justify-end items-center flex-1"
        >
          {
            navLinks.map((navItem, index) => (
              <li
                key={navItem.id}
                className={`font-poppins
                  font-normal
                  cursor-pointer
                  text-[16px]
                  text-white
                  ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${navItem.id}`}>
                  {navItem.title}
                </a>
              </li>
            ))
          }
        </ul>
        </div>
      </div>

    </nav>   
  )
}

export default Navbar