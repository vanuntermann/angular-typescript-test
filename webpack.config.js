var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: __dirname + '/src/app/app.module.ts'
    },

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
            "usig.mapa.interactivo.js": __dirname + "/vendor/usig-3.1/usig.MapaInteractivo.min.js",
            "usig.punto.js": __dirname + "/vendor/usig-3.1/usig.Punto.min.js"
        }
    },

    module: {
        loaders: [
            {test: /\.html$/, loader: 'ngtemplate!html-loader'},
            {test: /\.ts$/, loader: 'ts-loader', exclude: [/node_modules/, __dirname + '/test']}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({title: 'angular test', template: 'index.html'}),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
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
