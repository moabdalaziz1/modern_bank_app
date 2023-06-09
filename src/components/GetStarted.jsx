import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <motion.div 
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
      bg-blue-gradient p-[2px] cursor-pointer sm:mt-0 mt-8`}
    initial={{ scale: 0, }}
    whileInView={{ scale: 1, }}
    transition={{ duration: 2, type: 'spring', bounce: 0.35 }}
  >

    <div 
      className={`${styles.flexCenter} flex-col bg-primary 
        w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart}`}>
        <p 
          className="text-gradient font-poppins font-medium
            text-[18px] leading-[23px] mr-2"
        >
          Get
        </p>
        <img 
          src={arrowUp} 
          alt="arrowUp"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p 
        className="text-gradient font-poppins font-medium 
          text-[18px] leading-[23px]"
      >
        Started
      </p>
    </div>

  </motion.div>
)


export default GetStarted