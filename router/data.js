const express = require('express')
const router = express.Router()

const DataController = require('../controller/DataController')

router.post('/', DataController.TambahDataAntrian)

module.exports = router