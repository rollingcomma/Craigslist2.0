
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('country').del()
    .then(function () {
      // Inserts seed entries
      return knex('country').insert([
        {code: 'CA', name: 'Canada'},
        {code: 'US', name: 'The United States of America'}
      ]);
    });
};
