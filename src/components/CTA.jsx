import styles from '../style'
import { Button } from './index'

const CTA = () => (
  <div className='bg-black-gradient-2 sm:py-[72px] sm:px-[97px] 
    xs:py-[42px] py-[32px] xs:px-[57px] px-[22px]  
    rounded-[20px] flex justify-between items-center flex-wrap mb-[82px]'>
    <div>
      <h4 className={`${styles.heading2} mb-6`}>
        Let’s try our service now!
      </h4>
      <p className={`${styles.paragraph} max-w-[445px]`}>
        Everything you need to accept card payments and 
        grow your business anywhere on the planet.
      </p>
    </div>
    <Button styles='mt-6'/>
  </div>
)


export default CTA