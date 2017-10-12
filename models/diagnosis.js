'use strict';
module.exports = (sequelize, DataTypes) => {
  var Diagnosis = sequelize.define('Diagnosis', {
    penyakit: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Diagnosis.associate = (model) => {
    Diagnosis.belongsToMany(model.Dokter, {through: 'Periksa'})
    Diagnosis.belongsToMany(model.Pasien, {through: 'Periksa'})
    Diagnosis.hasMany(model.Periksa)
  }

  return Diagnosis;
};
