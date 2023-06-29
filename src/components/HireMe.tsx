import css from './HireMe.module.css'

export default function HireMe() {
    return (
        <div className={css.hireme}>
            <h1>Why hire me?</h1>
            <div className={css.main}>
                <div className={css.card}>

                    <h2>Communicative</h2>
                </div>
                <div className={css.card}>

                    <h2>Adaptive</h2>
                </div>
                <div className={css.card}>

                    <h2>Adaptive</h2>
                </div>
            </div>
        </div>
    )
}