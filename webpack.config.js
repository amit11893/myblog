var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './client/index.jsx',
    ],
    output: {
        path: path.join(__dirname, '/server/public/js/'),
        filename: 'bundle.js',
        publicPath: 'server/public/js/',
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            'env',
                        ],
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    }
};