// username, discordId,

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Users").insert([
        { username: "jimmyJohn", discordId: "7245" },
        {
          username: "JerseyMikes",
          discordId: "5512",
          class: "Werewolf",
        },
        {
          username: "Arkraga",
          discordId: "595632750342569985",
          class: "Werewolf",
        },
      ]);
    });
};
