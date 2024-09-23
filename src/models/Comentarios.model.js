const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Comentarios = sequelize.define('Comentarios', {
  idComentarios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  idMascotas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Mascotas', 
      key: 'idMascotas'
    }
  },
  texto: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Comentarios',
  timestamps: false 
});

module.exports = Comentarios;
