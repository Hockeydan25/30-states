module.exports = {
    devServer:{
        //requests from client to '/api/states'
        //tells dev servers to use'http:... 3000/api/states' 3000 webserver
        proxy: 'http://127.0.0.1:3000'
    }
}
//look at start restart server local.