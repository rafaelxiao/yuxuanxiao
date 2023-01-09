export default function basicChartOps(title) {
    return {
        grid: {
            left: '10%',
            right: '10%',
        },
        title: {
            text: title,
            left: 'middle',
            top: '5%',
            textAlign: 'center'
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            left: 'center',
            bottom: '5%',
            itemWidth: 8,
            textStyle: {
                fontSize: 10,
            }
        },
    }
}