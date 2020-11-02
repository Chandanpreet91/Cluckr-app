// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'cluckr_db',
      username:"oem",
      password:"Jatin@123"
    },
    migrations: {
      tablename:"migrations",
      directory:"./db/migrations"
    },
    seeds: {
      directory:"./db/seeds"
    },
  },
};
