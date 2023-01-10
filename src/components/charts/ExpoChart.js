import useRequest from "../../utils/useRequest";
import EchartsReact from "echarts-for-react";
import "../../styles/ChartCard.css";
import basicChartOps from "../../utils/basicChartOps";
import PostUrls from "../../models/PostUrls";
import React from "react";
import useWindowSize from "../../utils/useWindowSize";


export default function ExpoChart() {
    const { data, status, error, loaded } = useRequest(PostUrls.expo.url, 'get', PostUrls.expo.params);
    const { height, width } = useWindowSize();
    var content = null;
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
        const option = {
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
                    axisLabel: {
                        fontSize: width > 600 ? 12 : 10,
                    },
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
        content = <EchartsReact className='chart_graph' option={option} />
    }
    return (
        content !== null ? (
            <div className='chart_card'>
                {content}
            </div>
        ) : null
    )
}