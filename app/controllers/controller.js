var Token = require("../helpers/manage-tokens");
const models = require("../models");
const {User} = models;
const {Photo} = models;
const {Location} = models;
const {Comment} = models;

/************************************************
    Register New User
*************************************************/

exports.createUser = async (req, res) => {
  var data = req.body;
  var newUser = await User.create({
    username: data.username,
    email: data.email,
    password: data.password,
    bio: data.bio,
  })
  .then(
    (result) => {
      res.status(200).send(result);
    }
    )
    .catch(
      (error) => {
        console.log('Error in createUser: ', error);
      res.status(400).send(error);
    }
  )
};

/************************************************
    Login User
*************************************************/

exports.verifyUser = async (req, res) => {
  console.log("req.body: ", req.body);
  var data = req.body;
};

/************************************************
    Update User Information
*************************************************/

exports.updateUser = (req, res) => {
  if (req.user) {
    var data = req.body;
  }
};

exports.getAll = async (req, res) => {
  var data = await Photo.findAll(
    {
      include: ['comments'],
    });
  res.status(200).send(data);
};
