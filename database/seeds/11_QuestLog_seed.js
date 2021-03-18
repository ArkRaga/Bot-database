exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Questlogs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Questlogs").insert([
        { questlog_id: 1, user_discord_id: "7245", quests_id: 1 },
      ]);
    });
};
