module.exports = (sequelize, DataTypes) => {
    const Dueño = sequelize.define('Dueño', {
        id_dueño: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contraeña: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },{ timestamps: false },);


    return Dueño;
};