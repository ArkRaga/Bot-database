exports.up = function (knex) {
  return knex.schema.createTable("CharacterSkills", (chrsk) => {
    chrsk.increments("charskill_id");

    chrsk
      .text("user_discord_id")
      .unsigned()
      .references("discordId")
      .inTable("Users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .defaultTo(null);

    chrsk
      .integer("monster_id")
      .unsigned()
      .references("monster_id")
      .inTable("Monsters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .defaultTo(null);

    chrsk
      .integer("skill_id")
      .notNullable()
      .unsigned()
      .references("skill_id")
      .inTable("Skills")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("CharacterSkills");
};
