import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from './index'
import { motion } from "framer-motion";
import { DefaultAnimationContext } from "../App";
import { useContext } from "react";

const FeatureCard = ({ icon, title, content, index }) => {

  const { 
    initial, 
    whileInView, 
    transition, 
  } = useContext(DefaultAnimationContext);

  return (
    <motion.div 
      className={`flex flex-row xs:p-6 p-4 rounded-[20px]
      ${index !== features.length -1 ? 'mb-6' : 'mb-0'} feature-card`}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      <div className={`xs:w-[55px] xs:h-[55px] w-[45px] h-[45px] 
      rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img 
          src={icon}
          alt="icon"
          className="w-[50%] h-[50%] object-contain"  
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold
        text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal
        text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </motion.div>
  )
}

const Business = () => {

  const { 
    initial, 
    whileInView, 
    transition, 
  } = useContext(DefaultAnimationContext);

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2 
          className={styles.heading2}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </motion.h2>
        <motion.p 
          className={`${styles.paragraph} max-w-[470px] mt-6`}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          With the right credit card, you can improve your financial life
          by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.
        </motion.p>
        <Button styles='mt-6' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section>
  )
}


export default Business