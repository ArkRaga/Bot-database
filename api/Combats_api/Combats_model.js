const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const n = "Combats";

module.exports = {
  all,
  add,
  update,
  del,
};

function all() {
  return db(n)
    .join("Users as u1", `${n}.player1Id`, "=", "u1.User_id")
    .join("Users as u2", `${n}.player2Id`, "=", "u2.User_id")
    .select(
      `${n}.*`,
      `u1.username as player1Id`,
      `u1.discordId as p1_discordId`,
      "u2.username as player2Id",
      "u2.discordId as p2_discordId"
    );
}
function add(ele) {
  return db(n).insert(ele);
}

function update(id, ele) {
  return db(n).where("id", id).update(ele);
}

function del(id) {
  return db(n).where("id", id).del();
}
