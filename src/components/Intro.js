import React, { useLayoutEffect } from "react";
import "../styles/Intro.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Intro({loc_id, main, desc, character, img_src, contact, eco_watcher}) {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(()=>{
            gsap.to(".intro_background", {
                objectPosition: '50% 85%',
                // duration: 3,
                scrollTrigger: {
                    trigger: 'skills',
                    scrub: 1,
                    // markers: true,
                },
            });
        });
        return () => ctx.revert()
    });

    return (
        <div id={loc_id} className='area'>
            <img className="intro_background" src={img_src} alt='main background'/>
            <div className="intro_content">
                <h2 className="intro_main">{main}</h2>
                <p className="intro_character">{character}</p>
                <p className="intro_desc">{desc}</p>
                <div className="intro_action_button">
                    <AnchorLink href="#contact" offset='40'><button>{contact}</button></AnchorLink>
                    <Link to="/economywatch"><button>{eco_watcher}</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Intro;