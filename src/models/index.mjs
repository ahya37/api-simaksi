import db from '../config/database.mjs'
import transaction from './transaction.model.mjs'

db.transaction = (transaction)(db.sequelize, db.Sequelize)

export default db