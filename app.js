const express = require('express');

const app = express();

const mainRoute = require('./routes/mainRoute')

app.use('/' , (req,res) =>{
    res.send('Estoy en el home');
}
)

app.listen(3000, () => {
    console.log ('Escuchando en el puerto ')
}
)