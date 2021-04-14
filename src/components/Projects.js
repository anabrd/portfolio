import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects(props) {

    let data = props.data.filter(item => item.id == 2)[0];

    let projects = data.content.map(project =>
        <div>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p>{project.tools}</p>
            <div className = "projects-links-wrapper">
                <a href={project.links[0]} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href={project.links[1]} target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </div>
        </div>)

    return (
        <section id = {data.title}>
            <h2>{data.heading}</h2>
            <p>{data.description}</p>
            <div className = "project-wrapper">{projects}</div>
        </section>
    )
}

export default Projects;
