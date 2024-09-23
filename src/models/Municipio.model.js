module.exports = (sequelize, DataTypes) => {
    const Municipio = sequelize.define('Municipio', {
        id_municipio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_municipio: {
            type: DataTypes.STRING,
        }
    }, { timestamps: false });

    Municipio.associate = function(models) {
        Municipio.hasMany(models.Direccion, {
            foreignKey: 'id_municipio'
        });
    };

    return Municipio;
};
