
exports.seed = function (knex) {

  return knex('company').del()
    .then(function () {

      return knex('company').insert([
        {
          user_id: 1,
          title: "Devry"
        }
      ]);
    });
};
