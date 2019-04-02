const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
require('./helpers');

const dirNode_modules = path.join(__dirname , '../node_modules')
const directoriopublico = path.join(__dirname,'../public');
const directoriopartials = path.join(__dirname,'../partials');
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({extended:false}));
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('index', {
        estudiante: 'Vasco'
    })
});

/*app.get('/calculos',(req,res)=>{
    res.render('calculos',{
        estudiante: req.query.nombre,
        nota1: parseInt(req.query.nota1),
        nota2: parseInt(req.query.nota2),
        nota3: parseInt(req.query.nota3)
    });
});*/

 
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');    
});