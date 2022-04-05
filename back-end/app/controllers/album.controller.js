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
        try {
            var newAlbum = {
                title: reqData.title,
                description: reqData.description,
            };

            await Photo.create(newAlbum)
                .then((data) => {
                    res.status(200).json({
                        success: true,
                        message: 'Album added.',
                        data: data,
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        success: false,
                        message: error.message,
                    });
                });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: 'Error in adding photo.',
            });
            console.log('Error in create photo: ', error);
        }
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
        try {
            var updatedalbum = {
                title: reqData.title,
                description: reqData.description,
            };

            await Album.update(updatedalbum, {
                where: {
                    id: albumId,
                },
                returning: true,
                plain: false,
            })
                .then((data) => {
                    res.status(200).json({
                        success: true,
                        message: 'Album updated.',
                        data: data,
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        success: false,
                        message: error.message,
                    });
                });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: 'Error in adding photo.',
            });
            console.log('Error in create photo: ', error);
        }
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
        var albumId = req.params.id;
        try {
            await Album.destroy({
                where: {
                    id: albumId,
                },
            })
                .then((data) => {
                    res.status(200).json({
                        success: true,
                        message: 'Album deleted.',
                        data: data,
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        success: false,
                        message: error.message,
                    });
                });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: 'Error in adding photo.',
            });
            console.log('Error in create photo: ', error);
        }
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
    try {
        await Album.findAll({
            attributes: ['title', 'description'],
        })
            .then((data) =>
                res.status(200).json({
                    status: true,
                    message: 'All Albums.',
                    count: data.length,
                    data,
                })
            )
            .catch((error) => {
                res.status(400).json({ message: error.message });
            });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'Error in adding photo.',
        });
        console.log('Error in create photo: ', error);
    }
};
