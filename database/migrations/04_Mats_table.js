exports.up = function (knex) {
  return knex.schema.createTable("Mats", (mats) => {
    mats.increments("item_mat_id");

    mats
      .integer("crafted_item_id")
      .notNullable()
      .unsigned()
      .references("item_id")
      .inTable("Items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    mats
      .integer("mat_id")
      .notNullable()
      .unsigned()
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
