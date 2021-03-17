exports.up = function (knex) {
  return knex.schema.createTable("Quests", (ele) => {
    ele.increments("quest_id");
    ele.string("name");
    ele.string("desc");
    ele.string("type");
    ele
      .integer("required_item_id")
      .notNullable()
      .unsigned()
      .references("item_id")
      .inTable("Items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    ele
      .integer("reward_item_id")
      .notNullable()
      .unsigned()
      .references("item_id")
      .inTable("Items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Quests");
};
