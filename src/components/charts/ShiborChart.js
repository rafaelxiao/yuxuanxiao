import EChartsReact from 'echarts-for-react';
import '../../styles/ChartCard.css';
import React from 'react';
import useRequest from '../../utils/useRequest';
import basicChartOps from '../../utils/basicChartOps';
import PostUrls from '../../models/PostUrls';

export default function ShiborCharts() {
    const { data, status, loaded } = useRequest(PostUrls.shibor.url, 'get', PostUrls.shibor.params);
    var content = null;
    if (loaded && status === 200) {
        var records = [...data.records].reverse();
        const endLabelOption = {
            show: true,
            formatter: '{name|{a}}',
            offset: [5, 0],
            rich: {
                name: {
                    fontSize: 10,
                    color: 'grey',
                },
            },
        }
        var option = {
            ...basicChartOps('Shibor 利率'),
            xAxis: [
                {
                    type: 'category',
                    data: records.map((item) => item['showDateCN']),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                }
            ],
            series: [
                {
                    name: '隔夜',
                    type: 'line',
                    data: records.map((item) => item['ON']),
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#588BAE',
                    symbolSize: 8,
                    endLabel: endLabelOption,
                },
                {
                    name: '7天',
                    type: 'line',
                    data: records.map((item) => item['1W']),
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#89CFF0',
                    symbolSize: 8,
                    endLabel: endLabelOption,
                },
                {
                    name: '3月',
                    type: 'line',
                    data: records.map((item) => item['3M']),
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#95C8D8',
                    symbolSize: 8,
                    endLabel: endLabelOption,
                },
                {
                    name: '1年',
                    type: 'line',
                    data: records.map((item) => item['1Y']),
                    emphasis: {
                        focus: 'series'
                    },
                    color: '#4F97A3',
                    symbolSize: 8,
                    endLabel: endLabelOption,
                }
            ]
        }

        content = <EChartsReact className='chart_graph' option={option} />

    }
    return (
        content !== null ? (
            <div className='chart_card'>
                {content}
            </div>
        ) : null
    )
}