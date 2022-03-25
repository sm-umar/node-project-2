const models = require("../models");
const { Photo } = models;
const { Tag } = models;
const { Location } = models;
const { Comment } = models;
const { Album } = models;
const { Tag_Photo } = models;

exports.getAll = async (req, res) => {
  var data = await Photo.findAll({
    include: ["comments"],
  });
  res.status(200).send(data);
};
