// user_id, monster_id, skill_id

exports.seed = function (knex) {
  // Deletes ALL existiCharacterSkills
  return knex("CharacterSkills")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("CharacterSkills").insert([
        { monster_id: 1, skill_id: 4 },
        { monster_id: 1, skill_id: 6 },
      ]);
    });
};
