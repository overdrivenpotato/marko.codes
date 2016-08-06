import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import WebpackShellPlugin from 'webpack-shell-plugin'
import path from 'path'

const posts = path.resolve('./posts')

export default {
    context: path.resolve('./src'),
    entry: [
        'babel-polyfill',
        './main.styl',
        './main.jsx',
    ],
    output: {
        path: path.resolve('./dist'),
        filename: '[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhiteSpace: true,
            },
        }),
        new ExtractTextPlugin('[hash].css'),
        new CopyWebpackPlugin([
            { from: path.resolve('./assets'), to: 'assets' },
        ]),
        new WebpackShellPlugin({
            dev: false,
            onBuildEnd: 'npm run flow',
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        process.env.NODE_ENV === 'production'
            ? new webpack.optimize.UglifyJsPlugin()
            : undefined,
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('css!postcss!stylus'),
            },
            {
                test: /\.(jpg|svg)/,
                loader: 'url?limit=50000'
            },
            {
                test: /posts\/index\.toml$/,
                loader: `${posts}/loader.js`
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl', '.jpg', '.svg'],
        alias: {
            'assets': path.resolve('./assets'),
            'posts': posts + '/index.toml'
        }
    }
}
