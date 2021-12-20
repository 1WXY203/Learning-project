    module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://tingapi.ting.baidu.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}