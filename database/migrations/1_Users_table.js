exports.up = function (knex) {
  return knex.schema.createTable("Users", (user) => {
    user.increments("User_id");
    user.text("username");
    user.integer("discordId");
    user.integer("points").defaultTo(0);
    user.integer("battleLevel").defaultTo(0);
    user
      .integer("classId")
      .unsigned()
      .notNullable()
      .defaultTo(-1)
      .references("Class_id")
      .inTable("BattleClass")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Users");
};
