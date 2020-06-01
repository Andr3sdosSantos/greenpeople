module.exports = {
  development: {
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    database: 'greenpeople',
    password: 'docker', // Colocar em uma pasta separada
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
