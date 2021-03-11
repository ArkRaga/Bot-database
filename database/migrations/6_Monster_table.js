exports.up = function (knex) {
  knex.schema.createTable("monsters", (mon) => {
    mon.increments("monster_id");
    mon.string("name").notNullable().unique();
    mon.string("type").notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("monsters");
};
