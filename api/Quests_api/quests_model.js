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
  return db(n)
    .join("Items as ia", `${n}.required_item_id`, "=", "ia.item_id")
    .join("Items as ib", `${n}.reward_item_id`, "=", "ib.item_id")
    .select(
      `${n}.*`,
      "ia.name as required_item_name",
      "ib.name as reward_item_name"
    );
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
