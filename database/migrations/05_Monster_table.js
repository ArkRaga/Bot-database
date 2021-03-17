exports.up = function (knex) {
  return knex.schema.createTable("Monsters", (mon) => {
    mon.increments("monster_id");
    mon.string("name").notNullable().unique();
    mon.string("type").notNullable();
    mon
      .integer("hunt_item_id")
      .unsigned()
      .references("item_id")
      .inTable("Items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Monsters");
};
