'use strict';
module.exports = (sequelize, DataTypes) => {
  var Periksa = sequelize.define('Periksa', {
    PasienId: DataTypes.INTEGER,
    DokterId: DataTypes.INTEGER,
    DiagnosisId: DataTypes.INTEGER,
    tglperiksa: DataTypes.DATE,
    catatandokter: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Periksa;
};