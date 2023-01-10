import useRequest from "../../utils/useRequest";
import EchartsReact from "echarts-for-react";
import "../../styles/ChartCard.css";
import basicChartOps from "../../utils/basicChartOps";
import PostUrls from "../../models/PostUrls";
import React from "react";

export default function PMIChart() {
    const { data, status, error, loaded } = useRequest(PostUrls.pmi.url, 'get', PostUrls.pmi.params);
    var content = null;
    if (loaded && status === 200) {
        var records = [...data.result.data].reverse();
        const endLabelOption = {
            show: true,
            formatter: '{name|{a}}',
            offset: [-10, 0],
            rich: {
                name: {
                    fontSize: 10,
                    color: 'grey',
                },
            },
        }

        const interval = 3;
        const minVal = (Math.ceil([...records.map((item) => item['MAKE_INDEX']), ...records.map((item) => item['NMAKE_INDEX']), ].reduce((a, b) => a < b ? a : b) / interval) - 1) * interval;
        const maxVal = (Math.floor([...records.map((item) => item['MAKE_INDEX']), ...records.map((item) => item['NMAKE_INDEX']), ].reduce((a, b) => a < b ? b : a) / interval) + 1) * interval;
        const origOption = basicChartOps('PMI 采购经理人指数');

        var option = {
            ...origOption,
            legend: {
                ...origOption['legend'],
                itemStyle: {
                    color: '#588BAE',
                },
                lineStyle: {
                    color: '#588BAE',
                },
            },
            xAxis: [
                {
                    type: 'category',
                    data: records.map((item) => item['REPORT_DATE'].slice(0, 11)),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: minVal,
                    max: maxVal,
                    interval: interval,
                }
            ],
            series: [
                {
                    name: '制造业',
                    type: 'line',
                    data: records.map((item) => item['MAKE_INDEX']),
                    emphasis: {
                        focus: 'series'
                    },
                    symbolSize: 2,
                    endLabel: endLabelOption,
                },
                {
                    name: '非制造业',
                    type: 'line',
                    data: records.map((item) => item['NMAKE_INDEX']),
                    emphasis: {
                        focus: 'series'
                    },
                    symbolSize: 2,
                    endLabel: endLabelOption,
                    lineStyle: {
                        type: 'dotted',
                    }
                },
            ],
            visualMap: {
                type: 'continuous',
                min: 45,
                max: 55,
                color: ['orange', '#588BAE'],
                itemWidth: 15,
                itemHeight: 80,
                right: 30,
                top: 50,
            },
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