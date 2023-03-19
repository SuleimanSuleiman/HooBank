import styles from "./style"
import { Billing,Business,CTA,CardDeal,Clients,Footer,Hero,Navbar,Stats,Testimonials} from "./Components/index"
import CTA_tow from "./Components/CTA2"
import SocialMedia from "./Components/SocialMedia"

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Hero />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <CTA_tow />
          <Footer />
          <SocialMedia />
          </div>
      </div>
    </div>
  )
}

export default App
