const dbConnection = {
    development : {
        username: 'root',
        passwrod: '',
        database: 'api-simaksi',
        port:3306,
        dialect: 'mysql'
    },
    prod : {
        username: '',
        passwrod: '',
        database: 'api-simaksi',
        port:3306,
        dialect: 'mysql'
}
}

export default dbConnection