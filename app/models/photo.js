'use strict';
const {
  Model
} = require('sequelize');

const Album = require('./album');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Photo.belongsTo(models.Album, {
        as: 'album',
        foreignKey: 'id'
      });
      Photo.belongsTo(models.Location, {
        as: 'location',
        foreignKey: 'id'
      });
      Photo.hasMany(models.Comment, {
        as: 'comments',
        foreignKey: 'photoId'
      });
    }
  }
  Photo.init({
    albumId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};