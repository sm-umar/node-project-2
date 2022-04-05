'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Photos', [
    {
      albumId: 1,
      locationId: 1,
      title: "Selfie",
      description: "At PC...",
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      albumId: 2,
      locationId: 3,
      title: "Friend",
      description: "Friends nightout...",
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      albumId: 1,
      locationId: 2,
      title: "Food",
      description: "At lunch with family.",
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
