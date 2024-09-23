module.exports = (sequelize, DataTypes) => {
    const Direccion = sequelize.define('Direccion', {
        id_direccion: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_pais: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pais',
                key: 'id_pais'
            }
        },
        id_estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Estado',
                key: 'id_estado'
            }
        },
        id_municipio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Municipio',
                key: 'id_municipio'
            }
        },
        id_ciudad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Ciudad',
                key: 'id_ciudad'
            }
        }
    }, { timestamps: false });

    return Direccion;
};
