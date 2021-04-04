const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.use(cors({credentials : true}))

app.use('/api', router)

app.listen(8000)
