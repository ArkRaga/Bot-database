exports.up = function (knex) {
  return knex.schema.createTable("Anime", (anims) => {
    anims.increments("Anime_id");
    anims.text("Name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Anime");
};
