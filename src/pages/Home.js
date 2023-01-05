import React from "react";
import Navbar from "../components/Navbar";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Home.css"
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    
    const [language, setLanguage] = React.useState('CN');
    const content = language === 'CN' ? ContentCN: ContentEN;

    return (
        <div className="home">
            <Navbar language={language} 
                setLanguage={setLanguage}/>

            <Intro loc_id='intro' 
                main={content.introMe} 
                desc={content.introPrompt}
                character={content.introChar}/>

            <Skills title={content.navSkills} id='skills' skills={content.skills}/>

            <Projects title={content.navProjects} id='projects' projects={content.projects}/>


            <Footer />

        
        </div>
    );
}

export default Home;