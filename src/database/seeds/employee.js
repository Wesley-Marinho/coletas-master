
exports.seed = function (knex) {

  return knex('employee').del()
    .then(function () {

      return knex('employee').insert([
        { username: 'Wesley' },
        { username: 'Marinho' },
      ]);
    });
};
