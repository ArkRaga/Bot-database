const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const n = "Questlogs";

module.exports = {
  all,
  usersAll,
  add,
  update,
  del,
};

function all() {
  return db(n)
    .join("Quests as q1", `${n}.quests_id`, "=", "q1.quest_id")
    .join("Users as u1", `${n}.user_discord_id`, "=", "u1.discordId")
    .select(`${n}.*`, "q1.name as quest_name", "u1.username as user_name");
}

function usersAll(id) {
  return db(n).where("questlog_id", id);
}

function add(ele) {
  return db(n).insert(ele);
}

function update(ele) {
  return db(n).where("questlog_id", ele.questlog_id).update(ele);
}

function del(ele) {
  return db(n)
    .where("user_discord_id", ele.user_discord_id)
    .where("quests_id", ele.quests_id)
    .del();
}
