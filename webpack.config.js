const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
    },
    entry: './src/main.js',
    devServer: {
        static: './',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],
};

