'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var users = [

      {
        username: 'grumpyPants',
        password: 'passWord',
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        username: 'grumpyShirt',
        password: 'passWord',
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        username: 'naughtyBing',
        password: 'passWord',
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        username: 'smellySocks',
        password: 'passWord',
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        username: 'admin',
        password: 'password',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ];

      return queryInterface.bulkInsert('Users', users, {});

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
