"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          title: "cool",
          createdAt: "2018-01-12",
          updatedAt: "2022-02-02",
        },
        {
          title: "landscape",
          createdAt: "2020-03-12",
          updatedAt: "2022-04-02",
        },
        {
          title: "portrait",
          createdAt: "2019-05-12",
          updatedAt: "2022-06-02",
        },
        {
          title: "picture",
          createdAt: "2017-06-12",
          updatedAt: "2021-07-02",
        },
        {
          title: "selfie",
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
