import styles, { layout } from "../style";
import { FeedbackCard } from './index'
import { feedback } from '../constants'

const Testimonials = () => (
  <section id="clients" className="flex flex-col">
    <div className="flex items-center md:flex-nowrap flex-wrap">
      <h2 className={styles.heading2}>
        What people are <br className="sm:block hidden" />
        saying about us
      </h2>
      <p className={`${styles.paragraph} max-w-[450px] md:mt-0 mt-5`}>
        Everything you need to accept card payments 
        and grow your business anywhere on the planet.
      </p>
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


export default Testimonials