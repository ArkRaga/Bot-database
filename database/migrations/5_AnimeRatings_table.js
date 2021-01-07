exports.up = function (knex) {
  return knex.schema.createTable("AnimeRatings", (rate) => {
    rate.increments("Rating_id");
    rate
      .integer("anime_id")
      .unsigned()
      .notNullable()
      .references("Anime_id")
      .inTable("Anime")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    rate
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("User_id")
      .inTable("Users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    rate.integer("rating");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("AnimeRatings");
};
