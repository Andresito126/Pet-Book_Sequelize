const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

db.Dueño = require('./Dueño.model')(sequelize, Sequelize);
db.Ciudad = require('./Ciudad.model')(sequelize, Sequelize);
db.Pais = require('./Pais')(sequelize, Sequelize);
db.Estado = require('./Estado.model')(sequelize, Sequelize);
db.Direccion = require('./Direccion')(sequelize, Sequelize);
db.Mascota = require('./Mascota')(sequelize, Sequelize);
db.Municipio = require('./Municipio')(sequelize, Sequelize);
db.Sexo = require('./Sexo')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

module.exports = db;
