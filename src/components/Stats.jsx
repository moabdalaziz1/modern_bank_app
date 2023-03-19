import { stats } from "../constants"
import styles from "../style";
import { motion } from "framer-motion";
import { DefaultAnimationContext } from "../App";
import { useContext } from "react";


const Stats = () => {

  const { 
    initial, 
    whileInView, 
    transition,
  } = useContext(DefaultAnimationContext);

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className={`flex-auto flex items-center justify-start my-3`}
            initial={initial}
            whileInView={whileInView}
            transition={transition}
          >
            <h4
              className="text-white font-poppins font-semibold xs:text-[40px] text-[30px]
                xs:leading-[53px] leading-[43px]"
            >{stat.value}</h4>
            <p
              className="text-gradient font-poppins xs:text-[20px] text-[15px]
                xs:leading-[27px] leading-[21px] uppercase ml-3"
            >{stat.title}</p>
          </motion.div>
        ))
      }
    </section>
  )
}


export default Stats