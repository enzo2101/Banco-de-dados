const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',
        password : 'senac@root',
        database : 'escola'
    }
});

module.exports = knex;