const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(path.resolve(__dirname + '/../www')));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, err => {
    if (err) {
        console.log(err);
    }

    console.info('The magic is happening on port', port);
});