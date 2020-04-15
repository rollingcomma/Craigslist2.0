
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {seller: 1, title: 'Ikea Shelf', description: 'A simple unit can be enough storage for a limited space or the foundation for a larger storage solution if your needs change.  The storage unit stands steady on uneven floors since it has adjustable feet ', price: 120.00,  item_condition_id: 1, category_id: 2, sub_category_id: 4},
        {seller: 1, title: 'New painting brush', description: 'The paintbrush will be your magic wand for weaving colors across the canvas. Artist paint brushes become beloved tools the more you use them! As you paint, you will become increasingly familiar with the way the brushes handle the paint and what they can accomplish for you. Pretty soon the paintbrush will become a part of you that you intuitively know how to maneuver.', price: 15.00,  item_condition_id: 2, category_id: 6, sub_category_id: 2},
        {seller: 3, title: 'iPhone X', description: 'Bought two years ago, in good condition', price: 400.00, item_condition_id: 2, category_id: 4, sub_category_id: 1},
        {seller: 4, title: 'Used sofa', description: null, price: 250.00, item_condition_id: 2, category_id: 2, sub_category_id: 1},
        {seller: 2, title: 'Sectional sofa set', description: null, price: 400.00, item_condition_id: 2, category_id: 2, sub_category_id: 1},
        {seller: 4, title: 'Rose gold MacBook air', description: null, price: 650.00, item_condition_id: 2, category_id: 3, sub_category_id: 1},
        {seller: 3, title: 'Sony 65\' TV', description: 'Brand new sony TV', price: 2000.00, item_condition_id: 1, category_id: 1, sub_category_id: 8},
        {seller: 1, title: 'Brand new backpack', description: null, price: 180.00, item_condition_id: 1, category_id: 5, sub_category_id: 2},
        {seller: 3, title: 'Travel and  backpack', description: null, price: 100.00, item_condition_id: 1, category_id: 5, sub_category_id: 2},
        {seller: 4, title: 'almost new backpack', description: null, price: 50.00, item_condition_id: 2, category_id: 5, sub_category_id: 2},
        {seller: 4, title: 'Dell laptop', description: null, price: 400.00, item_condition_id: 2, category_id: 3, sub_category_id: 1},
        {seller: 1, title: 'New guitar', description: null, price: 160.00, item_condition_id: 1, category_id: 4, sub_category_id: 5},
        {seller: 2, title: 'Instruments store', description: 'Huge selection of musical instruments.The guitar boutique room, home to one of kind vintage and high end guitars and amplifiers you won\'t find anywhere else', price: 299.00, item_condition_id: 1, category_id: 4, sub_category_id: 5},
        {seller: 2, title: 'New iPhone 7', description: null, price: 800.00, item_condition_id: 1, category_id: 4, sub_category_id: 1},
        {seller: 1, title: 'xbox', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 400.00, item_condition_id: 3, category_id: 4, sub_category_id:6},
        {seller: 1, title: 'xbox', description: null, price: 400.00, item_condition_id: 2, category_id: 4, sub_category_id: 6,},
        {seller: 1, title: 'Xbox test', description: null, price: 400.00, item_condition_id: 1, category_id: 4, sub_category_id: 6},
        {seller: 1, title: 'apple', description: 'this is my favorite apple', price: 1.00, item_condition_id: 4, category_id: 7, sub_category_id: 3,},
        {seller: 5, title: 'coffee', description: 'coffee', price: 20.00, item_condition_id: 1, category_id: 7, sub_category_id: 2},
        {seller: 5, title: 'coffee', description: 'coffee', price: 20.00, item_condition_id: 1, category_id: 7, sub_category_id: 2},
        {seller: 1, title: 'apple', description: 'this is an apple', price: 22.00, item_condition_id: 4, category_id: 7, sub_category_id: 3}
      ]);
    });
};
