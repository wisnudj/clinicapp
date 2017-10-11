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

  Periksa.associate = (model) => {
    Periksa.belongsTo(model.Pasien)
    Periksa.belongsTo(model.Dokter)
    Periksa.belongsTo(model.Diagnosis)
  }
  return Periksa;
};
