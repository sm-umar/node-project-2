'use strict';
const { Model } = require('sequelize');
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.beforeCreate(async (user, options) => {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  });

  User.prototype.comparePassword = (password, userPassword, callback) => {
    bcrypt.compare(password, userPassword, callback);
  };

  return User;
};
