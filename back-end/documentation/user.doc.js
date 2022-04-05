const signup = {
    tags: ['User'],
    description: 'Add new User.',
    parameters: [
        {
            in: 'body',
            name: 'body',
            description: 'Object with user details to add a new user.',
            required: true,
            schema: {
                properties: {
                    username: {
                        type: 'string',
                        description: 'Username.',
                        example: 'Uamr',
                    },
                    email: {
                        type: 'string',
                        description: 'Email ID.',
                        example: 'example@xyz.com',
                    },
                    password: {
                        type: 'string',
                        description: 'Strong password.',
                        example: '!apo#@x*',
                    },
                    bio: {
                        type: 'string',
                        description: 'About yourself.',
                        example: 'I am a software engineer.',
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
                            status: true,
                            message: 'User registered successfully.',
                            user: {},
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
                            status: false,
                            message: 'User not registered.',
                        },
                    },
                },
            },
        },
    },
};

const signin = {
    tags: ['User'],
    description: 'User login.',
    parameters: [
        {
            in: 'body',
            name: 'body',
            description: 'Object with the login credentials.',
            required: true,
            schema: {
                properties: {
                    email: {
                        type: 'string',
                        description: 'User email.',
                        example: 'example@xyz.com',
                    },
                    password: {
                        type: 'string',
                        description: 'User password.',
                        example: 'xzy',
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
                            message: 'User logedin successfully.',
                            data: {
                                token: '',
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
                            status: false,
                            message: 'User not found.',
                        },
                    },
                },
            },
        },
    },
};

const getAll = {
    tags: ['User'],
    description: 'Lists all User.',
    responses: {
        200: {
            description: 'OK.',
            content: {
                json: {
                    schema: {
                        type: 'object',
                        example: {
                            status: true,
                            message: 'All users.',
                            count: 1,
                            data: [
                                {
                                    id: 1,
                                    username: 'umar',
                                    email: 'umar@gmail.com',
                                    bio: 'This is my bio...',
                                    createdAt: '2020-01-12T00:00:00.000Z',
                                    updatedAt: '2022-03-02T00:00:00.000Z',
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

exports.userRoutes = {
    '/user/signup': {
        post: signup,
    },
    '/user/signin': {
        post: signin,
    },
    '/user/getall': {
        get: getAll,
    },
};

exports.userModel = {
    User: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                format: 'int64',
            },
            username: {
                type: 'string',
            },
            email: { type: 'string' },
            password: { type: 'string' },
            bio: { type: 'string' },
        },
    },
};
