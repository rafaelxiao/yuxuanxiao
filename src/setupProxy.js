const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('https://datacenter-web.eastmoney.com/api/data/v1/get', {
            target: 'https://datacenter-web.eastmoney.com/api/data/v1/get',
            changeOrigin: true,
        }),

        createProxyMiddleware('https://www.chinamoney.com.cn/ags/ms/cm-u-bk-shibor/ShiborHis?lang=cn', {
            target: 'https://www.chinamoney.com.cn/ags/ms/cm-u-bk-shibor/ShiborHis?lang=cn',
            changeOrigin: true,
        }),
    )
}