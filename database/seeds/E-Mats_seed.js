exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Mats")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Mats").insert([
        { item_id: 16, mat_id: 1, quantity: 3 },
        { item_id: 16, mat_id: 6, quantity: 5 },
      ]);
    });
};
