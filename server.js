const express = require('express');
const connect = require('./config/db');

connect();

const app = express()

app.use('/api/upload',require("./routes/file"));

app.listen(4000,()=>{
    console.log("Srever Runing ⚡️");
})