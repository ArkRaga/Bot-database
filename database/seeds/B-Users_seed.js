// username, discordId,

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Users").insert([
        { User_id: 1, username: "jimmyJohn", discordId: 7245 },
        {
          User_id: 2,
          username: "JerseyMikes",
          discordId: 5512,
          class: "Werewolf",
        },
      ]);
    });
};
