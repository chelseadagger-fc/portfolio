import css from './Techstack.module.css'
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiMongodb} from 'react-icons/si'

export default function Techstack() {
const bigIcon = "6.5rem";
const smallIcon = "5rem";

    return (
        <div className={css.techstack}>
            <div className={css.main}>
                <div className={css.top}>
                    <div className={css.tech}>
                        <SiTypescript
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <p>Typescript</p>
                    </div>
                    <div className={css.tech}>
                        <SiReact
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />  
                        <p>React.js</p>
                    </div>
                    <div className={css.tech}> 
                        <SiNodedotjs
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <p>Node.js</p>
                    </div>
                    <div className={css.tech}>
                        <SiMongodb
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <p>MongoDB</p>
                    </div>
                    <div className={css.tech}>
                        <SiExpress
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <p>Express.js</p>
                    </div>
                </div>
                <div className={css.bottom}>
                    <div className={css.tech}>
                        <SiHtml5
                            size={smallIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <p>HTML 5</p>
                    </div>
                    <div className={css.tech}>
                        <SiJavascript
                            size={smallIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} />
                        <p>Javascript</p>
                    </div>
                    <div className={css.tech}>
                        <SiCss3
                            size={smallIcon}
                            onMouseOver={({target})=>target.style.color="#FF6000"}
                            onMouseOut={({target})=>target.style.color="antiquewhite"} /> 
                        <p>CSS 3</p>
                    </div>
                </div>

            </div>
        </div>
    )
}