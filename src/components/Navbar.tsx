import css from './Navbar.module.css'

export default function Navbar() {
    const setClass = (classes: string[]) => {
        return classes.map((className) => css[className]).join(" ");
    };

    return (
        <nav>
            <h1 className={setClass(["red", "big"])}>Navbar!</h1>
            <div className={setClass(["links"])}>
                <p>About</p>
                <p>Works</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}