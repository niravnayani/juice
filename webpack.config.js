var path = require("path");
var glob = require('glob');
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
	entry: {
		app: ["./src/main.js", "./src/main.scss"]
	},

	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "app.js"
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]"
					}
				}
			}
		]
    },
    
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
        }),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, '*.html')),
        })
	]
};
