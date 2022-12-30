import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects( {id, title} ) {
    return (
        <div className="projects" id={id}>
            <div className="projects_title">{title}</div>
            <div className="projects_panel">
                <ProjectCard />

            </div>
        </div>

    );
}

export default Projects;