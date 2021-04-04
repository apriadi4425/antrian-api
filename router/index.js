const express = require('express')
const router = express.Router()

const meja = require('./meja')
const data = require('./data')
const sidang = require('./sidang')

router.use('/meja', meja)
router.use('/data', data)
router.use('/sidang', sidang)

module.exports = router
