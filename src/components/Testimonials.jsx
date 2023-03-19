import styles, { layout } from "../style";
import { FeedbackCard } from './index'
import { feedback } from '../constants'
import { motion } from "framer-motion";
import { DefaultAnimationContext } from "../App";
import { useContext } from "react";

const Testimonials = () => {

  const { 
    initial, 
    whileInView, 
    transition,
  } = useContext(DefaultAnimationContext);

  return (
    <section id="clients" className="flex flex-col">
      <div className="flex items-center md:flex-nowrap flex-wrap">
        <motion.h2 
          className={styles.heading2}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          What people are <br className="sm:block hidden" />
          saying about us
        </motion.h2>
        <motion.p 
          className={`${styles.paragraph} max-w-[450px] md:mt-0 mt-5`}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          Everything you need to accept card payments 
          and grow your business anywhere on the planet.
        </motion.p>
      </div>

      <div className="flex flex-1 md:flex-nowrap flex-wrap justify-between mt-[80px]">
        {
          feedback.map((item, index) => (
            <FeedbackCard key={item.id} item={item} index={index} />
          ))
        }
      </div>
    </section>
  )
}


export default Testimonials