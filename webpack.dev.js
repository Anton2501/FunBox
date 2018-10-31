const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: [ 
        path.resolve(__dirname, './src/index.js')
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [
            path.resolve(__dirname, "src"),
            "node_modules"            
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        quiet: true,
        historyApiFallback: true,
        port: 3000,
        //host: '192.168.0.101',
        open: true
    },    
    module: {
        rules: [
            { 
                test: /\.(js|jsx)?$/, 
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-0']
                    }
                }
            },
            {   test: /\.(js|jsx)?$/, enforce: "pre", loader: "source-map-loader" },
            {
                test: /\.(sass|scss|css)?$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(jpe?g|jpg|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/[name].[ext]'
                        } 
                    },                    
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/fonts/[name].[ext]'
                        } 
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),   
        new SimpleProgressPlugin({
            progressOptions: {
                complete: chalk.bgGreen(' '),
                incomplete: chalk.bgBlack(' ')
            }  
        }),
        new FriendlyErrorsPlugin({
            clearConsole: true
        })         
    ]
}