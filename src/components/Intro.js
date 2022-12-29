import React from "react";
import "../styles/Intro.css"


function Intro({loc_id, main, desc, welcome, character, img_src}) {
    return (
        <div id={loc_id} className='area'>
            <div className="content">
                <p className="welcome">{welcome}</p>
                <h2 className="main">{main}</h2>
                <p className="character">{character}</p>
                <p className="desc">{desc}</p>
            </div>
            <img src={img_src} className="image"></img>
            {/* <div id={loc_id} className='anchor'></div> */}
        </div>
    )
}

export default Intro;