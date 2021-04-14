import { Link } from 'react-router-dom'
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
                <FontAwesomeIcon icon={faGithub} /> 
                <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
        </div>)
    return (
        <section id = {data.title} style = {{height: "900px"}} >
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            {<div className = "project-wrapper">{projects}</div>}
        </section>
    )
}

export default Projects;
