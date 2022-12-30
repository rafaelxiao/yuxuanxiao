import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard() {
    return (
        <div className="project_card">
            <img src={require("../images/main.jpeg")} className="card_image"></img>
            <h3 className="title">Project</h3>
            <div className="desc"><p>this is a sample project that is still in development</p></div>
        </div>
    );
}

export default ProjectCard;