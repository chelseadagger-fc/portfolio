import css from './Techstack.module.css'
import { SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiMongodb} from 'react-icons/si'

export default function Techstack() {
const bigIcon = "6.5rem";
const smallIcon = "5rem";
const mouseOverColor = "#FF6000";
const mouseAwayColor = "antiquewhite";


    return (
        <div className={css.techstack}>
            <div className={css.main}>
                {/* <h2>My technologies:</h2> */}
                <div className={css.top}>
                    <div className={css.tech}>
                        <SiTypescript
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />
                        <p>Typescript</p>
                    </div>
                    <div className={css.tech}>
                        <SiReact
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />  
                        <p>React</p>
                    </div>
                    <div className={css.tech}> 
                        <SiNodedotjs
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />
                        <p>Node.js</p>
                    </div>
                    <div className={css.tech}>
                        <SiMongodb
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />
                        <p>MongoDB</p>
                    </div>
                    <div className={css.tech}>
                        <SiExpress
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />
                        <p>Express.js</p>
                    </div>
                    <div className={css.tech}>
                        <SiNextdotjs
                            size={bigIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />
                        <p>Next.js</p>
                    </div>
                </div>
                <div className={css.bottom}>
                    <div className={css.tech}>
                        <SiHtml5
                            size={smallIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />
                        <p>HTML 5</p>
                    </div>
                    <div className={css.tech}>
                        <SiJavascript
                            size={smallIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} />
                        <p>Javascript</p>
                    </div>
                    <div className={css.tech}>
                        <SiCss3
                            size={smallIcon}
                            onMouseOver={({target})=>target.style.color=mouseOverColor}
                            onMouseOut={({target})=>target.style.color=mouseAwayColor} /> 
                        <p>CSS 3</p>
                    </div>
                </div>

            </div>
        </div>
    )
}