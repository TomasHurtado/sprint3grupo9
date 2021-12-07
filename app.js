const express = require('express');
const app = express();

app.use(express.static('public'));

//Motor de vistas
//set es configuracion, vamos a configurar app, en el q van 2 parametros
app.set('view engine','ejs');//en el 1ro va el motor de plantilla, en el 2do va el nombre ejs

app.set('views','views');//por otro lado vamos a crear otro set, para simplificar el nombres de las vistas. utilzamos un segundo seteo/recurso.


app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/productCart', (req, res) => {
    res.render('productCart');
});

app.get('/entrega', (req, res) => {
    res.render('entrega');
});

app.get('/pago', (req, res) => {
    res.render('pago');
});

app.get('/resumen', (req, res) => {
    res.render('resumen');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/recuperar', (req, res) => {
    res.render('recuperar');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/perfil', (req, res) => {
    res.render('perfil');
});

app.get('/productDetail', (req, res) => {
    res.render('productDetail');
});