const models = require('../models')


exports.PanggilMejaPtsp = (req, res) => {
    models.DataMeja.findAll({raw : true, where : {tv : 1}})
        .then(result => {
            res.send({
                status : 'sukses',
                data : result
            })
        }).catch(err => {
            res.status(500).send({
                status : 'error',
                data : err
            })
        })
}
