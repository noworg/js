var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// process.env.NODE_ENV  product or dev

var config = {
    //watch: true,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        all: './js/Menu/Menu.jsx',
        react: ['react','redux','react-redux','redux-thunk','react-router','react-dom','react-router-redux'],
        //redux:['react-redux'],
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/,
                //loader: 'style!css',
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                //loader: 'style!css!sass',
                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "css-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
            },
            {
                test: /\.svg$/,
                loader: 'url-loader?limit=8192',
            }
        ]
    }
    ,

    plugins: [
        //分隔文件
        new webpack.optimize.CommonsChunkPlugin('react',  'react.js'),
        new ExtractTextPlugin("aa.css"),
        //压缩 提前common文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        //new webpack.optimize.UglifyJsPlugin({
        //    mangle: {
        //        except: ['import', '$', 'export']
        //    },
        //    compress: {
        //        warnings: false
        //    }
        //}),
        //new webpack.optimize.CommonsChunkPlugin('common.js'),

        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),

        // 启用热替换,仅开发模式需要
        //new webpack.HotModuleReplacementPlugin(),

        // 允许错误不打断程序，,仅开发模式需要
        //new webpack.NoErrorsPlugin()
    ]
};
module.exports = config;
