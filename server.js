const express = require("express");
const mongoose = require('mongoose');

//Inicando app
const app = express();
app.use(express.json());
//Iniciando o banco
mongoose.connect("mongodb://localhost:27017/nodeapi",{ useNewUrlParser:true });

require('./src/models/Products');

//Rotas
app.use("/api",require('./src/routes'));
app.listen(3001);