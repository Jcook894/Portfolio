var ghpages = require('gh-pages');
var path = require('path');


var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
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
