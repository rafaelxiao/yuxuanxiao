import React, { useLayoutEffect } from "react";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Navbar( {language, setLanguage} ) {
    const [expandNavbar, setExpandNavbar] = React.useState(false);
    const content = language === 'CN' ? ContentCN: ContentEN;
    const currentLocation = useLocation();



    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const scrollTrigger = {
            trigger: 'projects',
            toggleActions: 'play none none reset',
            // scrub: 1,
            // markers: true,
        };

        let ctx = gsap.context(()=>{
            gsap.to(".navbar", {
                background: 'linear-gradient(90deg, #182848 50%, #34559c 100%)',
                // duration: 1,
                scrollTrigger: scrollTrigger,
            });

            gsap.to(".logo", {
                color: 'white',
                // duration: 1,
                scrollTrigger: scrollTrigger,
            });

            gsap.to(".links a", {
                color: 'white',
                // duration: 1,
                scrollTrigger: scrollTrigger,
            });
        });
        return () => ctx.revert()
    });

    var dynamicLink;
    var languageButton;
    if (currentLocation.pathname === '/') {
        dynamicLink = (
            <div className="links">
                <AnchorLink href="#intro" offset='100' onClick={()=>setExpandNavbar(false)}> { content.navHome }</AnchorLink>
                <AnchorLink href="#skills" offset='40' onClick={()=>setExpandNavbar(false)}> { content.navSkills }</AnchorLink>
                <AnchorLink href="#projects" offset='40' onClick={()=>setExpandNavbar(false)}> { content.navProjects }</AnchorLink>
                <AnchorLink href="#contact" offset='40' onClick={()=>setExpandNavbar(false)}> { content.navContact }</AnchorLink>
                <Link to="/economywatch" onClick={()=>setExpandNavbar(false)}> { content.navCharts }</Link>
            </div>
        )

        languageButton = (
            <div className="language" onClick={() => {
                if (language === 'CN') {
                    setLanguage('EN');
                } else {
                    setLanguage('CN');
                }
            }}>
                <img src={language === 'CN' 
                    ? require('../images/england.png')
                    : require('../images/china.png')} 
                    className = 'language_flag'
                    alt = "language flag"
                />
                <div>{language === 'CN' ? 'English' : '中文'}</div>
            
            </div>
        )

    } else if (currentLocation.pathname === '/economywatch') {
        dynamicLink = (
            <div className="links">
                <Link to="/" onClick={()=>setExpandNavbar(false)}> { content.navHome }</Link>
                <Link to="/economywatch" onClick={()=>setExpandNavbar(false)}> { content.navCharts }</Link>
            </div>
        )
    }
    

    return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>

    <Link to="/"><div className="logo">YX</div></Link>
        {dynamicLink}

        {languageButton}

        <div className="toggleButton">
            <button onClick={() => {
                setExpandNavbar((prev) => !prev)
            }}>
                <ReorderIcon />
            </button>
        </div>

        

    </div>
    );
}

export default Navbar;