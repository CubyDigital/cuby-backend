
exports.up = function(knex) {
  return knex.schema.createTable('services', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.decimal('deadline').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
