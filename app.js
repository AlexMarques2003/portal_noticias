var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')
rotaFormInclusaoNoticias(app);

app.listen(3000, function(){
    console.log("Servidor online");
})
