
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'Appliance'},
        {id: 2, name: 'Furnitures'},
        {id: 3, name: 'Computers & Parts'},
        {id: 4, name: 'Electronics'},
        {id: 5, name: 'Sports & Fitness'},
        {id: 6, name: 'Arts & Crafts'},
        {id: 7, name: 'Others'}
      ]);
    });
};
