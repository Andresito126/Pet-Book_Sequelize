module.exports = (sequelize, DataTypes) => {
    const Sexo = sequelize.define('Sexo', {
        id_sexo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        n_sexo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    },{ timestamps: false },);


    return Sexo;
};