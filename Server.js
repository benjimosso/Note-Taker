// Dependencies

const express = require('express');
const path = require('path');
const { createBrotliCompress } = require('zlib');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// console.log(__dirname)
// const DB = path.resolve(__dirname, 'db.json')
// console.log(DB)
//     // api responses.


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));