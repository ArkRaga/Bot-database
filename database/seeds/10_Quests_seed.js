exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Quests")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Quests").insert([
        {
          name: "Test Quest",
          desc: "This is but a test",
          type: "test",
          required_quantity: 1,
          required_item_id: 1,
          reward_item_id: 10,
        },
        {
          name: "pelt for pelt",
          desc: "bring me 10x pelts and ill give you armor",
          type: "Fetch",
          required_quantity: 10,
          required_item_id: 1,
          reward_item_id: 16,
        },
      ]);
    });
};
