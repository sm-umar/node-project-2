'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag_Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tag_Photo.init({
    tagId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tag_Photo',
  });
  return Tag_Photo;
};