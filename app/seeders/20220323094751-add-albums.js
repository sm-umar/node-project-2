"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Albums",
      [
        {
          title: "Family",
          description: "Family pictures...",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          title: "Friends",
          description: "Friends pictures...",
          createdAt: "2022-07-12",
          updatedAt: "2022-07-02",
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
