import EchartsReact from "echarts-for-react";
import React from "react";

export default function ChartArea({reportManager, styleManager}) {


    function getWaterMark(waterMarkText) {
        const size = 600;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.height = size;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 1;
        ctx.fillStyle = styleManager.getItem('backgroundColor').value;
        ctx.font = '60px Microsoft YaHei';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = styleManager.getItem('incomeColor').value;
        ctx.translate(size / 2, size / 2);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(waterMarkText, 0, 0);
        return canvas;
    }



    var financialReport = {


        get totalRevenue() {
            return reportManager.sumByType('revenue');
        },

        get grossProfit() {
            return this.totalRevenue - reportManager.sumByType('cogs');
        },

        get operatingProfit() {
            return this.grossProfit - reportManager.sumByType('expense');
        },

        tax: reportManager.getItem('tax').valueTwoDigits,
        get taxName() {
            return reportManager.getItem('tax').name + (this.tax >= 0 ? '支出' : '抵扣');
        },

        investment: reportManager.getItem('investment').valueTwoDigits,
        get investmentName() {
            return reportManager.getItem('investment').name + (this.investment >= 0 ? '收入' : '支出');
        },

        other: reportManager.getItem('other').valueTwoDigits,
        get otherName() {
            return reportManager.getItem('other').name + (this.other >= 0 ? '收入' : '支出');
        },

        get netProfit() {
            return this.operatingProfit - this.tax + this.investment + this.other;
        }

    }

    function getReportSeries(report) {
        var series = [];

        series.push({
            'name': '营收',
            'itemStyle': {
                'color': styleManager.getItem('incomeColor').value,
            },
            'value': report.totalRevenue.toFixed(2),
        });

        series.push({
            'name': '毛利润',
            'itemStyle': {
                'color': styleManager.getItem('profitColor').value,
            },
            'value': report.grossProfit.toFixed(2),
        });

        series.push({
            'name': '运营利润',
            'itemStyle': {
                'color': styleManager.getItem('profitColor').value,
            },
            'value': report.operatingProfit.toFixed(2),
        });

        series.push({
            'name': '净利润',
            'itemStyle': {
                'color': styleManager.getItem('profitColor').value,
            },
            'value': report.netProfit.toFixed(2),
        });

        if(report.tax !== 0) {
            series.push({
                'name': report.taxName,
                'itemStyle': {
                    'color': report.tax >= 0 ? styleManager.getItem('expenseColor').value : styleManager.getItem('profitColor').value,
                },
                'value': report.tax >= 0 ? report.tax : -report.tax,
                'depth': report.tax >= 0 ? 4 : 3,
    
            });
        }

        if(report.investment !== 0) {
            series.push({
                'name': report.investmentName,
                'itemStyle': {
                    'color': report.investment >= 0 ? styleManager.getItem('incomeColor').value : styleManager.getItem('expenseColor').value,
                },
                'value': report.investment >= 0 ? report.investment : -report.investment,
                'depth': report.investment >= 0 ? 3 : 4,
            });
        }


        if(report.other !== 0) {
            series.push({
                'name': report.otherName,
                'itemStyle': {
                    'color': report.other >= 0 ? styleManager.getItem('incomeColor').value : styleManager.getItem('expenseColor').value,
                },
                'value': report.other >= 0 ? report.other : -report.other,
                'depth': report.other >= 0 ? 3 : 4,
            });
        }

        const cogsItems = reportManager.filterByType('cogs');
        for (let key in cogsItems) {
            if(cogsItems[key].value > 0) {
                series.push({
                    'name': cogsItems[key].name,
                    'itemStyle': {
                        'color': styleManager.getItem('expenseColor').value,
                    },
                    'value': cogsItems[key].valueTwoDigits
                });
            }
        }

        const revenueItems = reportManager.filterByType('revenue');
        for (let key in revenueItems) {
            if(revenueItems[key].value > 0) {
                series.push({
                    'name': revenueItems[key].name,
                    'itemStyle': {
                        'color': styleManager.getItem('incomeColor').value,
                    },
                    'value': revenueItems[key].valueTwoDigits
                });
            }
        }

        const expenseItems = reportManager.filterByType('expense');
        for (let key in expenseItems) {
            if(expenseItems[key].value > 0) {
                series.push({
                    'name': expenseItems[key].name,
                    'itemStyle': {
                        'color': styleManager.getItem('expenseColor').value,
                    },
                    'value': expenseItems[key].valueTwoDigits
                });
            }
        }

        return series;
    }

    function getReportLinks(report) {
        var links = [];

        const revenueItems = reportManager.filterByType('revenue');
        for (let key in revenueItems) {
            links.push({
                source: revenueItems[key].name,
                target: '营收',
                value: revenueItems[key].value,
            })
        }

        links.push({
            source: '营收',
            target: '毛利润',
            value: report.grossProfit
        })

        const cogsItems = reportManager.filterByType('cogs');
        for (let key in cogsItems) {
            links.push({
                source: '营收',
                target: cogsItems[key].name,
                value: cogsItems[key].value,
            })
        }



        links.push({
            source: '毛利润',
            target: '运营利润',
            value: report.operatingProfit
        })

        const expenseItems = reportManager.filterByType('expense');
        for (let key in expenseItems) {
            links.push({
                source: '毛利润',
                target: expenseItems[key].name,
                value: expenseItems[key].value
            });
        }


        if(report.tax !== 0){
            if (report.tax < 0) {
                links.push({
                    source: report.taxName,
                    target: '净利润',
                    value: -report.tax
                });
            } else {
                links.push({
                    source: '运营利润',
                    target: report.taxName,
                    value: report.tax
                });
            }
        }

        if(report.investment !== 0) {
            if (report.investment >= 0) {
                links.push({
                    source: report.investmentName,
                    target: '净利润',
                    value: report.investment
                });
            } else {
                links.push({
                    source: '运营利润',
                    target: report.investmentName,
                    value: -report.investment
                });
            }
        }

        if(report.other !== 0) {
            if (report.other >= 0) {
                links.push({
                    source: report.otherName,
                    target: '净利润',
                    value: report.other
                });
            } else {
                links.push({
                    source: '运营利润',
                    target: report.otherName,
                    value: -report.other
                });
            }
        }


        links.push({
            source: '运营利润',
            target: '净利润',
            value: report.netProfit
        })

        return links;
    }


    var option = {
        title: [
            {
                text: styleManager.getItem('title').value,
                textStyle: {
                    fontSize: styleManager.getItem('titleFontSize').value,
                },
                left: 'center',
                top: `${styleManager.getItem('titlePaddingTop').value}%`,
                show: true,
            }
        ],

        toolbox: {
            show: true,
            left: 'center',
            top: 'bottom',
            feature: {
                saveAsImage: {},
            }
        },
        backgroundColor: {
            type: 'pattern',
            image: getWaterMark(styleManager.getItem('waterMark').value),
            repeat: 'repeat',
        },
        series: {
            type: 'sankey',
            layoutIterations: 0,
            nodeGap: 100,
            label: {
                show: true,
                textBorderColor: 'transparent',
                formatter: `{name|{b}}\n{value|{c}${' '+styleManager.getItem('unit').value}}`,
                rich: {
                    name: {
                        fontSize: styleManager.getItem('labelFontSize').value,
                        fontWeight: 'bold',
                        color: 'black',
                    },
                    value: {
                        fontSize: styleManager.getItem('valueFontSize').value,
                        color: 'black',
                        lineHeight: styleManager.getItem('valueFontSize').value * 1.5,
                    }
                }
            },
            nodeAlign: 'left',
            data: getReportSeries(financialReport),
            links: getReportLinks(financialReport),
            top: `${styleManager.getItem('graphPaddingV').value}%`,
            bottom: `${(styleManager.getItem('graphPaddingV').value - styleManager.getItem('titlePaddingTop').value )}%`,
            right: `${styleManager.getItem('graphPaddingH').value}%`,
            left: `${styleManager.getItem('graphPaddingH').value}%`,
            emphasis: {
                focus: 'adjacency'
            },
            lineStyle: {
                color: 'gradient',
                curveness: 0.5
            }
        },

    }

    return (<EchartsReact option={option} style={{ height: `${styleManager.getItem('height').value}px`, width: '100%' }} />);
}