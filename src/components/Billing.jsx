import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { DefaultAnimationContext } from "../App";
import { useContext } from "react";

const Billing = () => {
  
  const { 
    initial, 
    initialImg, 
    whileInView, 
    transition,
    transitionImg, 
  } = useContext(DefaultAnimationContext);

  return (
    <section id="product" className={layout.sectionReverse}>
      <motion.div 
        className={layout.sectionImgReverse}
        initial={initialImg}
        whileInView={whileInView}
        transition={transitionImg}
      >
        <img 
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* بتخلي الصفحه تحميلها تقيل */}
        {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" /> */}
      </motion.div>

      <div className={layout.sectionInfo}>
        <motion.h2 
          className={styles.heading2}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </motion.h2>
        <motion.p 
          className={`${styles.paragraph} max-width-[470px] mt-5`}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </motion.p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img 
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" 
          />
          <img 
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer" 
          />
        </div>
      </div>
    </section>
  )
}

export default Billing