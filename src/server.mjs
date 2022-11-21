import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/index.mjs';
import route from './routes/index.mjs';

const app  = express();
dotenv.config();

let whitelist = ['http://localhost:8000'];

let corsOptions = {
    origin: function(origin, callback){
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

db.sequelize
    .sync()
    .then(() => {
        console.log('database connected')
    }).catch((err) => {
        console.log(err.message)
    })



app.get('/', (req, res) => {
    res.json({
        message: 'server is running'
    })
})

route.transaction(app)

const PORT = process.env.APP_PORT

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
})