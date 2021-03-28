exports.up = function (knex) {
  return knex.schema.createTable("Questlogs", (ele) => {
    ele.increments("questlog_id");
    ele.text("user_discord_id").notNullable();
    ele.integer("quests_id").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Questlogs");
};
