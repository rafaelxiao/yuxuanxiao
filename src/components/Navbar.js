import React, { useEffect } from "react";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
    const Content = ContentCN
    const [expandNavbar, setExpandNavbar] = React.useState(false);

    return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>

        <div className="logo">YX</div>

        <div className="toggleButton">
            <button onClick={() => {
                setExpandNavbar((prev) => !prev)
            }}>
                <ReorderIcon />
            </button>
        </div>

        <div className="links">
            <AnchorLink href="#intro" onClick={()=>setExpandNavbar(false)}> { Content.navHome }</AnchorLink>
            <AnchorLink href="#projects" onClick={()=>setExpandNavbar(false)}> { Content.navProjects }</AnchorLink>
            <AnchorLink href="#experience" onClick={()=>setExpandNavbar(false)}> { Content.navExperience }</AnchorLink>
        </div>

    </div>
    );
}

export default Navbar;