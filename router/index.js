const express = require('express')
const router = express.Router()

const meja = require('./meja')

router.use('/meja', meja)

module.exports = router