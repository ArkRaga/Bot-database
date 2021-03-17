exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Monsters")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Monsters").insert([
        { name: "Wolf", type: "animal", hunt_item_id: 14 },
        { name: "Bear", type: "animal", hunt_item_id: 15 },
        { name: "Mimic", type: "monster" },
      ]);
    });
};
