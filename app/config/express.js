const express = require('express');
const config = require('../config/config.json');
const bodyParser = require('body-parser');
const photoRoutes = require('../routers/photo.routes');
const userRoutes = require('../routers/user.routes');
const albumRoutes = require('../routers/album.routes');

module.exports = () => {
  var app = express();

  app.set('port', config.port);
  app.use(bodyParser.json());
  app.use('/user', userRoutes);
  app.use('/photo', photoRoutes);
  app.use('/album', albumRoutes);

  return app;
};
