import css from './Card.module.css'
import { RiBootstrapFill, RiJavascriptFill } from 'react-icons/ri'

export default function Card(props) {
    return (
        <>
            <div className={css.main}>
                <img className={css.preview} src={"/images/" + props.img} height="300px" />
                <div className={css.info}>
                    <div className="info--top">
                        <span className={css.title}>{props.title}</span>
                        <p className={css.description}>{props.desc}</p>
                    </div>
                    <div className={css.bottom}>
                        <p>Built with:</p>
                        <div className={css.technologies}>
                            <div className={css.techpairs}>
                                <RiJavascriptFill
                                    size="1.5rem" />
                                <p>Javascript</p>
                            </div>
                            <div className={css.techpairs}>
                                <RiBootstrapFill
                                    size="1.5rem" />
                                <p>Bootstrap</p>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}