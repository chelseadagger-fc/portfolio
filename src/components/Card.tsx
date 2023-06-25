import css from './Card.module.css'

export default function Card() {
    return (
        <>
            <div className="main">
                {/* img */}
                <div className="info">
                    <div className="info--top">
                        <span className="title"></span>
                        <p className="description"></p>
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