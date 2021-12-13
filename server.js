let express = require('express')
let path = require('path')
let states_api = require('./routes/states')

let app = express()

let vueAppPath = path.join(__dirname, 'client', 'dist' )
app.use(express.static(vueAppPath))// joining the build where vue app is

app.use(express.json() ) 

app.use('/api', states_api)

app.use(function(req,res,next) {
    res.status(404).send('Not Found Buddies')
})
//server issues, internal errors
app.use( function (err, req, res, next)  {
    console.log(err)
    res.status(500).send('Surfer error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on port', server.address().port)
})