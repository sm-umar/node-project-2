const models = require('../models');
const { Photo } = models;
const { Tag } = models;
const { Location } = models;
const { Comment } = models;
const { Album } = models;

/************************************************
   Add New Album
*************************************************/
exports.create = async (req, res) => {
  if (req.user) {
    var reqData = req.body;

    var newAlbum = {
      title: reqData.title,
      description: reqData.description,
    };

    await Photo.create(newAlbum)
      .then((data) => {
        res
          .status(200)
          .json({ success: true, message: 'Album added.', data: data });
      })
      .catch((error) => {
        res.status(400).json({ success: false, message: error.message });
      });
  } else {
    res.status(404).json({
      status: false,
      message: 'Authentication failed, Kindly login first.',
    });
  }
};

/************************************************
    Edit Album
*************************************************/
exports.update = async (req, res) => {
  if (req.user) {
    var albumId = req.params.id;
    var reqData = req.body;

    var updatedalbumId = {
      title: reqData.title,
      description: reqData.description,
    };

    await Album.update(updatedPhoto, {
      where: {
        id: albumId,
      },
      returning: true,
      plain: false,
    })
      .then((data) => {
        res
          .status(200)
          .json({ success: true, message: 'Album updated.', data: data });
      })
      .catch((error) => {
        res.status(400).json({ success: false, message: error.message });
      });
  } else {
    res.status(404).json({
      status: false,
      message: 'Authentication failed, Kindly login first.',
    });
  }
};

/************************************************
    Delete Album
*************************************************/
exports.delete = async (req, res) => {
  if (req.user) {
    var reqData = req.body;

    await Album.destroy({
      where: {
        title: reqData.title,
      },
    })
      .then((data) => {
        res
          .status(200)
          .json({ success: true, message: 'Album deleted.', data: data });
      })
      .catch((error) => {
        res.status(400).json({ success: false, message: error.message });
      });
  } else {
    res.status(404).json({
      status: false,
      message: 'Authentication failed, Kindly login first.',
    });
  }
};

/************************************************
    Get All Albums
*************************************************/
exports.getAll = async (req, res) => {
  await Album.findAll({})
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};
