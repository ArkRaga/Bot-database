exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Mats")
    .del()
    .then(function () {
      // Inserts seed entries
      console.log("fin");
    });
};
