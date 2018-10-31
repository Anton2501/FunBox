module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['ie 11', 'last 4 version']
        }),
        require('postcss-flexbugs-fixes')
    ]
}