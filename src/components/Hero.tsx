import css from './Hero.module.css'
import daniel from '../../public/images/daniel-popart.png'
import Typist from 'react-typist-component';
import { useEffect, useState } from 'react';


export default function Hero() {
    const setClass = (classes: string[]) => {
        return classes.map((className) => css[className]).join(" ");
    };

    const [count, setCount] = useState(1);

    const wordScroll = [
        'full-stack developer',
        'front-end designer',
        'back-end engineer',
        'freelancer',
      ];

      useEffect(() => {
        setCount(1);
      }, [count]);

    return (
        <section>
            <div className={css.head}>
                <img className={css.portrait} src={daniel} />
                <div>
                    <h1 className={css.intro}>Hi! I'm <span className={css.highlight}>Daniel</span> 👋</h1>
                        <div className={css.typer}>
                            <span className={css.spaced}>and I'm a </span>{count ? (<Typist onTypingDone={() => setCount(0)}>
                            {wordScroll.map((word) => [
                                <>
                                    <span className={setClass(["highlight", "blinking-cursor"])}>{word}</span>
                                    <Typist.Delay ms={1800} />
                                    <Typist.Backspace count={word.length} />
                                </>
                            ])}
                            </Typist>) : (
                                ''
                            )}
                        </div>

                </div>
            </div>
            <p className={css.description}>I'm a full-stack web developer who loves to craft beautiful and intuitive web solutions.</p>

        </section>
    )
}