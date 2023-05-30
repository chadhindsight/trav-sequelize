const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => {
    res.send('GRASS')
})

// Use the Gigs related routing
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));