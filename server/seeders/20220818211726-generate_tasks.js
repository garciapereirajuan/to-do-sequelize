'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          id: 1,
          description: "Cortar el pasto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          description: "Comprar frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          description: "Podar las plantas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          description: "Terminar el proyecto de To-Do",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {})
  },
}
