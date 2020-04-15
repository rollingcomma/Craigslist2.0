
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sub_category').del()
    .then(function () {
      // Inserts seed entries
      return knex('sub_category').insert([
        {id: 1, category_id: 1, name: 'cooking'},
        {id: 1, category_id: 2, name: 'living room'},
        {id: 1, category_id: 3, name: 'laptops'},
        {id: 1, category_id: 4, name: 'cellphones'},
        {id: 1, category_id: 5, name: 'exercise'},
        {id: 1, category_id: 6, name: 'jewelry'},
        {id: 1, category_id: 7, name: 'garden supplies'},
        {id: 2, category_id: 1, name: 'Fridges'},
        {id: 2, category_id: 2, name: 'dining room'},
        {id: 2, category_id: 3, name: 'desktops'},
        {id: 2, category_id: 4, name: 'TV'},
        {id: 2, category_id: 5, name: 'camping'},
        {id: 2, category_id: 6, name: 'drawing & painting'},
        {id: 2, category_id: 7, name: 'babies & kids'},
        {id: 3, category_id: 1, name: 'Freezers'},
        {id: 3, category_id: 2, name: 'bedroom'},
        {id: 3, category_id: 3, name: 'monitors'},
        {id: 3, category_id: 4, name: 'tablets'},
        {id: 3, category_id: 5, name: 'winter sports'},
        {id: 3, category_id: 6, name: 'frame'},
        {id: 3, category_id: 7, name: 'beauty'},
        {id: 4, category_id: 1, name: 'dishwashers'},
        {id: 4, category_id: 2, name: 'office'},
        {id: 4, category_id: 3, name: 'accessories'},
        {id: 4, category_id: 4, name: 'digital cameras'},
        {id: 4, category_id: 5, name: 'water sports'},
        {id: 4, category_id: 6, name: 'sewing'},
        {id: 4, category_id: 7, name: 'health'},
        {id: 5, category_id: 1, name: 'washers & dryers'},
        {id: 5, category_id: 2, name: 'lightings'},
        {id: 5, category_id: 3, name: 'core components'},
        {id: 5, category_id: 4, name: 'musical instruments'},
        {id: 5, category_id: 5, name: 'golf'},
        {id: 5, category_id: 6, name: 'knitting'},
        {id: 5, category_id: 7, name: 'others'},
        {id: 6, category_id: 1, name: 'microwaves'},
        {id: 6, category_id: 2, name: 'outdoor'},
        {id: 6, category_id: 3, name: 'storage devices'},
        {id: 6, category_id: 4, name: 'others'},
        {id: 6, category_id: 5, name: 'others'},
        {id: 6, category_id: 6, name: 'others'},
        {id: 7, category_id: 1, name: 'small appliances'},
        {id: 7, category_id: 2, name: 'others'},
        {id: 7, category_id: 3, name: 'others'},
        {id: 8, category_id: 1, name: 'others'}
      ]);
    });
};
