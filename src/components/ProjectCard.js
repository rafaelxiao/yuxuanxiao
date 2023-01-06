import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard( { img_url, project_url, title, desc } ) {
    return (
        <div className="project_card">
            <img src={img_url} className="card_image" alt='img'></img>
            <div className="text_area">
                <p className="desc">{desc}</p>
                <button className="look" onClick={()=> {
                    window.open(project_url, '_blank');
                }}>{title}</button>
            </div>
        </div>
    );
}

export default ProjectCard;