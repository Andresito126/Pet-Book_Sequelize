module.exports = (sequelize, DataTypes) =>{
    const Mascotas = sequelize.define('Mascotas',{
        id_mascota:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_categoria:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        id_sexo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        id_dueño: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Dueño',
                key: 'id_duño'
            }
        },
        id_direccion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Direccin',
                key: 'id_direccion'
            }
        },
        id_sexo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Sexo',
                key: 'id_sexo'
            }
        },
    },{ timestamps: false },);


    
    return Mascotas;
}