import React from "react";
import Navbar from "../components/Navbar";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Home.css"
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import ChartPage from "./ChartPage";

function Home() {
    
    const [language, setLanguage] = React.useState('CN');
    const content = language === 'CN' ? ContentCN: ContentEN;

    const mainArea = (
        <div>                
            <Intro loc_id='intro' 
                main={content.introMe} 
                desc={content.introPrompt}
                character={content.introChar}
                img_src={content.introBackgroundImg}
                contact={content.displayContact}
                eco_watcher={content.displayCharts}
            />

            <Skills title={content.navSkills} id='skills' skills={content.skills}/>

            <Projects title={content.navProjects} id='projects' projects={content.projects}/>

        </div>
    )

    return (
        <div className="home">
            <Router>
                <Navbar language={language} 
                    setLanguage={setLanguage}/>

                <Routes>
                    <Route path="/" element={mainArea} />
                    <Route path="/economywatcher" element={<ChartPage title={content.navCharts} id='charts'/>} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default Home;