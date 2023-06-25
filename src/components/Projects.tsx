import css from './Projects.module.css'
import Card from './Card'
import projectData from '../projectData'

export default function Projects() {
    const projectCards = projectData.map(card => {
        return <Card 
                key={card.id}
                card={card}
                />
    })

    return (
        <section>
            <h1>Projects</h1>
            <div className-="project-list">
                {projectCards}
            </div>
        </section>
    )
}