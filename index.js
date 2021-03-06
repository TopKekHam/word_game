var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.listen(process.env.PORT || 8080);