let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: {
        app: './App/App.tsx'
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[hash].bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.png', '.jpg']
    },

    resolveLoader: {
        modules: [path.resolve(__dirname, 'node_modules')]
    },

    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: {
                    loader: 'url-loader?limit=10000'
                },
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './App/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    mode: 'development',

    devtool: 'inline-source-map'

};