import useRequest from "../utils/useRequest";
import EchartsReact from "echarts-for-react";
import "../styles/ChartCard.css";
import basicChartOps from "../utils/basicChartOps";
import PostUrls from "../models/PostUrls";
import React from "react";


export default function ExpoChart() {
    const { data, status, error, loaded } = useRequest(PostUrls.expo, 'get');
    var content = (<div>Loading...</div>);
    if (loaded && status === 200) {
        var records = [...data.result.data].reverse();
        const endLabelOption = {
            show: true,
            formatter: '{name|{a}}',
            offset: [-60, -10],
            rich: {
                name: {
                    fontSize: 10,
                    color: 'grey',
                },
            },
        }
        var option = {
            ...basicChartOps('海关进出口金额'),
            xAxis: [
                {
                    type: 'category',
                    data: records.map((item) => item['REPORT_DATE'].slice(0, 11)),
                },

            ],
            yAxis: [
                {
                    type: 'value',
                },
            ],
            series: [
               {
                    name: '累计出口(亿美元)',
                    data: records.map((item) => Math.round(item['EXIT_ACCUMULATE'] / 10000) / 100) ,
                    type: 'line',
                    smooth: true,
                    stack: 'Total',
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#588BAE',
                    areaStyle: {
                        opacity: 0.8,
                    },
                    endLabel: endLabelOption,
               },
               {
                    name: '累计进口(亿美元)',
                    data: records.map((item) => Math.round(item['IMPORT_ACCUMULATE'] / 10000)  / 100),
                    type: 'line',
                    smooth: true,
                    stack: 'Total',
                    color: '#89CFF0',
                    emphasis: {
                        focus: 'series'
                    },
                    areaStyle: {
                        opacity: 0.8,
                    },
                    endLabel: endLabelOption,
                },
            ]
        }
        content = <EchartsReact style={{ height: '350px', width: '100%' }} option={option} />
    }
    return (
        <div className='chart_card'>
            {content}
        </div>
    )
}