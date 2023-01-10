import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard( { img_url, project_url, title, desc } ) {
    return (
        <div className="project_card" onClick={()=> {
            window.open(project_url, '_blank');
        }}>
            <img src={img_url} className="card_image" alt='img'></img>
            <div className="text_area">
                <div className="text_title">{title}</div>
                <p className="desc">{desc}</p>
            </div>
        </div>
    );
}

export default ProjectCard;