import css from './Contact.module.css'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { PiGithubLogoFill, PiLinkedinLogoFill } from 'react-icons/pi';


export default function Contact() {
    return (
        <div className={css.contact}>
            <div className={css.main}>
                <h1 className={css.head}>Let's get in touch!</h1>
                <div className={css.content}>
                    <h3>Contact me at  <a className={css.email}>hello@daniel-aldridge.dev</a> </h3>
                    <h3>or find me at:</h3>
                    <div className={css.portals}>
                        <PiGithubLogoFill
                            size="2.4rem"
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <FaTwitter
                            size="2.4rem"
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <PiLinkedinLogoFill
                            size="2.4rem"
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <FaDiscord
                            size="2.4rem"
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
