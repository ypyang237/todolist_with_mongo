'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var task = [

      {
      name: 'squeeze',
      completed_at: 0817,
      done: false,
      createdAt : new Date(),
      updatedAt : new Date()
      },
            {
      name: 'cover',
      completed_at: 0817,
      done: false,
      createdAt : new Date(),
      updatedAt : new Date()
      },
            {
      name: 'manicure',
      completed_at: 0817,
      done: false,
      createdAt : new Date(),
      updatedAt : new Date()
      },
            {
      name: 'noogie',
      completed_at: 0817,
      done: false,
      createdAt : new Date(),
      updatedAt : new Date()
      },

    ];

      return queryInterface.bulkInsert('Tasks', task, {});

  },

  down: function (queryInterface, Sequelize) {


      return queryInterface.bulkDelete('Tasks', null, {});

  }
};
