import css from './Projects.module.css'
import Card from './Card'
import projectData from '../projectData'

export default function Projects() {
    const projectCards = projectData.map(data => {
        return <Card 
                key={data.id}
                title={data.title}
                desc={data.desc}
                />
    })

    return (
        <section>
            <h1 className={css.title}>Projects</h1>
            <div className-="project-list">
                {projectCards}
            </div>
        </section>
    )
}