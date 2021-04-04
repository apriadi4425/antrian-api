const express = require('express')
const router = express.Router()

const SidangController = require('../controller/SidanController')

router.get('/', SidangController.getJadwalSidang)

module.exports = router
