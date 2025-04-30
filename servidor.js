const express = require('express');
require('dotenv').config()
const app = express()
// const enrutador = require('./routes/router');
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

app.get('/about', function(req, res){
    res.render("pages/about")
})

app.get('/contactanos', function(req, res){
    res.render("pages/contactanos")
})

app.get('/carrito', function(req, res){
    res.render("pages/carrito")
})

app.get('/facturas', function(req, res){
    res.render("pages/usuario/facturas")
})

app.get('/login', function(req, res){
    res.render("pages/login")
})

app.get('/register', function(req, res){
    res.render("pages/register")
})

app.get('/editar-perfil', function(req, res){
    res.render("pages/usuario/user-Crud")
})

app.listen(8003, ()=>{
    console.log(`Servidor en el puerto 8000`)
})