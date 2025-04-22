const express = require('express');
require('dotenv').config()
const app = express()
const path = require('path')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/frontend/views"));
app.use('/static', express.static(path.join(__dirname, 'frontend/static')));



app.get('/', function(req, res){
    var nombre = "usuario SENA";
    res.render("pages/index",
        {name:nombre}
    );
})

app.listen(8000, ()=>{
    console.log(`Servidor en el puerto 8000`)
})