
exports.up = function(knex) {
  return knex.schema.createTable('province', table => {
    table.string('code').primary();
    table.string('name').notNullable();
  })
  .createTable('country', table => {
    table.string('code').primary();
    table.string('name').notNullable();
  })
  .createTable('user', table => {
    table.increments('id').primary();
    table.string('username').unique().notNullable();
    table.string('firstname').notNullable;
    table.string('lastname').notNullable;
    table.string('email').unique().notNullable;
    table.string('password').notNullable;
    table.string('house_num').notNullable;
    table.string('street').notNullable;
    table.string('city').notNullable;
    table.string('province_code').references('code').inTable('province');
    table.string('postalcode').notNullable;
    table.string('country_code').references('code').inTable('country');
    table.boolean('is_verified').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('payment_account', table => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('user');
    table.string('account_num').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('item_condition', table => {
    table.integer('id').primary();
    table.string('name').notNullable();
  })
  .createTable('category', table => {
    table.integer('id').primary();
    table.string('name').notNullable();
  })
  .createTable('sub_category', table => {
    /**
     * knex bug: it creates a PK by default when using increment()
     * so unable to create composite PK in this case,
     * has to change id to integer then user raw to alter table
     */
    table.integer('id').notNullable(); 
    table.integer('category_id').references('id').inTable('category');
    table.string('name').notNullable();
    table.primary(['id','category_id']);
  })
  // .raw('ALTER TABLE sub_category MODIFY id INT UNSIGNED AUTO_INCREMENT')
  .createTable('post', table => {
    table.increments('id').primary();
    table.integer('seller').unsigned().references('id').inTable('user');
    table.string('title').notNullable();
    table.text('description');
    table.decimal('price', 6, 2).notNullable();
    table.integer('item_condition_id').references('id').inTable('item_condition');
    table.integer('category_id').references('id').inTable('category');
    table.integer('sub_category_id').references('id').inTable('sub_category');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.boolean('is_active').defaultTo(true);
  })
  .createTable('image_list', table => {
    table.increments('id').primary();
    table.integer('post_id').unsigned().references('id').inTable('post');
    table.string('images_link').notNullable();
  })
  .createTable('rating', table => {
    table.increments('id').primary();
    table.integer('stars').notNullable();
    table.integer('rater').unsigned().references('id').inTable('user');
    table.integer('ratee').unsigned().references('id').inTable('user');
    table.string('title');
    table.text('description');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
  .createTable('biding', table => {
    table.increments('id').primary();
    table.integer('bidder').unsigned().references('id').inTable('user');
    table.integer('post_id').unsigned().references('id').inTable('post');
    table.decimal('bid').notNullable();
    table.boolean('is_active').defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
  .createTable('trans_status', table => {
    table.integer('id').primary();
    table.string('name');
  })
  .createTable('incoming_transaction', table => {
    table.increments('id').primary();
    table.decimal('amount', 6, 2).notNullable();
    table.integer('sender').unsigned().references('id').inTable('user');
    table.integer('post_id').unsigned().references('id').inTable('post');
    table.integer('payment_account_id').unsigned().references('id').inTable('payment_account');
    table.integer('trans_status_id').references('id').inTable('trans_status');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
  .createTable('outgoing_transaction', table => {
    table.increments('id').primary();
    table.decimal('amount', 6, 2).notNullable();
    table.integer('receiver').unsigned().references('id').inTable('user');
    table.integer('incoming_transaction_id').unsigned().references('id').inTable('incoming_transaction');
    table.integer('payment_account_id').unsigned().references('id').inTable('payment_account');
    table.integer('trans_status_id').references('id').inTable('trans_status');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('outgoing_transaction')
  .dropTableIfExists('incoming_transaction')
  .dropTableIfExists('trans_status')
  .dropTableIfExists('biding')
  .dropTableIfExists('rating')
  .dropTableIfExists('image_list')
  .dropTableIfExists('post')
  .dropTableIfExists('sub_category')
  .dropTableIfExists('category')
  .dropTableIfExists('item_condition')
  .dropTableIfExists('payment_account')
  .dropTableIfExists('user')
  .dropTableIfExists('province')
  .dropTableIfExists('country');
};
