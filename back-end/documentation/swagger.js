const photoDoc = require('./photo.doc');
const userDoc = require('./user.doc');
const albumDoc = require('./album.doc');

exports.swaggerOptions = {
    definition: {
        // swagger: '2.0',
        info: {
            title: 'Photo Album API Documentation',
            description: {
                name: 'APIs information...',
            },
            contact: {
                name: 'Omer',
            },
        },
        securityDefinitions: {
            api_key: {
                type: 'apiKey',
                name: 'token',
                in: 'header',
            },
        },
        servers: [
            {
                url: 'http://localhost:9000',
                description: 'Local server.',
            },
            {
                url: 'http://production',
                description: 'Producion server.',
            },
        ],
        tags: [
            {
                name: 'User',
                description: 'User routes documentation.',
            },
            {
                name: 'Album',
                description: 'Album routes documentation.',
            },
            {
                name: 'Photo',
                description: 'Photo routes documentation.',
            },
        ],
        paths: {
            ...photoDoc.photoRoutes,
            ...albumDoc.albumRoutes,
            ...userDoc.userRoutes,
        },
        definitions: {
            ...userDoc.userModel,
            ...photoDoc.PhotoModel,
            ...albumDoc.albumModel,
        },
    },
    apis: ['express.js'],
};
