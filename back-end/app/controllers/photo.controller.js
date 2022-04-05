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
        try {
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
                            res.status(200).json({
                                success: true,
                                message: 'Photo added.',
                                data: data,
                            });
                        }
                    );
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
    Edit Photo
*************************************************/
exports.update = async (req, res) => {
    if (req.user) {
        var photoId = req.params.id;
        var reqData = req.body;
        try {
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
                    res.status(200).json({
                        success: true,
                        message: 'Photo updated.',
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
    Delete Photo
*************************************************/
exports.delete = async (req, res) => {
    if (req.user) {
        var reqData = req.body;
        var photoId = req.params.id;

        await Photo.destroy({
            where: {
                id: photoId,
            },
        })
            .then((data) => {
                res.status(200).json({
                    success: true,
                    message: 'Photo deleted.',
                    data: data,
                });
            })
            .catch((error) => {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
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
        attributes: ['id', 'title', 'description'],
        include: [
            {
                model: Album,
                as: 'album',
                attributes: ['title'],
            },
            {
                model: Location,
                as: 'location',
                attributes: ['name'],
            },
            {
                model: Comment,
                as: 'comments',
                attributes: ['comment'],
            },
            {
                model: Tag,
                as: 'tags',
                attributes: ['id', 'title'],
                through: [],
            },
        ],
    })
        .then((data) => res.status(200).json(data))
        .catch((error) => {
            res.status(400).json({ success: false, message: error.message });
        });
};
