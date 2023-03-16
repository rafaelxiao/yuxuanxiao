import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { ContentCN, ContentEN } from "../models/Content";
import "../styles/Home.css"
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Route, Routes, useLocation } from "react-router-dom";
import ChartPage from "./ChartPage";
import Contact from "../components/Contact";
import FinancialReport from "../components/financialReport/FinancialReport";

function Home() {
    const [language, setLanguage] = React.useState('CN');
    const content = language === 'CN' ? ContentCN: ContentEN;
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            document.title = content.homeTitle;
        }
    }, [location, language]);



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

            <Skills title={content.navSkills} loc_id='skills' skills={content.skills}/>

            <Projects title={content.navProjects} loc_id='projects' projects={content.projects}/>

            <Contact title={content.navContact} loc_id='contact' contact={content.contact}/>

        </div>
    )

    return (
        <div className="home">
            <Navbar language={language} 
                setLanguage={setLanguage}/>

            <Routes>
                <Route path="/" element={mainArea} />
                <Route path="/economywatch" element={<ChartPage title={content.navCharts} id='charts' pageTitle={content.chartPageTitle}/>} />
                <Route path="/fr" element={<FinancialReport/>} />
            </Routes>

            <Footer />
        </div>
    );
}

export default Home;