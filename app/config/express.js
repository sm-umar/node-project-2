const express = require('express');
const config = require('../config/config.json');
const bodyParser = require('body-parser');
const routes = require('../routers/router');

module.exports = () => {
    var app = express();

    app.set('port', config.port);
    app.use(bodyParser.json());
    app.use('/route', routes);

    return app;
}