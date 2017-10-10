'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pasien = sequelize.define('Pasien', {
    name: DataTypes.STRING,
    jeniskelamin: DataTypes.STRING,
    usia: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pasien;
};