import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard() {
    return (
        <div className="projectCard">
            <h3 className="title">项目AAA</h3>
            <img src={require("../images/main.jpeg")} className="cardImage"></img>
            {/* <p className="desc">xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p> */}
        </div>
    );
}

export default ProjectCard;