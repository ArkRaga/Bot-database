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
          required_item_id: 1,
          reward_item_id: 10,
        },
      ]);
    });
};
