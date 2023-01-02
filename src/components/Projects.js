import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects( {id, title, projects} ) {
    return (
        <div className="projects" id={id}>
            <div className="projects_title">{title}</div>
            <div className="projects_panel">
                { projects.map((project, index) => <ProjectCard 
                title={project.title} 
                desc={project.desc} 
                img_url={project.img_url} 
                project_url={project.project_url}
                key={index}/>) }
            </div>
        </div>

    );
}

export default Projects;