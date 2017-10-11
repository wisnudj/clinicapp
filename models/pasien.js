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

  Pasien.associate = (model) => {
    Pasien.belongsToMany(model.Dokter, {through: 'Periksa'})
    Pasien.belongsToMany(model.Diagnosis, {through: 'Periksa'})
    Pasien.hasMany(model.Periksa)
  }
  return Pasien;
};
