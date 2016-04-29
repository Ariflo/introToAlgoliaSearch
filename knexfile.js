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
    connection: "postgres://xnfrcvgwhbaupx:8mR-Vmm9oUN9VI8Tya_yc5pn5w@ec2-174-129-225-160.compute-1.amazonaws.com:5432/d6e86hkb5q6b13",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
