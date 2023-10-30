/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const studentModel = (sequelize, DataTypes) => {
    const studentTable = sequelize.define('Student', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      notaPrimeiroSemestre: DataTypes.INTEGER,
      notaSegundoSemestre: DataTypes.INTEGER,
      professor: DataTypes.STRING,
      numeroSala: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'students',
    });
  
    return studentTable;
  };
  
  module.exports = studentModel;