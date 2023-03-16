import EchartsReact from "echarts-for-react";
import React from "react";

export default function ChartArea({ report, graphStyle }) {


    var financialReport = {

        title: report.title,

        revenue: report.revenue,

        get totalRevenue() {
            var sum = 0;
            for (let i in this.revenue) {
                sum += this.revenue[i].value;
            }
            return sum;
        },

        get grossProfit() {
            return this.totalRevenue - this.cogs;
        },

        get operatingProfit() {
            var sum = 0;
            for (let i in this.expense) {
                sum += this.expense[i].value;
            }
            return this.grossProfit - sum;
        },

        cogs: report.cogs,


        expense: report.expense,

        tax: report.tax,

        investment: report.investment,


        get netProfit() {
            return this.operatingProfit - this.tax + this.investment;
        }

    }

    function getReportSeries(report) {
        var series = [];

        series.push({
            'name': '营收',
            'itemStyle': {
                'color': graphStyle.incomeColor,
            },
            'value': report.totalRevenue.toFixed(2),
        });

        series.push({
            'name': '毛利润',
            'itemStyle': {
                'color': graphStyle.profitColor,
            },
            'value': report.grossProfit.toFixed(2),
        });

        series.push({
            'name': '运营利润',
            'itemStyle': {
                'color': graphStyle.profitColor,
            },
            'value': report.operatingProfit.toFixed(2),
        });

        series.push({
            'name': '净利润',
            'itemStyle': {
                'color': graphStyle.profitColor,
            },
            'value': report.netProfit.toFixed(2),
        });

        series.push({
            'name': '主营业务成本',
            'itemStyle': {
                'color': graphStyle.expenseColor,
            },
            'value': report.cogs.toFixed(2),

        });

        series.push({
            'name': '所得税',
            'itemStyle': {
                'color': graphStyle.expenseColor,
            },
            'value': report.tax.toFixed(2),

        });

        series.push({
            'name': '投资收益',
            'itemStyle': {
                'color': report.investment >= 0 ? graphStyle.incomeColor : graphStyle.expenseColor,
            },
            'depth': report.investment >= 0 ? 3 : 4,
            'value': report.investment >= 0 ? report.investment.toFixed(2) : -report.investment.toFixed(2),
        });

        for (let key in report.revenue) {
            if(report.revenue[key].value > 0) {
                series.push({
                    'name': report.revenue[key].name,
                    'itemStyle': {
                        'color': graphStyle.incomeColor,
                    },
                    'value': report.revenue[key].value.toFixed(2)
                });
            }
        }

        for (let key in report.expense) {
            if(report.expense[key].value > 0) {
                series.push({
                    'name': report.expense[key].name,
                    'itemStyle': {
                        'color': graphStyle.expenseColor,
                    },
                    'value': report.expense[key].value.toFixed(2)
                });
            }
        }

        return series;
    }

    function getReportLinks(report) {
        var links = [];

        for (let key in report.revenue) {
            links.push({
                source: report.revenue[key].name,
                target: '营收',
                value: report.revenue[key].value,
            })
        }

        links.push({
            source: '营收',
            target: '毛利润',
            value: report.grossProfit
        })

        links.push({
            source: '营收',
            target: '主营业务成本',
            value: report.cogs
        })

        links.push({
            source: '毛利润',
            target: '运营利润',
            value: report.operatingProfit
        })

        for (let key in report.expense) {
            if (report.expense[key].value >= 0) {
                links.push({
                    source: '毛利润',
                    target: report.expense[key].name,
                    value: report.expense[key].value
                });
            } else {
                links.push({
                    source: report.expense[key].name,
                    target: '运营利润',
                    value: -report.expense[key].value
                });
            }

        }

        links.push({
            source: '运营利润',
            target: '所得税',
            value: report.tax
        });

        if (report.investment >= 0) {
            links.push({
                source: '投资收益',
                target: '净利润',
                value: report.investment
            });
        } else {
            links.push({
                source: '运营利润',
                target: '投资收益',
                value: -report.investment
            });
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
                text: financialReport.title,
                textStyle: {
                    fontSize: graphStyle.titleFontSize,
                },
                left: 'center',
                top: `${graphStyle.titlePaddingTop}%`,
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
        backgroundColor: graphStyle.backgroundColor,
        series: {
            type: 'sankey',
            layoutIterations: 0,
            nodeGap: 25,
            label: {
                show: true,
                textBorderColor: 'transparent',
                formatter: `{name|{b}}\n{value|{c}${' '+graphStyle.unit}}`,
                rich: {
                    name: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'black',
                    },
                    value: {
                        fontSize: 10,
                        color: 'black',
                        lineHeight: 15,
                    }
                }
            },
            nodeAlign: 'left',
            data: getReportSeries(financialReport),
            links: getReportLinks(financialReport),
            top: `${graphStyle.graphPaddingV}%`,
            bottom: `${graphStyle.graphPaddingV}%`,
            right: `${graphStyle.graphPaddingH}%`,
            left: `${graphStyle.graphPaddingH}%`,
            emphasis: {
                focus: 'adjacency'
            },
            lineStyle: {
                color: 'gradient',
                curveness: 0.5
            }
        },

    }

    return <EchartsReact option={option} style={{ height: `${graphStyle.height}px`, width: '100%' }} />;
}