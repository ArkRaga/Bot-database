///player_id, item_id, quantity

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Inventories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Inventories").insert([
        { player_id: "7245", item_id: "1", item_quantity: 1 },
        { player_id: "7245", item_id: "17", item_quantity: 3 },
        { player_id: "7245", item_id: "16", item_quantity: 4 },
        { player_id: "595632750342569985", item_id: "1", item_quantity: 4 },
      ]);
    });
};
