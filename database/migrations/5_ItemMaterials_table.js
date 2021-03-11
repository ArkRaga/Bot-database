exports.up = function (knex) {
  return knex.schema.createTable("Mats", (mats) => {
    mats.increments("id");
    mats
      .integer("item_id")
      .unsigned()
      .notNullable()
      .references("item_id")
      .inTable("Items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    mats
      .integer("mat_id")
      .unsigned()
      .notNullable()
      .references("item_id")
      .inTable("Items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    mats.integer("quantity").defaultTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Mats");
};
