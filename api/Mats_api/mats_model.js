const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
const t = "Mats";

module.exports = {
  all,
  getById,
  add,
  update,
  del,
};

function all() {
  return db(t)
    .join("Items as ia", `${t}.crafted_item_id`, "=", "ia.item_id")
    .join("Items as ib", `${t}.mat_id`, "=", "ib.item_id")
    .select(
      `crafted_item_id`,
      "ia.name as crafted_item_name",
      `mat_id`,
      "ib.name as mat_item_name",
      `${t}.quantity as mat_item_required`
    );
}

function getById(id) {
  return db(t).where("item_mat_id", id);
}

function add(ele) {
  return db(t).insert(ele);
}

function update(id, ele) {
  return db(t).where("item_mat_id", id).update(ele);
}

function del(id) {
  return db(t).where("item_mat_id", id).del();
}
