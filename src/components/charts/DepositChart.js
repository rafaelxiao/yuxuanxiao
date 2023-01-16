import useRequest from "../../utils/useRequest";
import EchartsReact from "echarts-for-react";
import "../../styles/ChartCard.css";
import basicChartOps from "../../utils/basicChartOps";
import PostUrls from "../../models/PostUrls";
import React from "react";


export default function DepositChart() {
    const { data, status, loaded } = useRequest(PostUrls.deposit.url, 'get', PostUrls.deposit.params);

    var content = null;
    if (loaded && status === 200) {
        var records = [...data.result.data].reverse();
        const accumulate = records.map((item) => Math.round((item['BASE_ACCUMULATE'] - (item['BASE'] > 0 ? item['BASE'] : 0)) / 100 ) / 100)
        const origOption = basicChartOps('本外币存款');

        const option = {
            ...origOption,
            xAxis: {
                type: 'category',
                data: records.map((item) => item['REPORT_DATE'].slice(0, 11)),
            },
            yAxis: {
                type: 'value',
                // min: Math.round(accumulate.reduce((a, b) => a < b ? a : b)),
                // max: Math.round(accumulate.reduce((a, b) => a > b ? a : b)),
                min: Math.round(records[records.length-1]['BASE_ACCUMULATE'] / 10000),
                max: Math.round(records[0]['BASE_ACCUMULATE'] / 10000),
            },
            legend: {
                ...origOption['legend'],
                data: ['增加(万亿元)', '减少(万亿元)'],
                itemWidth: 32,
            },
            tooltip: {
                ...origOption['tooltip'],
                formatter: function (params) {
                  let tar;
                  if (params[1] && params[1].value !== '-') {
                    tar = params[1];
                  } else {
                    tar = params[2];
                  }
                  return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            series: [
                {
                    name: 'Placeholder',
                    type: 'bar',
                    stack: 'Total',
                    silent: true,
                    itemStyle: {
                      borderColor: 'transparent',
                      color: 'transparent'
                    },
                    emphasis: {
                      itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                      }
                    },
                    data : accumulate,
                },
                {
                    name: '增加(万亿元)',
                    type: 'bar',
                    stack: 'Total',
                    color: 'orange',
                    label: {
                        show: true,
                        position: 'top',
                        textBorderColor: 'transparent',
                        fontSize: 10,
                    },
                    data : records.map((item) => item['BASE'] >= 0 ? Math.round(item['BASE'] / 100) / 100 : '-'),
                },
                {
                    name: '减少(万亿元)',
                    type: 'bar',
                    stack: 'Total',
                    color: '#588BAE',
                    label: {
                        show: true,
                        position: 'bottom',
                        textBorderColor: 'transparent',
                        fontSize: 10,
                    },
                    data : records.map((item) => item['BASE'] < 0 ? Math.round(-item['BASE'] / 100) /100 : '-'),
                },
            ],
            
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