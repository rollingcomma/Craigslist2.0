
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('biding').del()
    .then(function () {
      // Inserts seed entries
      return knex('biding').insert([
        { bidder: 1, post_id: 1, bid: 50},
        { bidder: 1, post_id: 2, bid: 250},
        { bidder: 2, post_id: 1, bid: 55}
      ]);
    });
};
