const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development'
const devtool = devMode ? 'source-map' : false

module.exports = {
	mode,
	target: 'web',
	devtool,
	devServer: {
		port: 3000,
		open: true,
	},
	entry:
		["@babel/polyfill", path.resolve(__dirname, 'src', 'index.js')],
	output: {
		path: path.resolve(__dirname, 'cv/cv'),
		clean: true,
		filename: 'index.js',
		assetModuleFilename: 'assets/[name][ext]'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		}),

		new MiniCssExtractPlugin({
			filename: 'index.css'
		}),
		new CopyWebpackPlugin({
			patterns: [
				// {
				// 	from: 'src/fonts',
				// 	to: 'fonts',
				// 	globOptions: {
				// 		ignore: ['*.txt'], // список файлов, которые не нужно копировать
				// 	},
				// },
				{from: "src/img", to: "assets"},
			],
		}),

	],
	module:
		{
			rules: [
				{
					test: /\.html$/i,
					loader: 'html-loader'
				},
				{
					test: /\.s[ac]ss$/i,
					use: [MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [require('postcss-preset-env')]
								}
							}
						},
						"sass-loader",
					],
				},
				{
					test: /\.(?:js|mjs|cjs)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {targets: "defaults"}]
							]
						}
					}
				},
				{
					test: /\.(jpe?g|png|webp|gif|svg|ico)$/i,
					use: [{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75
							}
						}
					}],
					type: 'asset/resource'

				}
			]
		}
	,


}
;
