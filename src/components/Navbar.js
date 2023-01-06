import React from "react";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar( {language, setLanguage} ) {
    const [expandNavbar, setExpandNavbar] = React.useState(false);
    const content = language === 'CN' ? ContentCN: ContentEN;

    return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>

        <div className="logo">YX</div>

        <div className="language" onClick={() => {
            if (language === 'CN') {
                setLanguage('EN');
            } else {
                setLanguage('CN');
            }
        }}>{language === 'CN' ? 'English' : '中文'}</div>

        <div className="toggleButton">
            <button onClick={() => {
                setExpandNavbar((prev) => !prev)
            }}>
                <ReorderIcon />
            </button>
        </div>


        <div className="links">
            <AnchorLink href="#intro" offset='100' onClick={()=>setExpandNavbar(false)}> { content.navHome }</AnchorLink>
            <AnchorLink href="#projects" offset='-100' onClick={()=>setExpandNavbar(false)}> { content.navProjects }</AnchorLink>
            <AnchorLink href="#skills" offset='150' onClick={()=>setExpandNavbar(false)}> { content.navSkills }</AnchorLink>
        </div>


    </div>
    );
}

export default Navbar;