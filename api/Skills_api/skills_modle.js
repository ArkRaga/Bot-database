const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const n = "Skills";

module.exports = {
  all,
  usersAll,
  add,
  update,
  del,
};

function all() {
  return db(n);
}

function usersAll(id) {
  return db(n).where("skill_id", id);
}

function add(ele) {
  return db(n).insert(ele);
}

function update(ele) {
  return db(n)
    .where("player_id", ele.player_id)
    .where("item_id", ele.item_id)
    .update(ele);
}

function del(id) {
  return db(n).where("player_id", id).del();
}
