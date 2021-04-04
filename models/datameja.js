'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataMeja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataMeja.init({
    nama: DataTypes.STRING,
    kode: DataTypes.STRING,
    tv: DataTypes.INTEGER,
    ket: DataTypes.STRING,
    ket2: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataMeja',
  });
  return DataMeja;
};