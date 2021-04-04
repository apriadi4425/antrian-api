const express = require('express')
const router = express.Router()

const meja = require('./meja')
const data = require('./data')

router.use('/meja', meja)
router.use('/data', data)

module.exports = router