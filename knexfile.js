// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'tea'
    },
    seeds: {
          directory: './seeds'
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: "postgres://ibocgquuxzgjgi:sdUiiSOfVxB2WvkmdUzg2g7PwI@ec2-54-163-248-218.compute-1.amazonaws.com:5432/dar5o42j28q45p",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
