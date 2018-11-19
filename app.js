const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var alquiler_amarre = require('./routes/alquiler_amarre.routes');
var alquiler_invernaje = require('./routes/alquiler_invernaje.routes');
var amarre = require('./routes/amarre.routes');
var categoria = require('./routes/categoria.routes');
var consulta = require('./routes/consulta.routes');
var embarcacion = require('./routes/embarcacion.routes');
var evento = require('./routes/evento.routes');
var invernaje = require('./routes/invernaje.routes');
var marca = require('./routes/marca.routes');
var mensaje = require('./routes/mensaje.routes');
var pais = require('./routes/pais.routes');
var permisos = require('./routes/permisos.routes');
var usuario = require('./routes/usuario.routes');

app.use('/alquiler_amarre', alquiler_amarre);
app.use('/alquiler_invernaje', alquiler_invernaje);
app.use('/amarre', amarre);
app.use('/categoria', categoria);
app.use('/consulta', consulta);
app.use('/embarcacion', embarcacion);
app.use('/evento', evento);
app.use('/invernaje', invernaje);
app.use('/marca', marca);
app.use('/mensaje', mensaje);
app.use('/pais', pais);
app.use('/permisos', permisos);
app.use('/usuario', usuario);

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
console.log('Backend de clubnauticolaqant.com iniciado en el puerto 3000...')
module.exports = app;