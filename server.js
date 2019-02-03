const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
//Inicando app
const app = express();
app.use(express.json());
app.use(cors());
//Iniciando o banco
mongoose.connect("mongodb://localhost:27017/nodeapi",{ useNewUrlParser:true });

require('./src/models/Products');

//Rotas
app.use("/api",require('./src/routes'));
app.listen(3001);