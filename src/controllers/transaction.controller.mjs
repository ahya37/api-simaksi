import db from '../models/index.mjs';

const Transaction = db.transaction;

const index = (req, res) => {
    Transaction.findAll()
        .then((result) => {
            res.status(200).json({
                data: result,
                message:'show transaction',
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            })
        })
}

const transaction = {
    index
}

export default transaction;