import styles from '../style'
import { Button } from './index'
import { motion } from 'framer-motion'
import { DefaultAnimationContext } from "../App";
import { useContext } from "react";

const CTA = () => {

  const { 
    initial, 
    whileInView, 
    transition,
  } = useContext(DefaultAnimationContext);

  return (
    <div className='bg-black-gradient-2 sm:py-[72px] sm:px-[97px] 
      xs:py-[42px] py-[32px] xs:px-[57px] px-[22px]  
      rounded-[20px] flex justify-between items-center flex-wrap mb-[82px]'>
      <div>
        <motion.h4 
          className={`${styles.heading2} mb-6`}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          Let’s try our service now!
        </motion.h4>
        <motion.p 
          className={`${styles.paragraph} max-w-[445px]`}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          Everything you need to accept card payments and 
          grow your business anywhere on the planet.
        </motion.p>
      </div>
      <Button styles='mt-6'/>
    </div>
  )
}


export default CTA