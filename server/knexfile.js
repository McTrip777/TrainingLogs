// Update with your config settings.
const DBConnection = {
    host: 'heroku',
    database: 'user',
    username:'Jake',
    password: 'password'
  }
  
  const workoutDBConnection = process.env.DATABASE_URL || DBConnection
  
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './migrations/dev.sqlite3'
    },
    seeds: {
        directory: './seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: workoutDBConnection,
    migrations: {
      tableName: './migrations'
    }
  },
  seeds: {
    directory: './seeds'
  }
};
