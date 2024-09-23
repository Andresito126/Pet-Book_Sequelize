module.exports = (sequelize, DataTypes) => {
    const Ciudad = sequelize.define('Ciudad', {
        id_ciudad: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_ciudad: {
            type: DataTypes.STRING,
        }
    },{ timestamps: false },);

    Ciudad.associate = function(models) {
        Ciudad.hasMany(models.Direccion, {
            foreignKey: 'id_ciudad'
        });
    }

    return Ciudad;
}