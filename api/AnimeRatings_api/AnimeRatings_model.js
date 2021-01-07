const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const n = "AnimeRatings";

module.exports = {
  all,
  add,
  update,
  del,
};

function all() {
  return db(n);
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
