'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: '123@123',
          password: await bcrypt.hash('123', 10),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Curds',
      [
        {
          title: 'Сырок P.I.Darasov в темном шоколаде',
          image: `http://localhost:3000/img/black.jpg`,
          rating: 5,
          price: 75,
          userId: 1,
        },
        {
          title: 'Легкий сырок P.I.Darasov',
          image: `http://localhost:3000/img/blue.jpg`,
          rating: 5,
          price: 77,
          userId: 1,
        },
        {
          title: 'Cырок P.I.Darasov со вкусом яблока',
          image: `http://localhost:3000/img/green.jpg`,
          rating: 2,
          price: 76,
          userId: 1,
        },
        {
          title: 'Cырок P.I.Darasov со вкусом обыденности',
          image: `http://localhost:3000/img/grey.jpg`,
          rating: 4,
          price: 100,
          userId: 1,
        },
        {
          title: 'Cырок P.I.Darasov в молочном шоколаде',
          image: `http://localhost:3000/img/orange.jpg`,
          rating: 4,
          price: 100,
          userId: 1,
        },
        {
          title: 'Cырок P.I.Darasov в молочном шоколаде со вкусом клубники',
          image: `http://localhost:3000/img/pink.jpg`,
          rating: 4,
          price: 100,
          userId: 1,
        },
        {
          title: 'Cырок P.I.Darasov в молочном шоколаде со вкусом черники',
          image: `http://localhost:3000/img/purple.jpg`,
          rating: 1,
          price: 68,
          userId: 1,
        },
        {
          title: 'Cырок P.I.Darasov в молочном шоколаде со вкусом колы',
          image: `http://localhost:3000/img/red.jpg`,
          rating: 3,
          price: 79,
          userId: 1,
        },
        {
          title: 'Cырок P.I.Darasov в белом шоколаде',
          image: `http://localhost:3000/img/white.jpg`,
          rating: 2,
          price: 56,
          userId: 1,
        },
        {
          title: 'Твороженая масса P.I.Darasov ',
          image: `http://localhost:3000/img/yellow.jpg`,
          rating: 5,
          price: 80,
          userId: 1,
        },
      ],
      {},
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
