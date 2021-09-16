// Dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, '/frontEnd')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontEnd/index.html'));
});
app.listen(port, function (err, res) {
    console.log(`Port ${port} Running Successfully in ${process.env.PORT} mode!`);
});