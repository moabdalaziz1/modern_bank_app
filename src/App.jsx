import styles from './style';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, 
  Clients, CTA ,Footer } from './components/index'
import { createContext } from 'react';

export const DefaultAnimationContext = createContext();

const App = () => { 
  // The Value Of The DefaultAnimationContext
  const animation = {
    initial: { opacity: 0, y: '100px' },
    initialSecondary: { opacity: 0, y: '-100px' },
    initialImg: { opacity: 0, },
    whileInView: { opacity: 1, y: '0' },
    transition: { duration: 0.8, },
    transitionImg: { duration: 2, },
  }

  return (
    <div className='bg-primary w-full overflow-hidden xl:px-0 sm:px-16 px-6'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <DefaultAnimationContext.Provider value={animation}>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </DefaultAnimationContext.Provider>
    </div>
  )
}


export default App