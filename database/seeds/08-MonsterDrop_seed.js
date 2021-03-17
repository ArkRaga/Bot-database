exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Monsterdrops")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Monsterdrops").insert([
        { monster_id: 1, item_id: 1, item_quantity: 1 },
        { monster_id: 1, item_id: 6, item_quantity: 2 },
      ]);
    });
};
