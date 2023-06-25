import css from './Hero.module.css'

export default function Hero() {
    const setClass = (classes: string[]) => {
        return classes.map((className) => css[className]).join(" ");
    };

    return (
        <>
            <h1 className={setClass(["intro"])}>Hi! My name is <span className={css.name}>Daniel</span></h1>
            <h2>I'm a... </h2>
        </>
    )
}