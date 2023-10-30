// const config = {
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE || 'projetogeneration_db',
//   host: process.env.MYSQL_HOST,
//   dialect: 'mysql',
// };

// module.exports = {
//   development: config,
//   test: config,
//   production: config,
// };

const config = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '123456',
  database: process.env.MYSQLDATABASE || 'projetogeneration_db',
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || 3306,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};