var ghpages = require('gh-pages');
var path = require('path');


var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: '../dist/index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
        {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
        {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
        {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
        {test: /\.(jpe?g|png|gif)$/i, loader: 'dir=[../assets].[ext]'},
        {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
        {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']},
        {test: /\.json$/, loader: "json"},

         {
            test: /\.jsx?$|.(png|jpg)$/ ,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ],
      loader: [
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=25000'
        }
  ]
   }
};

module.exports = config;
