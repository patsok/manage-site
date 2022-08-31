const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      index: './src/index.js',
      nav: './src/_sections/nav/nav.js',
      header: './src/_sections/header/header.js',
      testimonials: './src/_sections/testimonials/testimonials.js',
      footer: './src/_sections/footer/footer.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
    },
    optimization: {
      runtimeChunk: 'single'
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.html$/i,
              loader: 'html-loader',
            }
          ]
    }
};