const values = ["p1Turn", "p2Turn", "compleated"];

exports.up = function (knex) {
  return knex.schema.createTable("Combats", (combats) => {
    combats.increments("Combat_id");
    combats
      .integer("player1Id")
      .unsigned()
      .notNullable()
      .references("User_id")
      .inTable("Users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    combats
      .integer("player2Id")
      .unsigned()
      .notNullable()
      .references("User_id")
      .inTable("Users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    combats.enu("state", values);
    combats.boolean("isGoing").defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("combats");
};
