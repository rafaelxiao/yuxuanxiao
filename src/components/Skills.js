import React from "react";
import "../styles/Skills.css"


function Skills({id, title, skills}) {
    const listItem = skills.map((skill, index) => {
        return (
            <div key={index} class='skill_section'>
                <img className="icon_img" src={skill.icon_url}></img>
                <div className="text_area">
                    <div className="category">{skill.category}</div>
                    <div className="desc">{skill.desc}</div>
                </div>
            </div>
        );
    })
    return (
        <div id={id} className='skills'>
            <div className="title">{title}</div>
            {listItem}
        </div>
    )
}

export default Skills;