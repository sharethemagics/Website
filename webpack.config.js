var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var htmlWebPackPlugin = require('html-webpack-plugin');
var CleanWebPackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './webpack.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/, // Check for all js files
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            },
             {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader?name=[name].[ext]&outputPath=images/', {
                      loader: 'image-webpack-loader',
                      options: {
                        gifsicle: {
                          interlaced: false,
                        },
                        optipng: {
                          optimizationLevel: 7,
                        },
                        pngquant: {
                          quality: '65-90',
                          speed: 4
                        },
                        mozjpeg: {
                          progressive: true,
                          quality: 65
                        },
                        webp: {
                          quality: 75
                        }
                      }
                    }
                  ]
            }, 
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
        new htmlWebPackPlugin({
            template:'index.html'
        }),
        new CleanWebPackPlugin(__dirname + '/dist'),
        new CopyWebpackPlugin ([{from: 'js/wow.min.js'}])
    ]
}