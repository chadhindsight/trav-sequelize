const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Gig = require('../models/Gig')

// Pertains to /gigs
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            console.log(gigs)
            res.send({ msg: 'Gigass' })
        })
        .catch(err => console.log(err))
})

module.exports = router;