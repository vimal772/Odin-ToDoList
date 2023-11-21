const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname,'dist'),
    },
    devtool: 'inline-source-map',
    module : {
        rules : [
            {
                test :/\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test :/\.(png|jpg|jpeg|gif)$/,
                type : 'asset/resource',
            },
            {
                test : /\.svg$/,
                use : 'file-loader',
            },
        ]
    }
}