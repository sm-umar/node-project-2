"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          photoId: 1,
          comment: "Amazing.",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          photoId: 2,
          comment: "Beautiful picture.",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          photoId: 3,
          comment: "What is this location ?",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          photoId: 1,
          comment: "Is this Sawat ?",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          photoId: 1,
          comment: "Cool bro...",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          photoId: 3,
          comment: "Looking great.",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          photoId: 2,
          comment: "Nice one.",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
