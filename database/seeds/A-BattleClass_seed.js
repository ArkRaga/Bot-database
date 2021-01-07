// id, Name
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("BattleClass")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("BattleClass").insert([
        { Class_id: -1, Name: "starter" },
        { Class_id: 1, Name: "Warrior" },
        { Class_id: 2, Name: "Mage" },
        { Class_id: 3, Name: "Rogue" },
        { Class_id: 4, Name: "Healer" },
      ]);
    });
};
