import css from './Contact.module.css'
import { FaGithub, FaTwitterSquare, FaLinkedin, FaDiscord } from 'react-icons/fa';


export default function Contact() {
    return (
        <section>
            <h1 className={css.head}>Let's get in touch!</h1>
            <h3>Contact me at  <a className={css.email}>hello@daniel-aldridge.dev</a></h3>
            <h3>or find me at:</h3>
            <div className={css.portals}>
                <FaGithub
                    size="2rem"
                    onMouseOver={({target})=>target.style.color="#FF6000"}
                    onMouseOut={({target})=>target.style.color="antiquewhite"} />
                <FaTwitterSquare
                    size="2rem"
                    onMouseOver={({target})=>target.style.color="#FF6000"}
                    onMouseOut={({target})=>target.style.color="antiquewhite"} />
                <FaLinkedin
                    size="2rem"
                    onMouseOver={({target})=>target.style.color="#FF6000"}
                    onMouseOut={({target})=>target.style.color="antiquewhite"} />
                <FaDiscord
                    size="2rem"
                    onMouseOver={({target})=>target.style.color="#FF6000"}
                    onMouseOut={({target})=>target.style.color="antiquewhite"} />
            </div>
        </section>
    )
}
