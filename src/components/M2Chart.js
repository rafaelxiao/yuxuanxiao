import useRequest from "../utils/useRequest";
import EchartsReact from "echarts-for-react";
import "../styles/ChartCard.css";
import basicChartOps from "../utils/basicChartOps";
import PostUrls from "../models/PostUrls";
import React from "react";


export default function M2Chart() {
    const { data, status, error, loaded } = useRequest(PostUrls.m2, 'get');
    var content = (<div>Loading...</div>);
    if (loaded && status === 200) {
        var records = [...data.result.data].reverse();
        var origOption = basicChartOps('货币供应量');
        var option = {
            ...origOption,
            xAxis: [
                {
                    type: 'category',
                    data: records.map((item) => item['REPORT_DATE'].slice(0, 11)),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                },
                {
                    type: 'value',
                    min: 200,
                    splitLine: {
                        show: false,
                    }
                },
            ],
            series: [
                {
                    name: 'M0增长率',
                    type: 'bar',
                    data: records.map((item) => item['FREE_CASH_SAME']),
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#89CFF0',
                    symbolSize: 8,
                    barGap: 0,
                    barCategoryGap: 10,
                },
                {
                    name: 'M1增长率',
                    type: 'bar',
                    data: records.map((item) => item['CURRENCY_SAME']),
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#95C8D8',
                    symbolSize: 8,
                },
                {
                    name: 'M2增长率',
                    type: 'bar',
                    data: records.map((item) => item['BASIC_CURRENCY_SAME']),
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#588BAE',
                    symbolSize: 8,
                },
                {
                    name: 'M2数量(万亿元)',
                    type: 'line',
                    data: records.map((item) => Math.round(item['BASIC_CURRENCY'] / 100) / 100, 2),
                    yAxisIndex: 1,
                    emphasis: {
                        focus: 'series'
                    },
                    color: 'orange',
                    symbolSize: 8,
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