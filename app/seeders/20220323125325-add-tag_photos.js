'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Tag_Photos', [
    {
      tagId: 1,
      photoId: 1,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 2,
      photoId: 1,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 3,
      photoId: 1,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 5,
      photoId: 1,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 1,
      photoId: 2,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 5,
      photoId: 2,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 2,
      photoId: 3,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 3,
      photoId: 3,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      tagId: 2,
      photoId: 3,
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
