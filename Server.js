// Dependencies

const express = require('express');
const path = require('path');
const { createBrotliCompress } = require('zlib');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


console.log(__dirname)
const DB = path.resolve(__dirname, 'db.json')
console.log(DB)
    // api responses.


const database = app.get('/api/notes', (req, res) => res.sendFile(DB));
app.get('/api/notes', (req, res) => res.json(database));


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));