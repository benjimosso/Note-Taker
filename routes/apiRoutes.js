const DataBase = require('../db.json')
const router = require('express').Router()

module.exports = (app) => {

    router.get('/api/notes', (req, res) => res.json(DataBase));

}