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
                    <h1 className={setClass(["intro"])}>Hi! My name is <span className={css.name}>Daniel</span></h1>
                    {/* <h2 className={css.subtitle}>(scrolling title) </h2> */}
                    {/* <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}>
                        full-stack developer
                        <Typist.Delay ms={1500} />
                        <Typist.Backspace count={20} />
                        <Typist.Delay ms={1500} />
                        react component
                        </Typist> */}
                        <div className={css.typer}>
                            <span>I'm a...  </span>{count ? (<Typist onTypingDone={() => setCount(0)}>
                            {wordScroll.map((word) => [
                                <>
                                    <span>{word}</span>
                                    <Typist.Delay ms={1600} />
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