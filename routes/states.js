let express = require('express')
let States = require('../models').States

let router = express.Router()

//fetch all of the states
router.get('/states', function(req,res, next) {
    States.findAll({order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch(err => next(err)) //next is a internal function
})
//patch route to update a state -visited check or unchecked.
router.patch('/states/:name', function(req, res, next) { //function here will find any state, and visited or not w/checked.  
    let stateName =req.params.name
    let stateVisited = req.body.visited

    States.update( { visited: stateVisited}, {where: {name: stateName}}) //database query update. 
            .then( rowsUpdated => { //promise return
                let numberOfRowsUpdated = rowsUpdated[0]
                if (numberOfRowsUpdated == 1) {
                    return res.send('Okay') //sucess response.
                }
                return res.status(404).send('State not found')//no stateName like qwerty.
            }) 
            .catch( err => next(err))//catch is a function.
            //error message other problem,calls: giving user the reuseable message in our code 500 server error.
})

module.exports = router //going to emit this..access.