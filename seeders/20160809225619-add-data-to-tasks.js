'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var task = [

      {
      name: 'squeezeOwen',
      completed_at: 0817,
      done: false,
      createdAt : new Date(),
      updatedAt : new Date()
      },
            {
      name: 'coverOwen',
      completed_at: 0817,
      done: false,
      createdAt : new Date(),
      updatedAt : new Date()
      },
            {
      name: 'manicureOwen',
      completed_at: 0817,
      done: false,
      createdAt : new Date(),
      updatedAt : new Date()
      },
            {
      name: 'noogieOwen',
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
