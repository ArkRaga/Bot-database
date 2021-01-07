exports.up = function (knex) {
  return knex.schema.createTable("BattleClass", (cls) => {
    cls.increments("Class_id");
    cls.text("Name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("BattleClass");
};
