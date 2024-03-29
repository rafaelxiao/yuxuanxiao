import '../styles/ChartPage.css';
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShiborCharts from '../components/charts/ShiborChart';
import M2Chart from '../components/charts/M2Chart';
import PMIChart from '../components/charts/PMIChart';
import ExpoChart from '../components/charts/ExpoChart';
import ConsumeChart from '../components/charts/ConsumeChart';
import DepositChart from '../components/charts/DepositChart';

export default function ChartPage( {id, title, pageTitle} ) {

    const location = useLocation();

    useEffect(() => {
        document.title = pageTitle;
    }, [location]);

    return (
        <div className='chart_section' id={id}>
            <div className='chart_title'>{title}</div>
            <div className='chart_charts'>
                <M2Chart />
                <ShiborCharts />
                <PMIChart />
                <ConsumeChart />
                <DepositChart />
                <ExpoChart />
            </div>
        </div>
    )
}