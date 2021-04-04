'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Perkara extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Perkara.init({
        pihak1_text: DataTypes.STRING,
        nomor_perkara : DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Perkara',
        tableName: 'perkara',
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
    });
    return Perkara;
};
