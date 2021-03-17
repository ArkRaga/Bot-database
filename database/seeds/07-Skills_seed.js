exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Skills")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Skills").insert([
        { name: "Basic" },
        { name: "Heal" },
        { name: "SwordStrike" },
        { name: "Bite" },
        { name: "Swipe" },
        { name: "Roar" },
      ]);
    });
};
