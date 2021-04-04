const models = require('../models/antrian')
const moment = require('moment')
const { Op } = require('sequelize')



exports.TambahDataAntrian = async (req, res) => {
    let NomorAntrian = 1
    const {meja_id, nomor_telpon} = req.body

    if(nomor_telpon === '') res.status(503).send({message : 'Nomor Telpon Harus Diisi'})

    const meja = await models.DataMeja.findOne({where : {id : meja_id}})
    const data = await models.DataAntrian.findOne({
        where : {
            meja_id : meja.id,
            tanggal : {
                [Op.eq] : moment().format('YYYY-MM-DD')
            }
        },
        order: [
            ['id', 'DESC'],
        ]
    })
    NomorAntrian = data === null ? 1 : data.nomor + 1
    await models.DataAntrian.create({
        tanggal : moment().format('YYYY-MM-DD'),
        nomor : NomorAntrian,
        meja_id,
        meja_nama : meja.nama,
        telpon : '',
        status : 1
    }).then(async () => {
        await models.DataCetak.update({
            nomor : NomorAntrian,
            kode : meja.kode,
            meja_id : meja.id
        },
        {where : { id : 1 }})
        .then(() => {
            res.send({
                message : 'sukses'
            })
        }).catch(() => {
            res.status(500).send({
                message : 'error'
            })
        })
    }).catch(() => {
        res.status(500).send({
            message : 'error'
        })
    })
}
