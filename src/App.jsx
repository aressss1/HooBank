import { Billing, CardDeal, Clients, Navbar, Stats, Business, CTA, Testimonials, Footer, Hero, } from "./components"
import styles from "./style"

const App = () => {
  return (
    <div className="bg-primary  w-full overflow-hidden" >

      {/* Navbar */}
      <div
        className={`${styles.paddingX} ${styles.flexCenter} `}
      >

        <div
          className={`${styles.boxWidth} `}
        >
          <Navbar />
        </div>

      </div>

      {/* Hero Section */}
      <div
        className={`bg-primary ${styles.flexStart}`}
      >
        <div
          className={`${styles.boxWidth}`}
        >
          <Hero />
        </div>

      </div>

      {/* Other Section */}
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div
          className={`${styles.boxWidth}`}
        >
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

    </div>
  )
}

export default App

