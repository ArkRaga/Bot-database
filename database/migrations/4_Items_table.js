exports.up = function (knex) {
  return knex.schema.createTable("Items", (item) => {
    item.increments("item_id");
    item.string("name").unique().notNullable();
    item.integer("quantity").defaultTo(0);
    item.string("type").defaultTo("material");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Items");
};
