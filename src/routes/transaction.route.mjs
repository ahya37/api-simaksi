import controller from "../controllers/index.mjs";

const { transaction } = controller;

const TransactionRoute = (app) => {
    app.use(function(req, res, next){
        res.header(
            'Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept'
        )

        next()

        app.get('/api/transaction', transaction.index)
    })
}

export default TransactionRoute