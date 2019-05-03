// archivo para crear e inicializar servidor, de nodejs, de express
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/appusers'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
