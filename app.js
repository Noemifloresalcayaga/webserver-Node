require('dotenv').config()
const express = require('express');
const hbs = require('hbs');
const app = express()
const port = process.env.PORT



//cuando le pido a handlebars que renderice una vista se debe mostrar por defecto en un directorio llamado views
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials')
//servir contenido estatico
app.use(express.static('public'));
app.get('/', (req, res)=> {
    res.render('home', {
        nombre: 'Noemita', 
        titulo: 'Curso de Node'
    });
});
app.get('/generic', (req, res)=> {
    res.render('generic', {
        nombre: 'Noemita', 
        titulo: 'Curso de Node'
    });
});
app.get('/elements', (req, res)=> {
    res.render('elements', {
        nombre: 'Noemita', 
        titulo: 'Curso de Node'
    });
});



app.get('*', function(req, res){
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`)
})