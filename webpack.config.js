const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    },
                    // sass-loader
                    { loader: 'sass-loader' }
                ],
            }
        ]
    },
    output: {
        path: path.join(__dirname , 'src'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
