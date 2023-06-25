import css from './Navbar.module.css'

export default function Navbar() {
    const setClass = (classes: string[]) => {
        return classes.map((className) => css[className]).join(" ");
    };

    return (
        <nav>
            <h3 className={setClass(["red", "big"])}>daniel-aldridge.dev <span className={css.smaller}>/</span></h3>
            <div className={setClass(["links"])}>
                <p>About</p>
                <p>Works</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}