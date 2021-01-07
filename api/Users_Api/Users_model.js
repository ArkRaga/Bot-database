const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const t = "Users";
const b = "BattleClass";

module.exports = {
  all,
  add,
  update,
  del,
};

function all() {
  // console.log(db(b).where("id", db(t)));
  return db(t)
    .select("username", "Name")
    .join(b, `${t}.classId`, "=", `${b}.Class_id`);
}

function add(ele) {
  return db(t).insert(ele);
}

function update(id, ele) {
  return db(t).where("id", id).update(ele);
}

function del(id) {
  return db(t).where("id", id).del();
}
