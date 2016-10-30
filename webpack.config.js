/**
 * Created by mykhailo on 05.08.16.
 */
var webpack = require('webpack');

module.exports = {
    entry:"./src/main.js",
    output:{
        path:__dirname+'/public/js/',
        publicPath:'js/',
        filename:'main.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel",
                exclude:[/node_modules/,/public/],
                query:
                {
                    presets:['react']
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader!autoprefixer-loader",
                exclude:[/node_modules/,/public/]
            },
            {
                test:/\.png$/,
                loader:"url-loader&limit=10000&mimetype=image/png"
            },
            {
                test:/\.jsx$/,
                loader:"babel",
                exclude:[/node_modules/,/public/],
                query:
                {
                    presets:['react']
                }
            },
            {
                test:/\.json$/,
                loader:"json-loader"
            }
        ]
    }
};