const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
const backend = require('./Backend/ROUTES/portifolio');


app.listen(process.env.PORT);
app.use('/backend',backend);


app.get('/',(req,res)=>{
    res.send("Tudo rodando pelada !"+ process.env.MONGO_USER)
})  

