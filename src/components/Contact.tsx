import css from './Contact.module.css'
import { FaGithub, FaTwitterSquare, FaLinkedin, FaDiscord } from 'react-icons/fa';


export default function Contact() {
    return (
        <section>
            <h1 className={css.head}>Let's get in touch!</h1>
            <h3>Contact me at <span className={css.highlight}>hello@daniel-aldridge.dev</span></h3>
            <h3>or find me at:</h3>
            <div className={css.portals}>
                <FaGithub
                    size="2rem" />
                <FaTwitterSquare
                    size="2rem" />
                <FaLinkedin
                    size="2rem" />
                <FaDiscord
                    size="2rem" />
            </div>
        </section>
    )
}
