const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
    mode: 'production',
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
        contentBase: path.resolve(__dirname, './build')
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
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // set to true if you want JS source maps
                uglifyOptions: {
                    output: {
                        comments: false
                    }                    
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { 
                    discardComments: { 
                        removeAll: true
                    }
                }
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin('build', {}),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './index.html',
            filename: 'index.html'
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