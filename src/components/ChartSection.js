import '../styles/ChartSection.css';
import React from "react";
import ShiborCharts from './ShiborChart';
import M2Chart from './M2Chart';
import PMIChart from './PMIChart';
import ExpoChart from './ExpoChart';

export default function ChartSection( {id, title} ) {
    return (
        <div className='chart_section' id={id}>
            <div className='chart_title'>{title}</div>
            <div className='chart_charts'>
                <M2Chart />
                <ShiborCharts />
                <PMIChart />
                <ExpoChart />
            </div>
        </div>
    )
}