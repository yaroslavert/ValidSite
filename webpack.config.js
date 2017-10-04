const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '/app/app.module.js'),
    devtool: "source-map",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'raw-loader'
                ]
            },
            // {
            //     exclude: /(node_modules|bower_components)/,
            //     test: /\.js$/,
            //     use: [
            //         'ng-annotate-loader',
            //         'babel-loader'
            //     ],
            // },
            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
                exclude: /node_modules(?!\/webpack-dev-server)/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html')
        }),
        new UglifyJSPlugin()
    ],
}