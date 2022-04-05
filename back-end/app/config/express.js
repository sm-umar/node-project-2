const express = require('express');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerService = require('../../documentation/swagger');

const config = require('../config/config.json');
const photoRoutes = require('../routers/photo.routes');
const userRoutes = require('../routers/user.routes');
const albumRoutes = require('../routers/album.routes');

module.exports = () => {
    var app = express();

    const swaggerDoc = swaggerJsdoc(swaggerService.swaggerOptions);
    app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

    app.set('port', config.port);
    app.use(bodyParser.json());
    app.use('/user', userRoutes);
    app.use('/photo', photoRoutes);
    app.use('/album', albumRoutes);

    return app;
};
