const { request, response } = require('express');

const getUsers = (req = request, res = response) => {

    const { query, respuesta } = req.query;

    res.json({
        msg: 'get API - controller',
        query,
        respuesta
    });
}

const postUsers = (req = request, res = response) => {
    
    const { nombre, edad } = req.body;
    
    res.status(201).json({
        msg: 'post API - controller',
        nombre,
        edad
    });
}

const putUsers = (req = request, res = response) => {

    const id = req.params.userId;

    res.status(400).json({
        msg: 'put API - controller',
        id
    });
}

const deleteUsers = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

const patchUsers = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}