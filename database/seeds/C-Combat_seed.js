exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Combats")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Combats").insert([
        {
          Combat_id: 1,
          player1Id: 1,
          player2Id: 2,
          state: "compleated",
          isGoing: false,
        },
      ]);
    });
};
