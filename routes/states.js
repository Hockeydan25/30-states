let express = require('express')
let States = require('../models').States

let router = express.Router()

router.get('/states', function(req,res, next) {
    States.findAll({order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch(err => next(err)) //next is a internal function
})

module.exports = router //going to emit this..access