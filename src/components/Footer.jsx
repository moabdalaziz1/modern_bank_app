import { logo } from "../assets"
import styles from "../style"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
  <footer className={`${styles.flexCenter} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt='hoobank'
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[312px] mt-[30px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {
          footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px] font-poppins">
              <h4 className="text-white text-[18px]">
                {footerLink.title}
              </h4>
              <ul className="mt-6">
                {
                  footerLink.links.map((link, index) => (
                    <li 
                      key={link.name} 
                      className={`text-[16px] text-dimWhite
                      ${index !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0'}`}
                    >
                      <a href={link.link}>
                        {link.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>

    <div className="border-t border-gray-800 w-full"></div>

    <div className="flex flex-row justify-between flex-wrap w-full">
      <div className='text-[16px] text-dimWhite pt-[30px]'>
        <span className="mr-3">Copyright &copy;</span>
        2021 HooBank. All Rights Reserved.
      </div>
      <div className="flex py-[30px]">
        {
          socialMedia.map((item) => (
            <a 
              href={item.link}
              key={item.id}
              className='mr-[30px]'
            >
              <img src={item.icon} alt='socialMedia' />
            </a>
          ))
        }
      </div>
    </div>
  </footer>
)


export default Footer