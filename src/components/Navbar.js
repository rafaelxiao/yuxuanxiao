import React from "react";
import { ContentCN, ContentEN } from "../models/Content";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    var Content = ContentEN
    return (
    <div className="navbar">
        <Link to="/"> { Content.navHome }</Link>
        <Link to="/experience"> { Content.navExperience }</Link>
        <Link to="/projects"> { Content.navProjects }</Link>
    </div>
    );
}

export default Navbar;