var Token = require('../helpers/manage-tokens');
const models = require('../models');
const { User } = models;
const { Photo } = models;
const { Location } = models;
const { Comment } = models;

/************************************************
    Register New User
*************************************************/
exports.createUser = async (req, res) => {
    var data = req.body;
    try {
        var newUser = await User.create({
            username: data.username,
            email: data.email,
            password: data.password,
            bio: data.bio,
        })
            .then((result) => {
                res.status(200).json({
                    status: true,
                    message: 'User registered successfully.',
                    user: result,
                });
            })
            .catch((error) => {
                console.log('Error in createUser: ', error);
                res.status(400).send({
                    status: false,
                    message: 'User not registered.',
                });
            });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'Error in adding photo.',
        });
        console.log('Error in create photo: ', error);
    }
};

/************************************************
    Login User
*************************************************/
exports.verifyUser = async (req, res) => {
    var data = req.body;
    try {
        await User.findOne({ where: { email: data.email } })
            .then((user) => {
                console.log(user);
                user.comparePassword(
                    data.password,
                    user.password,
                    async (err, isMatch) => {
                        if (isMatch) {
                            var token = Token.createToken({
                                id: user.id,
                                email: user.email,
                            });
                            res.status(200).json({
                                message: 'User logedIn successfully.',
                                token,
                            });
                        } else if (!isMatch) {
                            res.status(400).json({
                                message: 'User logedIn failed.',
                            });
                        }
                    }
                );
            })
            .catch((error) => {
                res.status(400).json({
                    status: false,
                    message: 'User not found.',
                });
            });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'Error in adding photo.',
        });
        console.log('Error in create photo: ', error);
    }
};

/************************************************
    Get All Users
*************************************************/
exports.getAll = async (req, res) => {
    try {
        var data = await User.findAll({
            attributes: ['username', 'email', 'bio'],
        });
        res.status(200).json({
            status: true,
            message: 'All users.',
            count: data.length,
            data,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'Error in adding photo.',
        });
        console.log('Error in create photo: ', error);
    }
};
