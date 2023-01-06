import React from "react";
import "../styles/Intro.css";


function Intro({loc_id, main, desc, character}) {
    return (
        <div id={loc_id} className='area'>
            <div className="content">
                <h2 className="main">{main}</h2>
                <p className="character">{character}</p>
                <p className="desc">{desc}</p>

            </div>
            {/* <img src={img_src} className="bg_image"></img> */}
        </div>
    )
}

export default Intro;