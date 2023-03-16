import React from "react";


function InputArea({ value, setValue, inputWidth }) {
    var inputStyle = {
        width: inputWidth === null ? 130 : inputWidth,
        height: 20,
    };
    return <input value={value}
        style={inputStyle}
        onChange={({ target: { value } }) => {
            setValue(value);
        }
        } />;
}



function TextArea({ label, value, setValue, inputWidth }) {
    var blockStyle = {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '5px',

    }

    var textStyle = {
        fontSize: '12px',
        lineHeight: '20px',
        width: '80px',
        textAlign: 'left',
    }

    return (
        <div style={blockStyle}>
            <div style={textStyle}>{label}</div>
            <InputArea value={value} setValue={setValue} inputWidth={inputWidth} />
        </div>
    )
}


function DoubleTextArea({ name, setName, value, setValue, inputWidth }) {
    var blockStyle = {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '5px',
    }

    return (
        <div style={blockStyle}>
            <InputArea value={name} setValue={setName} inputWidth={inputWidth} />
            <div style={{ width: '10px' }}></div>
            <InputArea value={value} setValue={setValue} inputWidth={inputWidth} />
        </div>
    )
}

function SectionTitle( {name} ) {
    var style = {
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        fontSize: '14px',
        fontWeight: 'bold',
    }
    return (
        <div style={style}>
            {name}
        </div>
        
    )
}

export default function FormArea({ report, graphStyle }) {

    var areaStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        padding: '20px',
    }

    var areaStyleHorizontal = {
        display: 'flex',
        flexDirection: 'row',
    }

    var areaBlockStyle = {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '20px',
        paddingRight: '20px',
        
    }

    return (
        <div style={areaStyle}>
            <div style={areaBlockStyle}>
                <TextArea label='标题' value={report.title} setValue={report.setTitle} inputWidth={300} />
            </div>

            <div style={{height: '20px'}}></div>

            <div style={areaStyleHorizontal}>
                <div style={areaBlockStyle}>
                    <SectionTitle name={'收入项'} />
                    {
                        [0, 1, 2, 3, 4].map((e) => {
                            return <DoubleTextArea
                                name={report.getRevenueName(e)}
                                setName={report.setRevenueName(e)}
                                value={report.getRevenueShow(e)}
                                setValue={report.setRevenue(e)}
                                key={e}
                            />
                        })
                    }

                </div>

                <div style={areaBlockStyle}>
                    <SectionTitle name={'支出项'} />
                    <TextArea label='主营业务成本' value={report.cogsShow} setValue={report.setCogs} />

                    {
                        [0, 1, 2, 3, 4].map((e) => {
                            return <TextArea
                                label={report.getExpenseName(e)}
                                value={report.getExpenseShow(e)}
                                setValue={report.setExpense(e)}
                                key={e}
                            />
                        })
                    }
                </div>


                <div style={areaBlockStyle}>
                    <SectionTitle name={'税费及投资'} />
                    <TextArea label='税收支出' value={report.taxShow} setValue={report.setTax} />
                    <TextArea label='投资收益' value={report.investmentShow} setValue={report.setInvestment} />
                </div>

                <div style={areaBlockStyle}>
                    <SectionTitle name={'颜色设定'} />
                    <TextArea label='背景颜色' value={graphStyle.backgroundColor} setValue={graphStyle.setBackgroundColor} />
                    <TextArea label='收入颜色' value={graphStyle.incomeColor} setValue={graphStyle.setIncomeColor} />
                    <TextArea label='利润颜色' value={graphStyle.profitColor} setValue={graphStyle.setProfitColor} />
                    <TextArea label='支出颜色' value={graphStyle.expenseColor} setValue={graphStyle.setExpenseColor} />
                </div>

                <div style={areaBlockStyle}>
                    <SectionTitle name={'样式设定'} />
                    <TextArea label='图像大小' value={graphStyle.height} setValue={graphStyle.setHeight} />
                    <TextArea label='左右距离' value={graphStyle.graphPaddingH} setValue={graphStyle.setGraphPaddingH} />
                    <TextArea label='上下距离' value={graphStyle.graphPaddingV} setValue={graphStyle.setGraphPaddingV} />
                    <TextArea label='标题大小' value={graphStyle.titleFontSize} setValue={graphStyle.setTitleFontSize} />
                    <TextArea label='标题位置' value={graphStyle.titlePaddingTop} setValue={graphStyle.setTitlePaddingTop} />
                    <TextArea label='单位' value={graphStyle.unit} setValue={graphStyle.setUnit} />
                </div>

            </div>




        </div>
    );
}