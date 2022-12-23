import React from "react";
import { ContentCN, ContentEN } from "../models/Content";

function Home() {
    var Content = ContentEN

    return (<div> <h1>{Content.mainWelcome}</h1> </div>);
}

export default Home;