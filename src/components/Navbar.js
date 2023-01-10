import React from "react";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";

function Navbar( {language, setLanguage} ) {
    const [expandNavbar, setExpandNavbar] = React.useState(false);
    const content = language === 'CN' ? ContentCN: ContentEN;
    const currentLocation = useLocation();

    var dynamicLink;
    var languageButton;
    if (currentLocation.pathname === '/') {
        dynamicLink = (
            <div className="links">
                <AnchorLink href="#intro" offset='100' onClick={()=>setExpandNavbar(false)}> { content.navHome }</AnchorLink>
                <AnchorLink href="#projects" offset='40' onClick={()=>setExpandNavbar(false)}> { content.navProjects }</AnchorLink>
                <AnchorLink href="#skills" offset='40' onClick={()=>setExpandNavbar(false)}> { content.navSkills }</AnchorLink>
                <AnchorLink href="#skills" offset='40' onClick={()=>setExpandNavbar(false)}> { content.navContact }</AnchorLink>
                <Link to="/economywatcher" onClick={()=>setExpandNavbar(false)}> { content.navCharts }</Link>
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
                />
                <div>{language === 'CN' ? 'English' : '中文'}</div>
            
            </div>
        )

    } else if (currentLocation.pathname === '/economywatcher') {
        dynamicLink = (
            <div className="links">
                <Link to="/" onClick={()=>setExpandNavbar(false)}> { content.navHome }</Link>
                <Link to="/economywatcher" onClick={()=>setExpandNavbar(false)}> { content.navCharts }</Link>
            </div>
        )
    }
    

    return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>

        <div className="logo">YX</div>
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