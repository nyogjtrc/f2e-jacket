const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: ['./src/js/app.js', './src/css/app.css'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}

module.exports = config
