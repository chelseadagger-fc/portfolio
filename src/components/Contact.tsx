import css from './Contact.module.css'
import { FaGithub, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';


export default function Contact() {
    return (
        <section>
            <h1>Contact me at <span className={css.highlight}>hello@daniel-aldridge.dev</span></h1>
            <div className={css.portals}>
                <FaGithub
                    size="2rem" />
                <FaTwitterSquare
                    size="2rem" />
                <FaLinkedin
                    size="2rem" />
            </div>
        </section>
    )
}
