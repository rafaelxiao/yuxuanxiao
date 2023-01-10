const eastMoneyUrl = 'https://datacenter-web.eastmoney.com/api/data/v1/get';
const shiborUrl = 'https://www.chinamoney.com.cn/ags/ms/cm-u-bk-shibor/ShiborHis?lang=cn';

const PostUrls = {
    // shibor: 'https://www.chinamoney.com.cn/ags/ms/cm-u-bk-shibor/ShiborHis?lang=cn',

    shibor: {
        url: shiborUrl,
        params: {
        },
    },

    m2: {
        url: eastMoneyUrl,
        params: {
            pageNumber: 1,
            sortColumns: 'REPORT_DATE',
            sortTypes: -1,
            pageSize: 30,
            reportName: 'RPT_ECONOMY_CURRENCY_SUPPLY',
            columns: 'REPORT_DATE,TIME,BASIC_CURRENCY,BASIC_CURRENCY_SAME,BASIC_CURRENCY_SEQUENTIAL,CURRENCY,CURRENCY_SAME,CURRENCY_SEQUENTIAL,FREE_CASH,FREE_CASH_SAME,FREE_CASH_SEQUENTIAL',
        }
    },

    pmi: {
        url: eastMoneyUrl,
        params: {
            pageNumber: 1,
            sortColumns: 'REPORT_DATE',
            sortTypes: -1,
            pageSize: 60,
            reportName: 'RPT_ECONOMY_PMI',
            columns: 'REPORT_DATE,TIME,MAKE_INDEX,MAKE_SAME,NMAKE_INDEX,NMAKE_SAME',
        }
    },

    expo: {
        url: eastMoneyUrl,
        params: {
            pageNumber: 1,
            sortColumns: 'REPORT_DATE',
            sortTypes: -1,
            pageSize: 60,
            reportName: 'RPT_ECONOMY_CUSTOMS',
            columns: 'REPORT_DATE,TIME,EXIT_BASE,IMPORT_BASE,EXIT_BASE_SAME,IMPORT_BASE_SAME,EXIT_BASE_SEQUENTIAL,IMPORT_BASE_SEQUENTIAL,EXIT_ACCUMULATE,IMPORT_ACCUMULATE,EXIT_ACCUMULATE_SAME,IMPORT_ACCUMULATE_SAME',
        }
    },

    faith: {
        url: eastMoneyUrl,
        params: {
            pageNumber: 1,
            sortColumns: 'REPORT_DATE',
            sortTypes: -1,
            pageSize: 60,
            reportName: 'RPT_ECONOMY_FAITH_INDEX',
            columns: 'REPORT_DATE,TIME,CONSUMERS_FAITH_INDEX,FAITH_INDEX_SAME,FAITH_INDEX_SEQUENTIAL,CONSUMERS_ASTIS_INDEX,ASTIS_INDEX_SAME,ASTIS_INDEX_SEQUENTIAL,CONSUMERS_EXPECT_INDEX,EXPECT_INDEX_SAME,EXPECT_INDEX_SEQUENTIAL',
        }
    },

    retail: {
        url: eastMoneyUrl,
        params: {
            pageNumber: 1,
            sortColumns: 'REPORT_DATE',
            sortTypes: -1,
            pageSize: 60,
            reportName: 'RPT_ECONOMY_TOTAL_RETAIL',
            columns: 'REPORT_DATE,TIME,RETAIL_TOTAL,RETAIL_TOTAL_SAME,RETAIL_TOTAL_SEQUENTIAL,RETAIL_TOTAL_ACCUMULATE,RETAIL_ACCUMULATE_SAME',
        }
    },

    deposit: {
        url: eastMoneyUrl,
        params: {
            pageNumber: 1,
            sortColumns: 'REPORT_DATE',
            sortTypes: -1,
            pageSize: 20,
            reportName: 'RPT_ECONOMY_FOREX_DEPOSIT',
            columns: 'REPORT_DATE,TIME,BASE,BASE_SAME,BASE_SEQUENTIAL,BASE_ACCUMULATE',
        }
    },

}

export default PostUrls;