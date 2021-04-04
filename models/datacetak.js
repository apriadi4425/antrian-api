'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataCetak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataCetak.init({
    nomor: DataTypes.INTEGER,
    kode: DataTypes.STRING,
    meja_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataCetak',
    tableName: 'cetak',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
  });
  return DataCetak;
};
