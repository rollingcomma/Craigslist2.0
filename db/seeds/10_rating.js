
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rating').del()
    .then(function () {
      // Inserts seed entries
      return knex('rating').insert([
        {stars: 4, rater: 1, ratee: 2, title: 'great service', description: null},
        {stars: 2, rater: 3, ratee: 2, title: 'terrible', description: null},
        {stars: 4, rater: 4, ratee: 2, title: 'Ok', description: null},
        {stars: 3, rater: 2, ratee: 1, title: 'so so', description: null},
        {stars: 3, rater: 3, ratee: 1, title: 'acceptable', description: null},
        {stars: 2, rater: 4, ratee: 1, title: 'terrible', description: null},
        {stars: 5, rater: 1, ratee: 3, title: 'love it', description: null},
        {stars: 5, rater: 2, ratee: 3, title: 'recommend', description: null},
        {stars: 5, rater: 4, ratee: 3, title: 'great', description: null},
        {stars: 3, rater: 1, ratee: 4, title: 'not impressed', description: null},
        {stars: 4, rater: 2, ratee: 4, title: 'Ok', description: null}
      ]);
    });
};
