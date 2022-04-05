'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Locations', [
    {
      name: 'PC',
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      name: 'Club',
      createdAt: "2018-01-12",
      updatedAt: "2022-02-02",
    },
    {
      name: 'Hardees',
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
