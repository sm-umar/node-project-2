const create = {
    tags: ['Album'],
    description: 'Add new Album.',
    parameters: [
        { name: 'token', in: 'header', required: true, type: 'string' },
        {
            in: 'body',
            name: 'body',
            description: 'Object that needs to be added to add a new album.',
            required: true,
            schema: {
                properties: {
                    title: {
                        type: 'string',
                        description: 'Name of the album.',
                        example: 'Album01',
                    },
                    description: {
                        type: 'string',
                        description: 'Description for the album.',
                        example: 'Birthday party photos.',
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
                            message: 'Album added.',
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
    tags: ['Album'],
    description: 'Add new Album.',
    parameters: [
        { name: 'token', in: 'header', required: true, type: 'string' },
        {
            in: 'path',
            name: 'id',
            description: 'Id of the album.',
            required: true,
            type: 'integer',
            example: 1,
        },
        {
            in: 'body',
            name: 'body',
            description: 'Object with the new details of album.',
            required: true,
            schema: {
                properties: {
                    title: {
                        type: 'string',
                        description: 'Name of the album.',
                        example: 'Album01',
                    },
                    description: {
                        type: 'string',
                        description: 'Description for the album.',
                        example: 'Birthday party photos.',
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
                            message: 'Album updated successfully.',
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

const deleteAlbum = {
    tags: ['Album'],
    description: 'Delete Album.',
    parameters: [
        { name: 'token', in: 'header', required: true, type: 'string' },
        {
            in: 'path',
            name: 'id',
            description: 'Id of the album to be deleted.',
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
                            message: 'Album deleted successfully.',
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
    tags: ['Album'],
    description: 'Lists all Albums.',
    responses: {
        200: {
            description: 'OK.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            status: true,
                            message: 'All Albums.',
                            count: 1,
                            data: {
                                title: 'Family',
                                description: 'Family pictures...',
                            },
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

exports.albumRoutes = {
    '/album/create': {
        post: create,
    },
    '/album/update/{id}': {
        post: update,
    },
    '/album/delete/{id}': {
        post: deleteAlbum,
    },
    '/album/getall': {
        get: getAll,
    },
};

exports.albumModel = {
    Album: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                format: 'int64',
            },
            title: { type: 'string' },
            description: { type: 'string' },
        },
    },
};
