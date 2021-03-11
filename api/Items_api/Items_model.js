const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const t = "Items";

module.exports = {
  all,
  getById,
  add,
  update,
  del,
};

function all() {
  return db(t);
}

function getById(id) {
  return db(t).where("item_id", id);
}

function add(ele) {
  return db(t).insert(ele);
}

function update(id, ele) {
  return db(t).where("item_id", id).update(ele);
}

function del(id) {
  return db(t).where("item_id", id).del();
}
