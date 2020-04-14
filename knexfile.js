module.exports = {
  development: {
    client:'mysql',
    connection:{
      host: '192.168.55.10',
      user:'root',
      password:'root',
      database:'craiglist2',
    },
    migrations: {
      directory:__dirname + '/db/migrations'
    },
    seeds: {
      directory:__dirname+ '/db/seeds'
    }
  },
  production: {
    client: 'mysql',
    connection: '',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
}
