import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"


const Testimonials = () => {
  return (
    <section id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >

      <div 
        className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue_gradient"
      />

      <div
        className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
      >
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
      </div>

      <div
        className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
      >
        {feedback.map((card) =>(
          <FeedbackCard key={card.id} {...card} />
        ))}

      </div>
    </section>
  )
}

export default Testimonials
