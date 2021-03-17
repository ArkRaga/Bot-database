exports.up = function (knex) {
  return knex.schema.createTable("CharacterSkills", (chrsk) => {
    chrsk.increments("charskill_id");

    chrsk
      .integer("user_id")
      .unsigned()
      .references("User_id")
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
