
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('province').del()
    .then(function () {
      // Inserts seed entries
      return knex('province').insert([
        {code: 'AB', name: 'Alberta'},
        {code: 'BC', name: 'British Columbia'},
        {code: 'MB', name: 'Manitoba'},
        {code: 'NB', name: 'New Brunswick'},
        {code: 'NL', name: 'Newfoundland and Labrador'},
        {code: 'NS', name: 'Nova Scotia'},
        {code: 'ON', name: 'Ontario'},
        {code: 'PE', name: 'Prince Edward Island'}
      ]);
    });
};
