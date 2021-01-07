exports.up = function (knex) {
  return knex.schema.createTable("AnimeMessage", (msg) => {
    msg.increments("Message_id");
    msg
      .integer("anime_id")
      .unsigned()
      .notNullable()
      .references("Anime_id")
      .inTable("Anime")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("AnimeMessage");
};
