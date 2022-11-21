import { Sequelize } from 'sequelize';
import dbConnection from './db.mjs';

const {development} = dbConnection;

const config = {
    username: development.username,
    password: development.passwrod,
    database: development.database,
    host: development.host,
    port: development.port,
    dialect: development.dialect,
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: config.dialect,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }

);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db