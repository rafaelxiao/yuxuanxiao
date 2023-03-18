import ChartArea from "./ChartArea";
import FormArea from "./FormArea";
import React, { useState } from "react";

export default function FinancialReport() {

    const [_report, _setReport] = useState({
        title: "",
        waterMark: "",
        cogs: 0,
        cogsShow: '0',
        tax: 0,
        taxShow: '0',
        investment: 0,
        investmentShow: '0',
        other: 0,
        otherShow: '0',
        expense: [
            { name: "财务费用", value: 0, show: '0' },
            { name: "销售费用", value: 0, show: '0' },
            { name: "管理费用", value: 0, show: '0' },
            { name: "研发费用", value: 0, show: '0' },
            { name: "折旧", value: 0, show: '0' },
        ],
        revenue: [
            { name: "项目1", value: 0, show: '0' },
            { name: "项目2", value: 0, show: '0' },
            { name: "项目3", value: 0, show: '0' },
            { name: "项目4", value: 0, show: '0' },
            { name: "项目5", value: 0, show: '0' },
        ],
    });


    const report = {
        get title() {
            return _report.title;
        },

        setTitle: (newValue) => {
            _setReport({
                ..._report,
                title: newValue
            });
        },

        get waterMark() {
            return _report.waterMark;
        },

        setWaterMark: (newValue) => {
            _setReport({
                ..._report,
                waterMark: newValue,
            });
        },

        get cogs() {
            return _report.cogs;
        },

        get cogsShow() {
            return _report.cogsShow;
        },

        setCogs: (newValue) => {
            if(!isNaN(parseFloat(newValue))) {
                _setReport({
                    ..._report,
                    cogs: parseFloat(newValue),
                    cogsShow: newValue,
                });
            } else {
                _setReport({
                    ..._report,
                    cogsShow: newValue,
                });
            }
        },

        get other() {
            return _report.other;
        },

        get otherShow() {
            return _report.otherShow;
        },

        setOther: (newValue) => {
            if(!isNaN(parseFloat(newValue))) {
                _setReport({
                    ..._report,
                    other: parseFloat(newValue),
                    otherShow: newValue,
                });
            } else {
                _setReport({
                    ..._report,
                    otherShow: newValue,
                });
            }
        },

        get tax() {
            return _report.tax;
        },

        get taxShow() {
            return _report.taxShow;
        },



        setTax: (newValue) => {
            if(!isNaN(parseFloat(newValue))) {
                _setReport({
                    ..._report,
                    tax: parseFloat(newValue),
                    taxShow: newValue,
                });
            } else {
                _setReport({
                    ..._report,
                    taxShow: newValue,
                });
            }
        },

        get investment() {
            return _report.investment;
        },

        get investmentShow() {
            return _report.investmentShow;
        },

        setInvestment: (newValue) => {
            if(!isNaN(parseFloat(newValue))) {
                _setReport({
                    ..._report,
                    investment: parseFloat(newValue),
                    investmentShow: newValue,
                });
            } else {
                _setReport({
                    ..._report,
                    investmentShow: newValue,
                });
            }
        },

        get revenue() {
            return _report.revenue;
        },

        getRevenue(id) {
            if (id in _report.revenue) {
                return _report.revenue[id].value
            }
        },

        getRevenueShow(id) {
            if (id in _report.revenue) {
                return _report.revenue[id].show
            }
        },


        getRevenueName(id) {
            if (id in _report.revenue) {
                return _report.revenue[id].name;
            }
        },

        setRevenue(id) {
            return (newValue) => {
                const newRevenue = _report.revenue.map((item, index) => {
                    if (index === id) {
                        if(!isNaN(parseFloat(newValue))) {
                            return {
                                ...item,
                                value: parseFloat(newValue),
                                show: newValue,
                            }
                        } else {
                            return {
                                ...item,
                                show: newValue,
                            }
                        }
                    } else {
                        return item;
                    }
                });

                _setReport({
                    ..._report,
                    revenue: newRevenue
                });

            }
        },

        setRevenueName(id) {
            return (newValue) => {
                const newRevenue = _report.revenue.map((item, index) => {
                    if (index === id) {
                        return {
                            ...item,
                            name: newValue
                        }
                    } else {
                        return item;
                    }
                });
                _setReport({
                    ..._report,
                    revenue: newRevenue
                });
            }
        },

        get expense() {
            return _report.expense;
        },

        getExpense(id) {
            if (id in _report.expense) {
                return _report.expense[id].value
            }
        },

        getExpenseShow(id) {
            if (id in _report.expense) {
                return _report.expense[id].show
            }
        },


        getExpenseName(id) {
            if (id in _report.expense) {
                return _report.expense[id].name;
            }
        },

        setExpense(id) {
            return (newValue) => {
                const newExpense = _report.expense.map((item, index) => {
                    if (index === id) {
                        if(!isNaN(parseFloat(newValue))) {
                            return {
                                ...item,
                                value: parseFloat(newValue),
                                show: newValue,
                            }
                        } else {
                            return {
                                ...item,
                                show: newValue,
                            }
                        }
                    } else {
                        return item;
                    }
                });

                _setReport({
                    ..._report,
                    expense: newExpense
                });

            }
        },

        setExpenseName(id) {
            return (newValue) => {
                const newExpense = _report.expense.map((item, index) => {
                    if (index === id) {
                        
                        return {
                            ...item,
                            name: newValue
                        }
                    } else {
                        return item;
                    }
                });
                _setReport({
                    ..._report,
                    expense: newExpense
                });

            }
        },
    }


    const [_graphStyles, _setGraphStyles] = useState({
        expenseColor: '#17A954',
        expenseColorShow: '#17A954',
        incomeColor: '#CCCCCC',
        incomeColorShow: '#CCCCCC',
        profitColor: '#EC700C',
        profitColorShow: '#EC700C',
        backgroundColor: '#F3F3F3',
        backgroundColorShow: '#F3F3F3',
        titleFontSize: 80,
        titleFontSizeShow: '80',
        titlePaddingTop: 10,
        titlePaddingTopShow: '10',
        labelFontSize: 26,
        labelFontSizeShow: '26',
        valueFontSize: 20,
        valueFontSizeShow: '20',
        height: 1800,
        heightShow: '1800',
        graphPaddingV: 20,
        graphPaddingVShow: '20',
        graphPaddingH: 10,
        graphPaddingHShow: '10',
        unit: '万',
    });

    const graphStyle = {

        get unit() {
            return _graphStyles.unit;
        },

        setUnit(newValue) {
            _setGraphStyles({
                ..._graphStyles,
                unit: newValue,
            })
        },

        get graphPaddingH() {
            return _graphStyles.graphPaddingHShow;
        },

        setGraphPaddingH(newValue) {
            if (!isNaN(parseFloat(newValue))) {
                _setGraphStyles({
                    ..._graphStyles,
                    graphPaddingH: parseFloat(newValue),
                    graphPaddingHShow: newValue,
                })
            } else {
                _setGraphStyles({
                    ..._graphStyles,
                    graphPaddingHShow: newValue,
                })
            }
        },

        get graphPaddingV() {
            return _graphStyles.graphPaddingVShow;
        },

        setGraphPaddingV(newValue) {
            if (!isNaN(parseFloat(newValue))) {
                _setGraphStyles({
                    ..._graphStyles,
                    graphPaddingV: parseFloat(newValue),
                    graphPaddingVShow: newValue,
                })
            } else {
                _setGraphStyles({
                    ..._graphStyles,
                    graphPaddingVShow: newValue,
                })
            }
        },

        get height() {
            return _graphStyles.heightShow;
        },

        setHeight(newValue) {
            if (!isNaN(parseFloat(newValue))) {
                _setGraphStyles({
                    ..._graphStyles,
                    height: parseFloat(newValue),
                    heightShow: newValue,
                })
            } else {
                _setGraphStyles({
                    ..._graphStyles,
                    heightShow: newValue,
                })
            }
        },

        get titleFontSize() {
            return _graphStyles.titleFontSizeShow;
        },

        setTitleFontSize(newValue) {
            if (!isNaN(parseFloat(newValue))) {
                _setGraphStyles({
                    ..._graphStyles,
                    titleFontSize: parseFloat(newValue),
                    titleFontSizeShow: newValue,
                })
            } else {
                _setGraphStyles({
                    ..._graphStyles,
                    titleFontSizeShow: newValue,
                })
            }
        },

        get labelFontSize() {
            return _graphStyles.labelFontSizeShow;
        },

        setLabelFontSize(newValue) {
            if (!isNaN(parseFloat(newValue))) {
                _setGraphStyles({
                    ..._graphStyles,
                    labelFontSize: parseFloat(newValue),
                    labelFontSizeShow: newValue,
                })
            } else {
                _setGraphStyles({
                    ..._graphStyles,
                    labelFontSizeShow: newValue,
                })
            }
        },

        get valueFontSize() {
            return _graphStyles.valueFontSizeShow;
        },

        setValueFontSize(newValue) {
            if (!isNaN(parseFloat(newValue))) {
                _setGraphStyles({
                    ..._graphStyles,
                    valueFontSize: parseFloat(newValue),
                    valueFontSizeShow: newValue,
                })
            } else {
                _setGraphStyles({
                    ..._graphStyles,
                    valueFontSizeShow: newValue,
                })
            }
        },

        get titlePaddingTop() {
            return _graphStyles.titlePaddingTopShow;
        },

        setTitlePaddingTop(newValue) {
            if (!isNaN(parseFloat(newValue))) {
                _setGraphStyles({
                    ..._graphStyles,
                    titlePaddingTop: parseFloat(newValue),
                    titlePaddingTopShow: newValue,
                })
            } else {
                _setGraphStyles({
                    ..._graphStyles,
                    titlePaddingTopShow: newValue,
                })
            }
        },

        get expenseColor() {
            return _graphStyles.expenseColorShow;
        },


        setExpenseColor(newValue) {
            if (newValue.length <= 7 && newValue.charAt(0) === '#') {
                if (newValue.length === 7) {
                    _setGraphStyles({
                        ..._graphStyles,
                        expenseColor: newValue,
                        expenseColorShow: newValue,
                    })
                } else {
                    _setGraphStyles({
                        ..._graphStyles,
                        expenseColorShow: newValue,
                    });
                }
            }
        },

        get incomeColor() {
            return _graphStyles.incomeColorShow;
        },

        setIncomeColor(newValue) {
            if (newValue.length <= 7 && newValue.charAt(0) === '#') {
                if (newValue.length === 7) {
                    _setGraphStyles({
                        ..._graphStyles,
                        incomeColor: newValue,
                        incomeColorShow: newValue,
                    })
                } else {
                    _setGraphStyles({
                        ..._graphStyles,
                        incomeColorShow: newValue,
                    });
                }

            }
        },

        get profitColor() {
            return _graphStyles.profitColorShow;
        },

        setProfitColor(newValue) {
            if (newValue.length <= 7 && newValue.charAt(0) === '#') {
                if (newValue.length === 7) {
                    _setGraphStyles({
                        ..._graphStyles,
                        profitColor: newValue,
                        profitColorShow: newValue,
                    })
                } else {
                    _setGraphStyles({
                        ..._graphStyles,
                        profitColorShow: newValue,
                    });
                }

            }
        },

        get backgroundColor() {
            return _graphStyles.backgroundColorShow;
        },

        setBackgroundColor(newValue) {
            if (newValue.charAt(0) === '#' && newValue.length <= 7) {
                if (newValue.length === 7) {
                    _setGraphStyles({
                        ..._graphStyles,
                        backgroundColor: newValue,
                        backgroundColorShow: newValue,
                    })
                } else {
                    _setGraphStyles({
                        ..._graphStyles,
                        backgroundColorShow: newValue,
                    });
                }
            }
        },

    }

    return (
        <div style={{ width: '100%', paddingTop: 'calc(80px)'}}>
            <FormArea report={report} graphStyle={graphStyle} />
            <ChartArea report={report} graphStyle={graphStyle} />
        </div>
    );
}