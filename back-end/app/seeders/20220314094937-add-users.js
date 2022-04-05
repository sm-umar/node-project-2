'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'umar',
          email: 'umar@gmail.com',
          password:
            '$2b$10$Mx7T6sZKl4S99lebDtiygOPrAviGesQjCFIJb2i38WWZ8wq2lWfLy', //password is 1234
          bio: 'This is my bio...',
          createdAt: '2020-01-12',
          updatedAt: '2022-03-02',
        },
        {
          username: 'test',
          email: 'test@gmail.com',
          password:
            '$2b$10$Mx7T6sZKl4S99lebDtiygOPrAviGesQjCFIJb2i38WWZ8wq2lWfLy', //password is 1234
          bio: 'This is my bio...',
          createdAt: '2021-09-10',
          updatedAt: '2022-04-05',
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
