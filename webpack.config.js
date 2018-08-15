const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js',
        path: path.join(__dirname, 'build/js')
    },
    module: {
        rules:[
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    devtool: 'sourcemap'
}