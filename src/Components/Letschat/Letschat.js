import Container from '../Container/Container'
// import Cta from '../CTA/Cta'
import CtaContact from '../CTAContact/CtaContact'
import styles from './Letschat.module.scss'

function Letschat() {
  return (
    <div className={styles.lc}>
        <Container>
            <div className={styles.lc__wrapper}>
                <div className={styles.lc__title}>
                    <h2>Let us have <br/>a chat</h2>
                </div>

                <div className={styles.lc__content}>
                    <p>Let us know how we can help you.</p>
                    <p>in your next theatre, cinema, corporate meeting alls and much more</p>
                    {/* <Cta ctaText="Let's meet"/> */}
                    <CtaContact ctaText="Let's Meet"/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Letschat