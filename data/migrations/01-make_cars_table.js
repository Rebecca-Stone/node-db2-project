// #### Cars Schema

exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    // id 
    tbl.increments();
    // vin            string    required, unique
    tbl.string('vin').notNullable().unique();
    // make           string    required
    tbl.string('make').notNullable();
    // model          string    required
    tbl.string('model').notNullable();
    // mileage        numeric   required
    tbl.integer("mileage").notNullable();
    // title          string    optional
    tbl.string('title');
    // transmission   string    optional
    tbl.string('transmission');
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};
