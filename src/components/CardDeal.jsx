import styles, { layout } from "../style";
import { card } from "../assets";
import { Button } from './index'
import { motion } from "framer-motion";
import { DefaultAnimationContext } from "../App";
import { useContext } from "react";

const CardDeal = () => {

  const { 
    initial, 
    initialImg, 
    whileInView, 
    transition,
    transitionImg, 
  } = useContext(DefaultAnimationContext);

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2 
          className={styles.heading2}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </motion.h2>
        <motion.p 
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. 
          Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </motion.p>
        <Button styles='mt-6' />
      </div>

      <motion.div 
        className={layout.sectionImg}
        initial={initialImg}
        whileInView={whileInView}
        transition={transitionImg}
      >
        <img 
          src={card}
          alt="card"
          className='w-[100%] h-[100%]'
        />
      </motion.div>
    </section>
  )
}

export default CardDeal