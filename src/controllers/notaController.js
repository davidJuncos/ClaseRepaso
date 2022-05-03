const req = require("express/lib/request");

const getNota = (res,res) =>{
    const {id_nota} = req.parames;

    res.send('Hola desde get nota' + id_nota)
}

const borrarNota = (req,res) =>{
    res.send ('Estas borrando la nota');
}
const register = (req,res) => {
    res.send ('aqui formuklario de creación');
}

const postNota = (req,res) => {
    res.send ('home');
}

module.exports={
    getNota,
    register,
    postNota,
    borrarNota,

}