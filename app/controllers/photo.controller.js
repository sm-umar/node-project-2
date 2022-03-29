const models = require('../models');
const { Photo } = models;
const { Tag } = models;
const { Location } = models;
const { Comment } = models;
const { Album } = models;
const { Tag_Photo } = models;
var async = require('async');

/************************************************
    Add New Photo
*************************************************/
exports.create = async (req, res) => {
  if (req.user) {
    var reqData = req.body;

    var newPhoto = {
      title: reqData.title,
      description: reqData.description,
    };

    var [album, albumCreated] = await Album.findOrCreate({
      where: { title: reqData.album },
      defaults: {
        description: '',
      },
    });
    newPhoto.albumId = album.id;

    var [location, locationCreated] = await Location.findOrCreate({
      where: { name: reqData.location },
      defaults: {
        name: reqData.location,
      },
    });
    newPhoto.locationId = location.id;

    await Photo.create(newPhoto)
      .then((data) => {
        async.forEachOf(
          reqData.tags,
          async (ele, index) => {
            var [tag, albumCreated] = await Tag.findOrCreate({
              where: { title: ele },
              defaults: {
                title: ele,
              },
            });

            await Tag_Photo.create({
              tagId: tag.id,
              photoId: data.id,
            });
          },
          (err) => {
            res
              .status(200)
              .json({ success: true, message: 'Photo added.', data: data });
          }
        );
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
    Edit Photo
*************************************************/
exports.update = async (req, res) => {
  if (req.user) {
    var photoId = req.params.id;
    var reqData = req.body;

    var updatedPhoto = {
      title: reqData.title,
      description: reqData.description,
    };

    var [album, albumCreated] = await Album.findOrCreate({
      where: { title: reqData.album },
      defaults: {
        description: '',
      },
    });
    updatedPhoto.albumId = album.id;

    var [location, locationCreated] = await Location.findOrCreate({
      where: { name: reqData.location },
      defaults: {
        name: reqData.location,
      },
    });
    updatedPhoto.locationId = location.id;

    await Photo.update(updatedPhoto, {
      where: {
        id: photoId,
      },
      returning: true,
      plain: false,
    })
      .then((data) => {
        res
          .status(200)
          .json({ success: true, message: 'Photo updated.', data: data });
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
    Delete Photo
*************************************************/
exports.delete = async (req, res) => {
  if (req.user) {
    var reqData = req.body;

    await Photo.destroy({
      where: {
        title: reqData.title,
      },
    })
      .then((data) => {
        res
          .status(200)
          .json({ success: true, message: 'Photo deleted.', data: data });
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
    Get All Photos
*************************************************/
exports.getAll = async (req, res) => {
  await Photo.findAll({
    include: ['comments', 'tags', 'album', 'location'],
  })
    .then((data) => res.status(200).json(data))
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};
