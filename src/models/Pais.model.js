module.exports = (sequelize, DataTypes) => {
    const Pais = sequelize.define('Pais', {
        id_pais: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_pais: {
            type: DataTypes.STRING,
        }
    },{ timestamps: false },);

    Pais.associate = function(models) {
        Pais.hasMany(models.Direccion, {
            foreignKey: 'id_pais'
        });
    }

    return Pais;
};
