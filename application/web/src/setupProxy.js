const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(createProxyMiddleware('/api',
        {
            target: 'http://localhost:8000',
            changeOrigin: true
        }
    ));
    app.use(createProxyMiddleware(['/ws/public_poll', '/ws/admin_poll'],
        {
            target: 'ws://localhost:8000',
            ws: true
        }
    ));
}

