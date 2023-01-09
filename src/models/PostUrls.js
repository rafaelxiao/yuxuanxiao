const PostUrls = {
    shibor: 'https://www.chinamoney.com.cn/ags/ms/cm-u-bk-shibor/ShiborHis?lang=cn',

    pmi: 'https://datacenter-web.eastmoney.com/api/data/v1/get?columns=REPORT_DATE%2CTIME%2CMAKE_INDEX%2CMAKE_SAME%2CNMAKE_INDEX%2CNMAKE_SAME&pageNumber=1&pageSize=30&sortColumns=REPORT_DATE&sortTypes=-1&reportName=RPT_ECONOMY_PMI',

    m2: 'https://datacenter-web.eastmoney.com/api/data/v1/get?columns=REPORT_DATE%2CTIME%2CBASIC_CURRENCY%2CBASIC_CURRENCY_SAME%2CBASIC_CURRENCY_SEQUENTIAL%2CCURRENCY%2CCURRENCY_SAME%2CCURRENCY_SEQUENTIAL%2CFREE_CASH%2CFREE_CASH_SAME%2CFREE_CASH_SEQUENTIAL&pageNumber=1&pageSize=20&sortColumns=REPORT_DATE&sortTypes=-1&reportName=RPT_ECONOMY_CURRENCY_SUPPLY',

    expo: 'https://datacenter-web.eastmoney.com/api/data/v1/get?columns=REPORT_DATE%2CTIME%2CEXIT_BASE%2CIMPORT_BASE%2CEXIT_BASE_SAME%2CIMPORT_BASE_SAME%2CEXIT_BASE_SEQUENTIAL%2CIMPORT_BASE_SEQUENTIAL%2CEXIT_ACCUMULATE%2CIMPORT_ACCUMULATE%2CEXIT_ACCUMULATE_SAME%2CIMPORT_ACCUMULATE_SAME&pageNumber=1&pageSize=60&sortColumns=REPORT_DATE&sortTypes=-1&reportName=RPT_ECONOMY_CUSTOMS',

}

export default PostUrls;