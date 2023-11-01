const config = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'root',
  database: process.env.MYSQLDATABASE || 'projetogeneration_db',
  host: process.env.MYSQLHOST || 'mysql-container',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};