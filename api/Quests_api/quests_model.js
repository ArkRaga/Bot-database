const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const n = "Quests";

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
  return db(n).where("quest_id", id);
}

function add(ele) {
  return db(n).insert(ele);
}

function update(ele) {
  return db(n).where("quests_id", ele.quests_id).update(ele);
}

function del(id) {
  return db(n).where("quests_id", id).del();
}
