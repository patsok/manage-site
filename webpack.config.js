const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      index: './src/index/js/index.js',
      nav: './src/nav/js/nav.js',
      testimonials: './src/testimonials/js/swiper.js',
      footer: './src/footer/js/footer.js',
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
        template: "./src/index/html/index.html"
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
              test: /\.html$/i,
              loader: 'html-loader',
            }
          ]
    }
};