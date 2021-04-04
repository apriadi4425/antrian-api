'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataAntrian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataAntrian.init({
    tanggal: DataTypes.DATEONLY,
    nomor: DataTypes.INTEGER,
    meja_id: DataTypes.INTEGER,
    meja_nama: DataTypes.STRING,
    telpon: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DataAntrian',
    tableName: 'data',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
  });
  return DataAntrian;
};
