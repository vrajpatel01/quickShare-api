const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

const connectDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL);

    mongoose.connection.once('open',(err)=>{
        console.log("DataBase Connected 😃")
    })
}

module.exports = connectDb;