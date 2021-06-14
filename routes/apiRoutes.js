const router = require('express').Router();

const path = require('path')

// connect to data base

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../DataBase/db.json'))
    console.log(res)
})

module.exports = router