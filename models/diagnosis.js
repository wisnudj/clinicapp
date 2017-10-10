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
  return Diagnosis;
};