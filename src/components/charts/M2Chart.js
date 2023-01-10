import useRequest from "../../utils/useRequest";
import EchartsReact from "echarts-for-react";
import "../../styles/ChartCard.css";
import basicChartOps from "../../utils/basicChartOps";
import PostUrls from "../../models/PostUrls";
import React from "react";


export default function M2Chart() {
    const { data, status, _, loaded } = useRequest(PostUrls.m2.url, 'get', PostUrls.m2.params);
    var content = null;
    if (loaded && status === 200) {
        var records = [...data.result.data].reverse();
        var basicCurreny = records.map((item) => Math.round(item['BASIC_CURRENCY'] / 100) / 100, 2)
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
                    min: Math.round(basicCurreny.reduce((a, b) => a < b ? a : b) * 0.95),
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
                    data: basicCurreny,
                    yAxisIndex: 1,
                    emphasis: {
                        focus: 'series'
                    },
                    color: 'orange',
                    symbolSize: 8,
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