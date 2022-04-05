const create = {
    tags: ['Photo'],
    description: 'Add new Photos.',
    parameters: [
        { name: 'token', in: 'header', required: true, type: 'string' },
        {
            in: 'body',
            name: 'body',
            description: 'Object that needs to be added to add a new photo.',
            required: true,
            schema: {
                properties: {
                    album: {
                        type: 'string',
                        description: 'Name of the album to add photo in.',
                        example: 'Friends',
                    },
                    location: {
                        type: 'string',
                        description: 'Location where photo was taken.',
                        example: 'Restaurant',
                    },
                    title: {
                        type: 'string',
                        description: 'Name of the photo.',
                        example: 'Selfie',
                    },
                    description: {
                        type: 'string',
                        description: 'Caption for the photo.',
                        example: "Birthday party with friend at Hardee's.",
                    },
                    tags: {
                        type: 'array',
                        description: 'Hash tags for the photo.',
                        example: ['party', 'friends', 'adayout'],
                    },
                },
            },
        },
    ],
    responses: {
        200: {
            description: 'OK.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            success: true,
                            message: 'Photo added.',
                            data: {},
                        },
                    },
                },
            },
        },
        400: {
            description: 'Error.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            success: false,
                            message: 'Error.',
                        },
                    },
                },
            },
        },
    },
};

const update = {
    tags: ['Photo'],
    description: 'Add new Photos.',
    parameters: [
        { name: 'token', in: 'header', required: true, type: 'string' },
        {
            in: 'path',
            name: 'id',
            description: 'Id of the photo.',
            required: true,
            type: 'integer',
            example: 1,
        },
        {
            in: 'body',
            name: 'body',
            description: 'Object with the new details of photo.',
            required: true,
            schema: {
                properties: {
                    album: {
                        type: 'string',
                        description: 'Name of the album.',
                        example: 'Family',
                    },
                    location: {
                        type: 'string',
                        description: 'Location where photo was taken.',
                        example: 'PC',
                    },
                    title: {
                        type: 'string',
                        description: 'Name of the photo.',
                        example: 'Image01',
                    },
                    description: {
                        type: 'string',
                        description: 'Caption for the photo.',
                        example: 'Attending wedding of cousin at PC.',
                    },
                    tags: {
                        type: 'array',
                        description: 'Hash tags for the photo.',
                        example: ['party', 'wedding', 'family'],
                    },
                },
            },
        },
    ],
    responses: {
        200: {
            description: 'OK.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            success: true,
                            message: 'Photo updated successfully.',
                            data: {},
                        },
                    },
                },
            },
        },
        400: {
            description: 'Error.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            success: false,
                            message: 'Error.',
                        },
                    },
                },
            },
        },
    },
};

const deletePhoto = {
    tags: ['Photo'],
    description: 'Delete Photos.',
    parameters: [
        { name: 'token', in: 'header', required: true, type: 'string' },
        {
            in: 'path',
            name: 'id',
            description: 'Id of the photo to be deleted.',
            required: true,
            type: 'integer',
            example: 1,
        },
    ],
    responses: {
        200: {
            description: 'OK.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            success: true,
                            message: 'Photo deleted successfully.',
                            data: {},
                        },
                    },
                },
            },
        },
        400: {
            description: 'Error.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            success: false,
                            message: 'Error.',
                        },
                    },
                },
            },
        },
    },
};

const getAll = {
    tags: ['Photo'],
    description: 'Lists all Photos.',
    responses: {
        200: {
            description: 'OK.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            id: 1,
                            title: 'Updated',
                            description: 'Friends nightout...',
                            album: {
                                title: 'Family',
                            },
                            location: {
                                name: 'PC',
                            },
                            comments: [
                                {
                                    comment: 'Amazing.',
                                },
                            ],
                            tags: [
                                {
                                    id: 1,
                                    title: 'cool',
                                    Tag_Photo: {
                                        tagId: 1,
                                        photoId: 1,
                                        createdAt: '2018-01-12T00:00:00.000Z',
                                        updatedAt: '2022-02-02T00:00:00.000Z',
                                    },
                                },
                            ],
                        },
                    },
                },
            },
        },
        400: {
            description: 'Error.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            success: false,
                            message: 'Error.',
                        },
                    },
                },
            },
        },
    },
};

exports.photoRoutes = {
    '/photo/create': {
        post: create,
    },
    '/photo/update/{id}': {
        post: update,
    },
    '/photo/delete/{id}': {
        post: deletePhoto,
    },
    '/photo/getall': {
        get: getAll,
    },
};

exports.PhotoModel = {
    Photo: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                format: 'int64',
            },
            title: { type: 'string' },
            description: { type: 'string' },
            albumId: {
                type: 'integer',
                format: 'int64',
            },
            locationId: {
                type: 'integer',
                format: 'int64',
            },
        },
    },
};
