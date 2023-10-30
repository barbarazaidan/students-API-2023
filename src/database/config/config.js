// const config = {
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE || 'projetogeneration_db',
//   host: process.env.MYSQL_HOST,
//   dialect: 'mysql',
// };

const config = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE || 'projetogeneration_db',
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};