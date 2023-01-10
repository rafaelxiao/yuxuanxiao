import useRequest from "../../utils/useRequest";
import EchartsReact from "echarts-for-react";
import "../../styles/ChartCard.css";
import basicChartOps from "../../utils/basicChartOps";
import PostUrls from "../../models/PostUrls";
import React from "react";


export default function ConsumeChart() {
    const { data: faith_data, status: faith_status, loaded: faith_loaded } = useRequest(PostUrls.faith.url, 'get', PostUrls.faith.params);
    const { data: retail_data, status: retail_status, loaded: retail_loaded } = useRequest(PostUrls.retail.url, 'get', PostUrls.retail.params);

    var content = null;
    if (faith_loaded && faith_status === 200 && retail_loaded && retail_status === 200) {
        var faithRecords = [...faith_data.result.data].reverse();
        var retailRecords = [...retail_data.result.data].reverse();
        const faithIndex = faithRecords.map((item) => item['CONSUMERS_FAITH_INDEX']);
        const retailIndex = retailRecords.map((item) => Math.round(item['RETAIL_TOTAL'] / 10) / 1000);

        const option = {
            ...basicChartOps('消费信心与消费品零售总额'),
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: faithRecords.map((item) => item['REPORT_DATE'].slice(0, 11)),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: Math.round(retailIndex.filter((val) => val > 1).reduce((a, b) => a < b ? a : b) * 0.95),
                    max: Math.round(retailIndex.reduce((a, b) => a < b ? b : a) * 1.2),
                },
                {
                    type: 'value',
                    min: Math.round(faithIndex.reduce((a, b) => a < b ? a : b) * 0.95),
                    max: Math.round(faithIndex.reduce((a, b) => a < b ? b : a) * 1.2),
                    inverse: true,
                },
            ],
            series: [
                {
                    name: '社会消费品零售总额(万亿元)',
                    type: 'line',
                    data: retailIndex,
                    areaStyle: {},
                    color: 'orange',
                    lineStyle: {
                        width: 1,
                    },
                    emphasis: {
                        focus: 'series'
                    },
                },
                {
                    name: '消费者信心指数',
                    type: 'line',
                    data: faithIndex,
                    areaStyle: {},
                    color: '#89CFF0',
                    lineStyle: {
                        width: 1,
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    yAxisIndex: 1,
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