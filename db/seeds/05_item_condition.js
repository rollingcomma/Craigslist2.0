
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('item_condition').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_condition').insert([
        {id: 1, name: 'New'},
        {id: 2, name: 'Used'},
        {id: 3, name: 'Refurbished'},
        {id: 4, name: 'Open box'}
      ]);
    });
};
