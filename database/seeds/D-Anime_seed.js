exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Anime")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Anime").insert([
        { Anime_id: 1, Name: "DragonBallZedd" },
        { Anime_id: 2, Name: "ConanSoccerBoi" },
        { Anime_id: 3, Name: "ThriceGun" },
      ]);
    });
};
