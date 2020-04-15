
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('payment_account').del()
    .then(function () {
      // Inserts seed entries
      return knex('payment_account').insert([
        {user_id: 1, account_num: 'account_num1'},
        {user_id: 2, account_num: 'account_num2'},
        {user_id: 3, account_num: 'account_num3'}
      ]);
    });
};
