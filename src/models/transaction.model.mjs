const transaction = (sequelize, Sequelize) => {
    const Transaction = sequelize.define('transactions', {
        status: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Transaction
}

export default transaction