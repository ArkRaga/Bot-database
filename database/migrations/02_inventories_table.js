exports.up = function (knex) {
  return knex.schema.createTable("Inventories", (inv) => {
    inv
      .string("player_id")
      .notNullable()
      .unsigned()
      .references("discordId")
      .inTable("Users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    inv.string("item_id").notNullable();
    inv.integer("item_quantity").defaultsTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Inventories");
};
