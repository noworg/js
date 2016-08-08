# webpack

标签（空格分隔）： `工具`

---
###dev模式

####1、production模式

#####webpack配置：
devtool：sourcemaps选项
entry:入口文件地址
```js
//code
entry: {
    all: './js/Menu/Menu.jsx',
    react: ['react','react-dom'],
}
```
output:输出文件地址
```js
var path = require("path");
var node_modules_dir = 
            path.resolve(__dirname, 'node_modules');
//code
output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js",
        publicPath: '/dist/'
    }
```

resolve:为省略后缀的引用自动添加后缀
```js
//code
resolve: {
    extensions: ['', '.js', '.jsx']
}
```
loaders:

```js
//分离css到单独文件中
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//code
module: {
    loaders: [
        {
            /**编译jsx,es6*/
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
            /**编译sass*/
            test: /\.scss$/,
            //loader: 'style!css!sass',
            loader: ExtractTextPlugin.extract("style-loader", "sass-loader", "css-loader")
        },
        {
             /**把小于8k的图片转换为base64*/
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192',
        },
        {
            test: /\.svg$/,
            loader: 'url-loader?limit=8192',
        }
    ]
}
```

plugins:插件
```js
 plugins: [
    //分隔文件插件 提取react
    new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
    //将css代码分离到单独文件中
    new ExtractTextPlugin("[name].css"),
    //压缩
    new webpack.optimize.UglifyJsPlugin({
        //    mangle: {
        //        except: ['import', '$', 'export']
        //    },
        compress: {
            warnings: false
        }
    }),

    new webpack.DefinePlugin({
        //产品模式
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    }),
    new webpack.NoErrorsPlugin()
]

```
启动
> webpack --config webpack.config.js --progress --profile --colors -d

 1. --d 启用sourcemaps
 2. --watch 启用文件监听
 3. --progress进度
 4. --profile信息输出
 5. --colors输出带颜色

####2、development模式
#####webpack配置：
更改plugins配置
```js
plugins: [
    //分隔文件
    new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
    new ExtractTextPlugin("aa.css"),
    new webpack.NoErrorsPlugin()
]
```
启动
> webpack --config webpack.config.js --progress --profile --colors --d --watch


####2、热部署模式
#####webpack配置：
设置监听
```js
watch: true
```
更改
```js
 entry: [
        //添加热部署配置
         'webpack-dev-server/client?http://localhost:3000',
         'webpack/hot/only-dev-server',
         './js/Menu/Menu.jsx'
         ]
```
更改plugins配置
```js
plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),
    //分隔文件
    //new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
    //热部署
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
]
```
#####server配置：
```js
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.server.config');
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(3000, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
```




 
