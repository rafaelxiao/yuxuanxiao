import React from "react";
import "../styles/Intro.css";
import { Link } from "react-router-dom";


function Intro({loc_id, main, desc, character, img_src, contact, eco_watcher}) {
    return (
        <div id={loc_id} className='area'>
            <img className="intro_background" src={img_src} alt='main background image'/>
            <div className="content">
                <h2 className="main">{main}</h2>
                <p className="character">{character}</p>
                <p className="desc">{desc}</p>
                <div className="action_button">
                    <Link to="/"><button>{contact}</button></Link>
                    <Link to="/economywatcher"><button>{eco_watcher}</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Intro;