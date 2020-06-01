module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Cláudio Adonai Muto',
          email: 'claudio@greenpeople.com.br',
          password_hash:
            '$2a$08$adnjCMbg8rfst9OsjldAFekr1luNbMXgu13lMa5C7Ri9bHR7Jn9Q2',
          boss: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
