module.exports = {
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : process.env.DATABASE_USER || 'postgres',
    password : process.env.DATABSE_PASSWORD || '',
    database : process.env.DATABASE_URL || 'mealplanner_dev',
    charset  : 'utf8'
  },
  useNullAsDefault: true,
  directory: './migrations'
}
