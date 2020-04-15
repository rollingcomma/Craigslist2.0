
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {username: 'FlyingDuck', firstname: 'Jim', lastname: 'Davis', email: 'jim@test.com', password: '$2a$10$cpSe5S6Ht5muJl3kkRlDvO6NNAqqtd3kDXIZvUM/jdn5qOzQ/Aqn.', house_num: '473', street: '4567 Canada Way', city: 'Burnaby', province_code: 'BC', postalcode: 'V5G 4T1', country_code: 'CA'},
        {username: 'Sammy', firstname: 'Sam', lastname: 'Brown', email: 'sam@test.com', password: '$2a$10$cpSe5S6Ht5muJl3kkRlDvO6NNAqqtd3kDXIZvUM/jdn5qOzQ/Aqn.', house_num: '453', street: 'West 12th Avenue', city: 'Vancouver', province_code: 'BC', postalcode: 'V5Y 1V4', country_code: 'CA'},
        {username: 'Kelly', firstname: 'Kelly', lastname: 'Lee', email: 'kelly@test.com', password: '$2a$10$cpSe5S6Ht5muJl3kkRlDvO6NNAqqtd3kDXIZvUM/jdn5qOzQ/Aqn.', house_num: '4300', street: 'Kingsway', city: 'Burnaby', province_code: 'BC', postalcode: 'V5H 1Z8', country_code: 'CA'},
        {username: 'Kevin', firstname: 'Kevin', lastname: 'Shawn', email: 'kevin@test.com', password: '$2a$10$cpSe5S6Ht5muJl3kkRlDvO6NNAqqtd3kDXIZvUM/jdn5qOzQ/Aqn.', house_num: '2', street: '9718 161A St', city: 'Surrey', province_code: 'BC', postalcode: 'V5H 6S7', country_code: 'CA'},
        {username: 'Lily', firstname: 'Lily', lastname: 'Jim', email: 'lily@test.com', password: '$2a$10$cpSe5S6Ht5muJl3kkRlDvO6NNAqqtd3kDXIZvUM/jdn5qOzQ/Aqn.', house_num: '98', street: '193 St', city: 'Burnaby', province_code: 'BC', postalcode: 'V5V 3R3', country_code: 'CA'}
      ]);
    });
};
