exports.up = function (knex) {
  return knex.schema.createTable("Skills", (skill) => {
    skill.increments("skill_id");
    skill.string("name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Skills");
};
