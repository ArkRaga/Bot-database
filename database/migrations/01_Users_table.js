exports.up = function (knex) {
  return knex.schema.createTable("Users", (user) => {
    user.increments("User_id");
    user.text("username");
    user.text("discordId").unique().notNullable();
    user.integer("points").defaultTo(0);
    user.integer("battleLevel").defaultTo(0);
    user.text("class").defaultTo("StartClass");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Users");
};
