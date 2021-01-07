exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("AnimeRatings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("AnimeRatings").insert([
        { Rating_id: 1, anime_id: 1, user_id: 1, rating: 5 },
        { Rating_id: 2, anime_id: 1, user_id: 2, rating: 5 },
        { Rating_id: 3, anime_id: 3, user_id: 1, rating: 5 },
      ]);
    });
};
