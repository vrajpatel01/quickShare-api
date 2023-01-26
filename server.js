const express = require('express');
const connect = require('./config/db');

connect();

const app = express()

app.set('view enggine','ejs');

app.use('/api/upload',require("./routes/file"));
app.use('/file',require('./routes/show'));
app.use('/file/download',require('./routes/download'))

app.listen(4000,()=>{
    console.log("Srever Runing ⚡️");
})