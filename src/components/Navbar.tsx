import css from './Navbar.module.css'
import {PiMoonStarsBold} from 'react-icons/pi'

export default function Navbar() {
    const setClass = (classes: string[]) => {
        return classes.map((className) => css[className]).join(" ");
    };

    return (
        <nav>
            <h3 className={setClass(["red", "big"])}>daniel-aldridge.dev <span className={css.smaller}>/</span></h3>
            <div className={setClass(["links"])}>
                <p>About</p>
                <p>Projects</p>
                <p>Blog</p>
                <p>Contact</p>
                <PiMoonStarsBold
                    size="2rem"
                />
            </div>
        </nav>
    )
}