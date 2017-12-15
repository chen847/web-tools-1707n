/**
 * https://github.com/thu/web-tools-1707n
 * Date: 2017/12/15 16:50
 */

module.exports = {
    entry: __dirname + '/app/main.js',// 项目的入口文件
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    } // webpack 打包后生成的文件
};