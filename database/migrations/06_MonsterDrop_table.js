exports.up = function (knex) {
  return knex.schema.createTable("Monsterdrops", (mdrps) => {
    mdrps.increments("monsterdropId");

    mdrps
      .integer("monster_id")
      .notNullable()
      .unsigned()
      .references("monster_id")
      .inTable("Monsters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    mdrps
      .integer("item_id")
      .notNullable()
      .unsigned()
      .references("item_id")
      .inTable("Items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    mdrps.integer("item_quantity").defaultTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Monsterdrops");
};
