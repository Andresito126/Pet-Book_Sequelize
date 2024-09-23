module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define('Estado', {
        id_estado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estado_name: {
            type: DataTypes.STRING,
        }
    },{ timestamps: false },);

    Estado.associate = function(models) {
        Estado.hasMany(models.Direccion, {
            foreignKey: 'id_estado'
        });
    }

    return Estado;
}