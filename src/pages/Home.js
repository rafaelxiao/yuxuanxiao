import React from "react";
import Navbar from "../components/Navbar";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Home.css"
import Intro from "../components/Intro";
import Footer from "../components/Footer";

function Home() {
    const content = ContentCN

    return (
        <div className="home">
            <Navbar />

            <Intro loc_id='intro' 
                main={content.introWelcome} 
                desc={content.introPrompt}
                img_src={require("../images/main.jpeg")}/>

            <section id='projects'>
                <h1>{content.navProjects}</h1>
                <p></p>
            </section>

            <div style={{"height": "500px"}}></div>

            <section id='experience'>
                <h1>{content.navExperience}</h1>
                <p></p>
            </section>

            <div style={{"height": "500px"}}></div>

            <Footer />

        
        </div>
    );
}

export default Home;