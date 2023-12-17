import './Projects.css'

function Projects(props) {

    let data = props.data.filter(item => item.id === 2)[0];

    let projects = data.content.map((project, index) =>
        <div className="project" key={index}>
            <h5><a href={project.links[1]} target="_blank" rel="noreferrer">{project.name}</a></h5>
            <p>{project.description}</p>
            <p><span>Tools: </span>{project.tools}</p>
            <div className = "projects-links-wrapper">
                <a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
                {project.links.live && 
                <>
                    <span> | </span>
                    <a href={project.links.live} target="_blank" rel="noreferrer">Live</a>
                </>
                }
            </div>
        </div>)

    return (
        <section id = {data.title.toLowerCase()}>
            <h2 className="section-heading">{data.heading}</h2>
            <div className = "project-wrapper">{projects}</div>
        </section>
    )
}

export default Projects;
