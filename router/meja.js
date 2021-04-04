const express = require('express')
const router = express.Router()

const MejaController = require('../controller/MejaController')

router.get('/', MejaController.PanggilMejaPtsp)

module.exports = router