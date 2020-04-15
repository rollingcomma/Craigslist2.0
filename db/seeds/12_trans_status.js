
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trans_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('trans_status').insert([
        {id: 1, name: 'bidding'},
        {id: 2, name: 'on hold'},
        {id: 3, name: 'closed'},
        {id: 4, name: 'refund'},
        {id: 5, name: 'released'}
      ]);
    });
};
