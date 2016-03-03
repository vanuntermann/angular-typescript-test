var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: __dirname + '/src/index.ts'
    },

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: "/",
        contentBase: "build",
        pathinfo: true
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
            "usig.mapa.interactivo.js": __dirname + "/vendor/usig-3.1/usig.MapaInteractivo.min.js",
            "usig.punto.js": __dirname + "/vendor/usig-3.1/usig.Punto.min.js",
            "bootstrap.css": __dirname + "/node_modules/bootstrap/dist/css/bootstrap.css"
        }
    },

    module: {
        loaders: [
            {test: /\.html$/, loader: 'ngtemplate!html-loader'},
            {test: /\.ts$/, loader: 'ts-loader', exclude: [/node_modules/, __dirname + '/test']},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
            {test: /\.(png|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'angular test', template: 'index.html'}),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "window.jQuery": 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{from: "vendor/usig-3.1/images", to: "images"}])
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: '0.0.0.0',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000/*',
                secure: false
            }
        }
    }
};
