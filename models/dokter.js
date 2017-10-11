'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dokter = sequelize.define('Dokter', {
    name: DataTypes.STRING,
    spesialis: DataTypes.STRING,
    jeniskelamin: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Dokter.associate = (model) => {
    Dokter.belongsToMany(model.Pasien, {through: 'Periksa'})
    Dokter.belongsToMany(model.Diagnosis, {through: 'Periksa'})
    Dokter.hasMany(model.Periksa)
  }
  return Dokter;
};
