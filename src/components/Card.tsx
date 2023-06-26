import css from './Card.module.css'

export default function Card(props) {
    return (
        <>
            <div className={css.main}>
                <img className={css.preview} src={"../../public/images/" + props.img} height="300px" />
                <div className="info">
                    <div className="info--top">
                        <span className={css.title}>{props.title}</span>
                        <p className="description">{props.desc}</p>
                    </div>
                    <div className="info--bottom">
                        <p>Built with:</p>
                        <div className="info--bottom-technologies">
                            names/icons
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}