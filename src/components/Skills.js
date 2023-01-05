import React from "react";
import "../styles/Skills.css"


function Skills({id, title, skills}) {
    const listItem = skills.map((skill) => {
        return (
            <div>
                <div className="category">{skill.category}</div>
                <div className="desc">{skill.desc}</div>
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