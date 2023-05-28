const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');


// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => {
    res.send('GRASS')
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));