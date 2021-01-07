exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("AnimeMessage")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("AnimeMessage").insert([
        { Message_id: 1, anime_id: 1 },
        { Message_id: 2, anime_id: 1 },
        { Message_id: 3, anime_id: 1 },
      ]);
    });
};
