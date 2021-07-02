const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { edad, nombre = 'No name', apellido, page = 1, limit } = req.query;

    res.json({
        msg: "Get API - controlador",
        edad,
        nombre,
        apellido,
        page,
        limit,
    });
}
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    const { apellido } = req.headers;

    res.json({
        msg: "Post API - controlador",
        nombre,
        edad,
        apellido,
    });
}
const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: "Put API - controlador",
        id: id
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API - controlador"
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "Patch API - controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}