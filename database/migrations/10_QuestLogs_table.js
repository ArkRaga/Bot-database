exports.up = function (knex) {
  return knex.schema.createTable("Questlogs", (ele) => {
    ele.increments("questlog_id");

    ele
      .text("user_discord_id")
      .notNullable()
      .unsigned()
      .references("discordId")
      .inTable("Users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    ele
      .integer("quests_id")
      .notNullable()
      .unsigned()
      .references("quest_id")
      .inTable("Quests")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Questlogs");
};
