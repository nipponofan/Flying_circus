const express = require("express")
const connection = require('../../config/config')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Route = /wild_flying_circus").status(200)
})

//Routes "Get"//

// get all tours//

router.get('/tours', (req, res) => {
    const tours = req.body
    connection.query('SELECT * FROM tour', tours,(err, results)=>{
    if(err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des tournées')
    } else {
        res.json(results)
    }
    })
})

router.get('/representations/:tour_name', (req, res) => {
    const representation = req.params.tour_name
    connection.query('SELECT * FROM representation where tour_name = ? ', [representation],(err, results)=>{
    if(err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des représentations')
    } else {
        res.json(results)
    }
    })
})

module.exports = router