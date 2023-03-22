import FRItem from "./FRItem";

const defaultReport = [
    new FRItem({
        id: 'revenue01',
        name: '营收项目1',
        value: 0,
        type: 'revenue',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'revenue02',
        name: '营收项目2',
        value: 0,
        type: 'revenue',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'revenue03',
        name: '营收项目3',
        value: 0,
        type: 'revenue',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'revenue04',
        name: '营收项目4',
        value: 0,
        type: 'revenue',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'revenue05',
        name: '营收项目5',
        value: 0,
        type: 'revenue',
        validator: (value) => !isNaN(parseFloat(value)),
    }),

    new FRItem({
        id: 'cogs01',
        name: '主营业务成本',
        value: 0,
        type: 'cogs',
        validator: (value) => !isNaN(parseFloat(value)),
    }),

    new FRItem({
        id: 'cogs02',
        name: '主营业务成本项目2',
        value: 0,
        type: 'cogs',
        validator: (value) => !isNaN(parseFloat(value)),
    }),

    new FRItem({
        id: 'cogs03',
        name: '主营业务成本项目3',
        value: 0,
        type: 'cogs',
        validator: (value) => !isNaN(parseFloat(value)),
    }),

    new FRItem({
        id: 'cogs04',
        name: '主营业务成本项目4',
        value: 0,
        type: 'cogs',
        validator: (value) => !isNaN(parseFloat(value)),
    }),

    new FRItem({
        id: 'cogs05',
        name: '主营业务成本项目5',
        value: 0,
        type: 'cogs',
        validator: (value) => !isNaN(parseFloat(value)),
    }),

    new FRItem({
        id: 'expense01',
        name: '财务费用',
        value: 0,
        type: 'expense',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'expense02',
        name: '销售费用',
        value: 0,
        type: 'expense',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'expense03',
        name: '管理费用',
        value: 0,
        type: 'expense',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'expense04',
        name: '研发费用',
        value: 0,
        type: 'expense',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'expense05',
        name: '折旧',
        value: 0,
        type: 'expense',
        validator: (value) => !isNaN(parseFloat(value)),
    }),

    new FRItem({
        id: 'tax',
        name: '税收',
        value: 0,
        type: 'tax',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'investment',
        name: '投资',
        value: 0,
        type: 'investment',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
    new FRItem({
        id: 'other',
        name: '营业外',
        value: 0,
        type: 'other',
        validator: (value) => !isNaN(parseFloat(value)),
    }),
];

export default defaultReport;