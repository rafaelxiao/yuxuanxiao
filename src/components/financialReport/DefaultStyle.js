import FRItem from "./FRItem";

const defaultStyle = [
    new FRItem({
        id: 'waterMark',
        name: '水印',
        value: '七海原创',
        type: null,
        validator: (_) => true,
    }),
    new FRItem({
        id: 'title',
        name: '标题',
        value: '',
        type: null,
        validator: (_) => true,
    }),
    new FRItem({
        id: 'expenseColor',
        name: '支出颜色',
        value: '#17A954',
        type: null,
        validator: (value) => value.length === 7 && value.charAt(0) === '#',
    }),
    new FRItem({
        id: 'incomeColor',
        name: '收入',
        value: '#CCCCCC',
        type: null,
        validator: (value) => value.length === 7 && value.charAt(0) === '#',
    }),
    new FRItem({
        id: 'profitColor',
        name: '利润颜色',
        value: '#EC700C',
        type: null,
        validator: (value) => value.length === 7 && value.charAt(0) === '#',
    }),
    new FRItem({
        id: 'backgroundColor',
        name: '背景颜色',
        value: '#F3F3F3',
        type: null,
        validator: (value) => value.length === 7 && value.charAt(0) === '#',
    }),
    new FRItem({
        id: 'titleFontSize',
        name: '标题字体大小',
        value: 80,
        type: null,
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'titlePaddingTop',
        name: '标题上边距',
        value: 10,
        type: null,
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'labelFontSize',
        name: '标签字体大小',
        value: 26,
        type: null,
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'valueFontSize',
        name: '值字体大小',
        value: 20,
        type: null,
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'height',
        name: '图表高度',
        value: 1800,
        type: null,
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'graphPaddingV',
        name: '上下边距',
        value: 20,
        type: null,
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'graphPaddingH',
        name: '左右边距',
        value: 10,
        type: null,
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'unit',
        name: '单位',
        value: '万',
        type: null,
        validator: (_) => true,
    }),
];

export default defaultStyle;