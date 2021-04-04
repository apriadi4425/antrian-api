const models = require('../models/sipp')
const moment = require('moment')
const {Op} = require('sequelize')

exports.getJadwalSidang = (req, res) => {
    models.JadwalSidang.findAll({
        include : 'perkara',
        where : {
            tanggal_sidang : {
                [Op.eq] : moment('2021-04-06').format('YYYY-MM-DD')
            }
        }
    }).then(result => {
        res.send({
            status : 'sukses',
            data : result
        })
    })
}
