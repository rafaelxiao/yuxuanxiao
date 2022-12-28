import React from "react";
import "../styles/Intro.css"


function Intro({loc_id, main, desc, img_src}) {
    return (
        <div className='area'>
            <div className="content">
                <h1>{main}</h1>
                <p>{desc}</p>
            </div>
            <img src={img_src} className="image"></img>
            <div id={loc_id} className='anchor'></div>
        </div>
    )
}

export default Intro;