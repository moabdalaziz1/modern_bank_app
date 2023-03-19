import { quotes } from "../assets";
import { feedback } from '../constants'
import { motion } from "framer-motion";
import { DefaultAnimationContext } from "../App";
import { useContext } from "react";

const FeedbackCard = ({ item, index }) => {

  const { 
    initial, 
    whileInView, 
    transition,
  } = useContext(DefaultAnimationContext);

  return (
    <motion.div className={`feedback-card rounded-[20px] xs:py-[60px] xs:px-[40px] py-[30px] px-[30px]
      flex flex-col font-poppins ${index !== feedback.length - 1 ? 'mb-5' : 'mb-0'} md:border-0 border`}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px]" />
      <p className='text-white text-[18px] font-normal 
        max-w-[290px] sm:min-h-[128px] mt-[40px] xs:leading-[32px] leading-[28px]'>
        {item.content}
      </p>
      <div className="flex justify-start items-center mt-6">
        <img 
          src={item.img}
          alt="person"
          className="w-[48px] h-[48px] mr-4"
        />
        <div>
          <h4 className="text-[18px] leading-[32px] text-white">{item.name}</h4>
          <p className="text-[14px] leading-[24px] text-white opacity-50">{item.title}</p>
        </div>
      </div>
    </motion.div>
  )
}
export default FeedbackCard