const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const n = "CharacterSkills";

module.exports = {
  all,
  usersAll,
  add,
  update,
  del,
};

function all() {
  return db(n).join("Skills as sk", `${n}.skill_id`, "=", "sk.skill_id");
}

function usersAll(id) {
  return db(n).where("charskill_id", id);
}

function add(ele) {
  return db(n).insert(ele);
}

function update(ele) {
  return db(n).where("charskill_id", ele.charskill_id).update(ele);
}

function del(id) {
  return db(n).where("charskill_id", id).del();
}
